const { ethers } = require('ethers')
const web3 = require('web3')
const axios = require("axios")

const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth")

async function get_signature (account, signData, provider) {
    const { domain, types, message } = signData.data
    const signer = new ethers.Wallet(account.privateKey, provider)
    return await signer._signTypedData(domain, types, message)
}

async function send_vote_request (data) {
    const config = {
        method: 'post',
        url: 'https://hub.snapshot.org/api/msg',
        headers: {
            'authority': 'hub.snapshot.org',
            'accept': 'application/json',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'content-type': 'application/json',
            'origin': 'https://snapshot.org',
            'referer': 'https://snapshot.org/',
            'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
        },
        data: JSON.stringify(data)
    };

    try {
        const res = await axios(config)
        if (res.data.id) {
            console.log(`${data.address} 投票成功`);
        }
    } catch (error) {
        console.log(`${data.address} 投票失败`, JSON.stringify(error.response.data));
    }
}

async function vote (account, space, proposal, choice) {
    const checksum_address = web3.utils.toChecksumAddress(account.address)
    const data = {
        "address": checksum_address,
        "data": {
            "domain": {
                "name": "snapshot",
                "version": "0.1.4"
            },
            "types": {
                "Vote": [
                    {
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "name": "space",
                        "type": "string"
                    },
                    {
                        "name": "timestamp",
                        "type": "uint64"
                    },
                    {
                        "name": "proposal",
                        "type": "string"
                    },
                    {
                        "name": "choice",
                        "type": "uint32"
                    },
                    {
                        "name": "reason",
                        "type": "string"
                    },
                    {
                        "name": "app",
                        "type": "string"
                    }
                ]
            },
            "message": {
                "space": space,
                "proposal": proposal,
                "choice": Number(choice),
                "app": "snapshot",
                "reason": "",
                "from": checksum_address,
                "timestamp": Math.floor(Date.now() / 1000)
            }
        }
    }
    data.sig = await get_signature(account, data, provider)
    await send_vote_request(data)
}
async function hasVoted (address, proposalId) {
    const url = 'https://hub.snapshot.org/graphql';
    const data = {
        query: `query Votes {
        votes (
          first: 1
          where: {
            proposal: "${proposalId}",
            voter: "${address}"
          }
        ) {
          id
          voter
          created
          vp
          choice
          space {
            id
          }
        }
      }
    `
    }
    const res = await axios.post(url, data);
    return res.data.data.votes.length > 0;
}

async function getProposal (proposalId) {
    const response = await fetch('https://hub.snapshot.org/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: `{"operationName":"Proposal","variables":{"id":"${proposalId}"},"query":"query Proposal($id: String!) {\\n  proposal(id: $id) {\\n    id\\n    ipfs\\n    title\\n    body\\n    choices\\n    start\\n    end\\n    snapshot\\n    state\\n    author\\n    created\\n    plugins\\n    network\\n    type\\n    strategies {\\n      name\\n   network\\n   params\\n    }\\n    space {\\n      id\\n      name\\n    }\\n    scores_state\\n    scores\\n    scores_by_strategy\\n    scores_total\\n    votes\\n  }\\n}"}`,
    })

    return JSON.parse(await response.text()).data.proposal
}


async function getVotingPowers (proposalId, address) {
    const proposal = await getProposal(proposalId);
    const response = await fetch('https://score.snapshot.org', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            method: "get_vp",
            params: {
                space: proposal.space.id,
                delegation: false,
                network: proposal.network,
                snapshot: parseInt(proposal.snapshot),
                strategies: proposal.strategies,
                address: address,
            }
        })
    })

    let vp = (await response.json()).result.vp;
    return vp;
}

async function get_active_proposals (space, simple) {
    const url = 'https://hub.snapshot.org/graphql?'
    const data = {
        query: `query Proposals {
      proposals(first: 20, skip: 0, where: {space_in: ["${space}"], state: "active"}, orderBy: "created", orderDirection: desc) {
        id
        title
        body
        choices
        start
        end
        snapshot
        state
        author
        type
        app
        space {
          id
          name
        }
      }
    }`
    }
    const res = await axios.post(url, data)
    if (simple) {
        return res.data.data.proposals.map(item => {
            return {
                id: item.id,
                title: item.title,
                type: item.type,
                choices: item.choices,
            }
        })
    }
    return res.data.data.proposals
}

async function vote_on (account, space, choice) {
    const proposals = await get_active_proposals(space)
    for (const proposal of proposals) {
        console.log(`Account: ${account.id} 投票进行中： ${space} - ${proposal.title} - ${proposal.choices[choice - 1]}`);
        await vote(account, space, proposal.id, choice)
    }
}

module.exports = {
    vote_on,
    vote,
    hasVoted,
    getVotingPowers
}