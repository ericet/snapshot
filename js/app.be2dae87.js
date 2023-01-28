(function(){var e={4979:function(e,t,s){"use strict";var a=s(3862),r=s(3396),o=s(7139);function n(e,t,s,n,l,i){const c=(0,r.up)("AppHeader"),d=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)([e.appTheme,"pt-0.5"])},[(0,r.Wm)(c),(0,r.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{theme:e.appTheme},null,8,["theme"])])),_:1})],2)}const l={id:"nav",class:"sm:container sm:mx-auto"},i={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},c={class:"flex justify-between items-center px-4 sm:px-0"},d={class:"sm:hidden"},p={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},u={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},h={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},g={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"};function m(e,t,s,a,o,n){const m=(0,r.up)("theme-switcher");return(0,r.wg)(),(0,r.iD)("nav",l,[(0,r._)("div",i,[(0,r._)("div",c,[(0,r.Wm)(m,{theme:o.theme,onThemeChanged:n.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,r._)("div",d,[(0,r._)("button",{onClick:t[0]||(t[0]=e=>o.isOpen=!o.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,r.wg)(),(0,r.iD)("svg",p,[o.isOpen?((0,r.wg)(),(0,r.iD)("path",u)):(0,r.kq)("",!0),o.isOpen?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("path",h))]))])])]),(0,r._)("div",g,[(0,r.Wm)(m,{theme:o.theme,onThemeChanged:n.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])])])}const f={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},y={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function x(e,t,s,o,n,l){return(0,r.wg)(),(0,r.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>l.toggleTheme&&l.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===s.theme?((0,r.wg)(),(0,r.iD)("i",f)):((0,r.wg)(),(0,r.iD)("i",y))])}var v={props:{theme:{type:String,required:!0}},methods:{toggleTheme(){const e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("themeChanged",e),this.$router.go()}}},w=s(89);const k=(0,w.Z)(v,[["render",x]]);var b=k,_=s(8164),D=s.n(_);function M(e,t,s,a,n,l){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)([s.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,r.Wm)(i,{to:"/",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Home"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(i,{to:"/About",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2","aria-label":"About"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})],2)}var S={props:["showModal","isOpen"]};const T=(0,w.Z)(S,[["render",M]]);var A=T,V={components:{ThemeSwitcher:b,AppHeaderLinks:A},data(){return{isOpen:!1,theme:""}},created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){D().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme(e){this.theme=e}},updated(){D().replace()}};const C=(0,w.Z)(V,[["render",m],["__scopeId","data-v-3518adad"]]);var O=C,q={components:{AppHeader:O},data:()=>({appTheme:localStorage.getItem("theme")}),mounted(){D().replace()},updated(){D().replace()}};const z=(0,w.Z)(q,[["render",n]]);var j=z,P=s(65),B=(0,P.MT)({state:{spaceMap:new Map},getters:{},mutations:{},actions:{},modules:{}}),H=s(2483);const W={class:"mx-auto mx-5"},K={class:"mx-auto max-w-4xl"},L=(0,r._)("header",null,[(0,r._)("h1",{class:"text-6xl leading-normal mb-2 text-black font-serif text-gray-700 dark:text-gray-100 transition-colors"}," Snapshot Voting ")],-1),Z=(0,r._)("p",{class:"ml-4 mb-5 font-serif text-gray-700 dark:text-gray-100 transition-colors"}," Vote multiple proposals in one shot ",-1),$=(0,r._)("h1",{class:"text-2xl leading-normal mb-2 text-black font-serif text-gray-700 dark:text-gray-100 transition-colors"}," Space ",-1),I={class:"mb-3 relative text-gray-700"},N=(0,r._)("option",{value:"none",hidden:""},"Select a Space",-1),Y=["value"],U={for:"default-toggle",class:"inline-flex relative items-center mb-4 cursor-pointer mt-2 ml-2"},E=(0,r._)("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),G=(0,r._)("span",{class:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"},"Use MetaMask ",-1),F={key:1,class:"mx-auto max-w-4xl mb-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},J=(0,r._)("span",{class:"block sm:inline"},"No proposals found or all proposals have been voted!",-1),R=(0,r._)("svg",{class:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[(0,r._)("title",null,"Close"),(0,r._)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})],-1),Q=[R];function X(e,t,s,n,l,i){const c=(0,r.up)("ConnectAccount"),d=(0,r.up)("ProposalsList"),p=(0,r.up)("KeysInput"),u=(0,r.up)("MetamaskVote"),h=(0,r.up)("AppFooter");return(0,r.wg)(),(0,r.iD)("div",W,[(0,r._)("div",K,[L,Z,$,(0,r._)("div",I,[(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.selected=e),onChange:t[1]||(t[1]=(...e)=>i.getActiveProposals&&i.getActiveProposals(...e)),class:"w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline disabled:cursor-not-allowed"},[N,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.options,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.value,value:e.value},(0,o.zw)(e.text),9,Y)))),128))],544),[[a.bM,l.selected]]),(0,r._)("label",U,[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>l.useMetamask=e),"true-value":"true","false-value":"false",id:"default-toggle",class:"sr-only peer",onChange:t[3]||(t[3]=(...e)=>i.toggle&&i.toggle(...e))},null,544),[[a.e8,l.useMetamask]]),E,G,l.address.length>0?((0,r.wg)(),(0,r.j4)(c,{key:0,address:l.address,class:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"},null,8,["address"])):(0,r.kq)("",!0)])]),l.proposals.length>0?((0,r.wg)(),(0,r.j4)(d,{key:0,proposals:l.proposals,useMetamask:l.useMetamask,class:"mx-auto max-w-4xl"},null,8,["proposals","useMetamask"])):(0,r.kq)("",!0),0==l.proposals.length&&l.ready?((0,r.wg)(),(0,r.iD)("div",F,[J,(0,r._)("span",{class:"absolute top-0 bottom-0 right-0 px-4 py-3",onClick:t[4]||(t[4]=(...e)=>i.close&&i.close(...e))},Q)])):(0,r.kq)("",!0)]),l.proposals.length>0&&("false"===l.useMetamask||!1===l.useMetamask)?((0,r.wg)(),(0,r.j4)(p,{key:0,proposals:l.proposals,class:"mx-auto max-w-4xl mb-10"},null,8,["proposals"])):(0,r.kq)("",!0),l.proposals.length>0&&("true"===l.useMetamask||!0===l.useMetamask)?((0,r.wg)(),(0,r.j4)(u,{key:1,proposals:l.proposals,class:"mx-auto max-w-4xl mb-10"},null,8,["proposals"])):(0,r.kq)("",!0),(0,r.Wm)(h)])}s(7658);const ee=[{id:"uniswap",name:"Uniswap"},{id:"sushigov.eth",name:"Sushi"},{id:"hop.eth",name:"Hop Exchange"},{id:"gnosis.eth",name:"GnosisDAO"},{id:"1inch.eth",name:"1inch Network"},{id:"gitcoindao.eth",name:"Gitcoin"},{id:"ens.eth",name:"ENS"},{id:"aave.eth",name:"AAVE"},{id:"stgdao.eth",name:"Stargate DAO"},{id:"arbitrum-odyssey.eth",name:"Arbitrum Odyssey"},{id:"opcollective.eth",name:"Optimism Collective"},{id:"curve.eth",name:"Curve Finance"},{id:"shellprotocol.eth",name:"Shell Protocol"},{id:"dydxgov.eth",name:"dYdX"},{id:"balancer.eth",name:"Balancer"},{id:"sismo.eth",name:"Sismo"},{id:"layer2dao.org",name:"Layer2 DAO"},{id:"lido-snapshot.eth",name:"Lido"},{id:"mail3.eth",name:"Mail3"}];var te=s(3962),se=s(744),ae=s(520),re=s(5941);function oe(e){let t=new se.w5(e);return t}function ne(e){try{new se.w5(e)}catch(t){return re.log(t),!1}return!0}async function le(e){if("true"===e||!0===e){let e=new ae.Q(window.ethereum);const t=await e.send("eth_requestAccounts");return t[0]}return""}const ie={class:"min-h-full"},ce={class:"overflow-x-auto w-full"},de={class:"mx-auto w-full rounded-lg bg-white divide-gray-300 overflow-hidden"},pe={class:"bg-gray-900"},ue={class:"text-white text-left"},he={key:0,class:"font-semibold text-sm uppercase px-2 py-2 text-center"},ge={key:1,class:"font-semibold text-sm uppercase px-2 py-2 text-center"},me=(0,r._)("th",{class:"font-semibold text-sm uppercase px-2 py-2 text-center"}," Space ",-1),fe=(0,r._)("th",{class:"font-semibold text-sm uppercase px-2 py-2 text-center"}," Title ",-1),ye=(0,r._)("th",{class:"font-semibold text-sm uppercase px-2 py-2 text-center hidden md:table-cell"}," Voting End Time ",-1),xe=(0,r._)("th",{class:"font-semibold text-sm uppercase px-2 py-2 text-center"}," Choice ",-1),ve={class:"divide-y divide-gray-200"},we={key:0,class:"px-2 py-2 text-center"},ke={class:"text-center"},be={key:1,class:"px-5 py-5 text-center"},_e={class:"text-center"},De={key:0},Me={class:"group relative"},Se=(0,r._)("i",{"data-feather":"clock",class:"stroke-orange-300 text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},null,-1),Te={class:"absolute hidden group-hover:flex -top-1 -right-3 translate-x-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm"},Ae={key:1},Ve={class:"group relative"},Ce=(0,r._)("i",{alt:"test","data-feather":"x-circle",class:"stroke-red-600 text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},null,-1),Oe={class:"absolute hidden group-hover:flex -top-1 -right-3 translate-x-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm"},qe={key:2},ze={class:"group relative"},je=(0,r._)("i",{"data-feather":"check-circle",class:"stroke-green-300 text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},null,-1),Pe={class:"absolute hidden group-hover:flex -top-1 -right-3 translate-x-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm"},Be={key:3,class:"flex justify-right"},He={class:"group relative flex justify-right"},We=(0,r._)("i",{"data-feather":"alert-circle",class:"stroke-red-300 text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},null,-1),Ke={class:"absolute hidden group-hover:flex -top-1 -right-3 translate-x-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm"},Le={class:"px-2 py-2 text-center"},Ze={class:"text-center"},$e={class:"px-2 py-2 text-center"},Ie={class:"text-center"},Ne=["href"],Ye={class:"px-2 py-2 text-center hidden md:table-cell"},Ue={class:"text-left"},Ee=["value","onChange"],Ge=["value"],Fe={key:1,class:"text-left w-48 border-solid border-2 rounded-md"},Je=(0,r._)("option",{selected:"",value:"all"},"Vote for All",-1),Re=[Je];function Qe(e,t,s,n,l,i){return(0,r.wg)(),(0,r.iD)("div",ie,[(0,r._)("div",ce,[(0,r._)("table",de,[(0,r._)("thead",pe,[(0,r._)("tr",ue,["false"===s.useMetamask||!1===s.useMetamask?((0,r.wg)(),(0,r.iD)("th",he," # ")):(0,r.kq)("",!0),!0===s.useMetamask||"true"===s.useMetamask?((0,r.wg)(),(0,r.iD)("th",ge," Status ")):(0,r.kq)("",!0),me,fe,ye,xe])]),(0,r._)("tbody",ve,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.proposals,((e,t)=>((0,r.wg)(),(0,r.iD)("tr",{key:t,class:"hover:bg-blue-100"},["false"===s.useMetamask||!1===s.useMetamask?((0,r.wg)(),(0,r.iD)("td",we,[(0,r._)("div",ke,[(0,r._)("div",null,[(0,r._)("p",null,(0,o.zw)(t+1),1)])])])):(0,r.kq)("",!0),"true"===s.useMetamask||!0===s.useMetamask?((0,r.wg)(),(0,r.iD)("td",be,[(0,r._)("div",_e,[(0,r._)("div",null,["ready"===e.status_code?((0,r.wg)(),(0,r.iD)("span",De,[(0,r._)("div",Me,[Se,(0,r._)("span",Te,(0,o.zw)(e.status_message),1)])])):"error"===e.status_code?((0,r.wg)(),(0,r.iD)("span",Ae,[(0,r.Uk)((0,o.zw)(e.statu_code)+" ",1),(0,r._)("div",Ve,[Ce,(0,r._)("span",Oe,(0,o.zw)(e.status_message),1)])])):"success"===e.status_code?((0,r.wg)(),(0,r.iD)("span",qe,[(0,r._)("div",ze,[je,(0,r._)("span",Pe,(0,o.zw)(e.status_message),1)])])):"voted"==e.status_code?((0,r.wg)(),(0,r.iD)("span",Be,[(0,r._)("div",He,[We,(0,r._)("span",Ke,(0,o.zw)(e.status_message),1)])])):(0,r.kq)("",!0)])])])):(0,r.kq)("",!0),(0,r._)("td",Le,[(0,r._)("div",Ze,[(0,r._)("div",null,[(0,r._)("p",null,(0,o.zw)(i.getSpace(e.space)),1)])])]),(0,r._)("td",$e,[(0,r._)("div",Ie,[(0,r._)("div",null,[(0,r._)("a",{target:"_blank",href:`https://snapshot.org/#/${e.space}/proposal/${e.id}`},(0,o.zw)(e.title),9,Ne)])])]),(0,r._)("td",Ye,(0,o.zw)(i.getDate(e.end)),1),(0,r._)("td",Ue,["single-choice"===e.type?((0,r.wg)(),(0,r.iD)("select",{key:0,value:e.vote,class:"text-left w-48 border-solid border-2 rounded-md",onChange:(0,a.iM)((t=>i.change(t.target.value,e)),["stop"])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.choices,((e,t)=>((0,r.wg)(),(0,r.iD)("option",{key:t,value:t+1},(0,o.zw)(e),9,Ge)))),128))],40,Ee)):(0,r.kq)("",!0),"approval"===e.type?((0,r.wg)(),(0,r.iD)("select",Fe,Re)):(0,r.kq)("",!0)])])))),128))])])])])}var Xe={props:["proposals","useMetamask"],data(){return{selected:"1"}},mounted(){D().replace()},updated(){D().replace()},methods:{change(e,t){t.vote=e},getDate(e){return new Date(1e3*e).toLocaleDateString()},getSpace(e){return this.$store.state.spaceMap.get(e).name}}};const et=(0,w.Z)(Xe,[["render",Qe]]);var tt=et;const st={class:"fixed bottom-0 left-0 h-5 bg-blue-200 w-screen text-gray-700 z-40"},at=(0,r.uE)('<div class="flex flex-row-reverse mr-5 justify-center items-center"><div class="cursor-pointer self-center"><a href="https://twitter.com/ericet369" class="keychainify-checked" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="self-center" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></a></div><p class="text-sm font-mono mx-1"></p><div class="cursor-pointer self-center"><a href="https://github.com/ericet/snapshot" class="keychainify-checked" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="self-center" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a></div><p class="text-sm font-mono mx-2">Built by <a href="https://ericet.xyz" target="_blank">ericet</a></p></div>',1),rt=[at];function ot(e,t){return(0,r.wg)(),(0,r.iD)("div",st,rt)}const nt={},lt=(0,w.Z)(nt,[["render",ot]]);var it=lt;const ct={class:"mx-auto max-w-2xl mt-4"};function dt(e,t,s,a,o,n){const l=(0,r.up)("AccountsGrid"),i=(0,r.up)("KeyVote");return(0,r.wg)(),(0,r.iD)("div",ct,[(0,r._)("textarea",{rows:"10",onInput:t[0]||(t[0]=e=>n.getKeys(e)),class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"One private key per line"},null,32),(0,r.Wm)(l,{accounts:o.accounts},null,8,["accounts"]),o.accounts.length>0?((0,r.wg)(),(0,r.j4)(i,{key:0,accounts:o.accounts},null,8,["accounts"])):(0,r.kq)("",!0)])}const pt={class:"flex flex-col justify-center items-center"};function ut(e,t,s,a,o,n){return(0,r.wg)(),(0,r.iD)("div",pt,[(0,r._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>n.vote&&n.vote(...e)),class:"mt-4 mb-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}," Vote ")])}var ht={props:["accounts"],methods:{async vote(){this.clearVoteStatus();for(let e of this.accounts){let t=e.key,s=e.proposals;this.startVoting(t,s)}},clearVoteStatus(){for(let e of this.accounts)for(let t of e.proposals)t.status_code="",t.status_message=""},async startVoting(e,t){let s=oe(e),a="";for(let r of t){let e=await(0,te.hasVoted)(s.address,r.id);if(e)r.status_code="voted",r.status_message="This proposal has already Voted";else if(a!==r.space){let e=await(0,te.getVotingPowers)(r.id,s.address);a=r.space,0==e?(r.status_code="error",r.status_message="You don't have Voting Power to vote"):(r.status_code="ready",r.status_message="Ready to vote",await(0,te.vote)(s,r,"false"))}else r.status_code="error",r.status_message="You don't have Voting Power to vote"}}}};const gt=(0,w.Z)(ht,[["render",ut]]);var mt=gt;const ft={class:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 mt-6 sm:gap-10"};function yt(e,t,s,a,o,n){const l=(0,r.up)("AccountSingleVue");return(0,r.wg)(),(0,r.iD)("div",ft,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.accounts,((e,t)=>((0,r.wg)(),(0,r.j4)(l,{key:t,proposals:e.proposals,number:t+1},null,8,["proposals","number"])))),128))])}const xt={class:"px-2 py-2 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-100 cursor-pointer mb-10 sm:mb-0 mr-2 bg-secondary-light dark:bg-ternary-dark"},vt={class:"text-lg font-medium text-gray-800 dark:text-gray-100"},wt={class:"flex justify-between items-center mx-2"},kt={key:0},bt={class:"group relative"},_t=(0,r._)("i",{"data-feather":"clock",class:"stroke-orange-300 text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},null,-1),Dt={class:"absolute hidden group-hover:flex -top-1 -right-3 translate-x-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm"},Mt={key:1},St={class:"group relative"},Tt=(0,r._)("i",{alt:"test","data-feather":"x-circle",class:"stroke-red-600 text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},null,-1),At={class:"absolute hidden group-hover:flex -top-1 -right-3 translate-x-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm"},Vt={key:2},Ct={class:"group relative"},Ot=(0,r._)("i",{"data-feather":"check-circle",class:"stroke-green-300 text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},null,-1),qt={class:"absolute hidden group-hover:flex -top-1 -right-3 translate-x-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm"},zt={key:3,class:"flex justify-right"},jt={class:"group relative flex justify-right"},Pt=(0,r._)("i",{"data-feather":"alert-circle",class:"stroke-red-300 text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},null,-1),Bt={class:"absolute hidden group-hover:flex -top-1 -right-3 translate-x-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm"};function Ht(e,t,s,a,n,l){return(0,r.wg)(),(0,r.iD)("div",xt,[(0,r._)("p",vt," Wallet "+(0,o.zw)(s.number),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.proposals,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"font-general-semibold text-sm text-ternary-dark dark:text-ternary-light font-semibold mb-4",key:t},[(0,r._)("div",wt,[(0,r.Uk)((0,o.zw)(l.getSpace(e.space))+":【"+(0,o.zw)(t+1)+"】 ",1),"ready"==e.status_code?((0,r.wg)(),(0,r.iD)("span",kt,[(0,r._)("div",bt,[_t,(0,r._)("span",Dt,(0,o.zw)(e.status_message),1)])])):"error"==e.status_code?((0,r.wg)(),(0,r.iD)("span",Mt,[(0,r._)("div",St,[Tt,(0,r._)("span",At,(0,o.zw)(e.status_message),1)])])):"success"==e.status_code?((0,r.wg)(),(0,r.iD)("span",Vt,[(0,r._)("div",Ct,[Ot,(0,r._)("span",qt,(0,o.zw)(e.status_message),1)])])):"voted"==e.status_code?((0,r.wg)(),(0,r.iD)("span",zt,[(0,r._)("div",jt,[Pt,(0,r._)("span",Bt,(0,o.zw)(e.status_message),1)])])):(0,r.kq)("",!0)])])))),128))])}var Wt={props:["proposals","number"],mounted(){D().replace()},methods:{getSpace(e){return this.$store.state.spaceMap.get(e).name}},updated(){D().replace()}};const Kt=(0,w.Z)(Wt,[["render",Ht]]);var Lt=Kt,Zt={components:{AccountSingleVue:Lt},props:["accounts"]};const $t=(0,w.Z)(Zt,[["render",yt]]);var It=$t,Nt={props:["proposals"],components:{KeyVote:mt,AccountsGrid:It},data(){return{input:"",keys:[],accounts:[]}},methods:{getKeys(e){this.keys=[];let t=e.target.value.split("\n");for(let s of t)s.length>0&&ne(s.trim())&&this.keys.push(s.trim());this.proposals&&this.getVoteWallet()},getVoteWallet(){this.accounts=[];for(let e of this.keys)this.accounts.push({key:e,proposals:this.proposals})}}};const Yt=(0,w.Z)(Nt,[["render",dt]]);var Ut=Yt;const Et={class:"flex flex-col justify-center items-center"};function Gt(e,t,s,a,o,n){return(0,r.wg)(),(0,r.iD)("div",Et,[(0,r._)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>n.handleVote&&n.handleVote(...e)),class:"mt-4 mb-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}," Vote ")])}var Ft={props:["proposals"],methods:{async handleVote(){this.clearVoteStatus(),this.startVoting(this.proposals)},clearVoteStatus(){for(let e of this.proposals)e.status_code="",e.status_message=""},async startVoting(e){let t=new ae.Q(window.ethereum);const s=await t.send("eth_requestAccounts");let a="",r=!1,o={};o.address=s[0];for(let n of e){let e=await(0,te.hasVoted)(o.address,n.id);if(e)n.status_code="voted",n.status_message="This proposal has already Voted";else if(a!==n.space||r){let e=await(0,te.getVotingPowers)(n.id,o.address);a=n.space,0==e?(n.status_code="error",n.status_message="You don't have Voting Power to vote"):(n.status_code="ready",n.status_message="Ready to vote",await(0,te.vote)(o,n,"true"),r=!0)}else n.status_code="error",n.status_message="You don't have Voting Power to vote"}}}};const Jt=(0,w.Z)(Ft,[["render",Gt]]);var Rt=Jt;const Qt={id:"connected"};function Xt(e,t,s,a,n,l){return(0,r.wg)(),(0,r.iD)("div",Qt,[(0,r._)("section",null,[(0,r._)("p",null,[(0,r.Uk)("Connected as "),(0,r._)("b",null,(0,o.zw)(s.address),1)])])])}var es={props:["address"]};const ts=(0,w.Z)(es,[["render",Xt]]);var ss=ts,as={mounted(){window.ethereum&&window.ethereum.on("accountsChanged",(()=>{this.proposals=[],this.selected="none",this.ready=!1,this.response={},this.populateOptions(),this.updateAddress(this.useMetamask)}))},created(){for(let e of ee)this.$store.state.spaceMap.set(e.id,e);this.populateOptions(),this.updateAddress(this.useMetamask)},data(){return{selected:"none",proposals:[],spacesList:ee,options:[],ready:!1,useMetamask:!1,address:""}},methods:{close(){this.response={}},async toggle(){this.populateOptions(),this.updateAddress(this.useMetamask)},async updateAddress(){this.address=await le(this.useMetamask)},populateOptions(){this.options=[],this.options.push({text:"All Spaces",value:"all"});for(let e of ee)this.options.push({text:e.name,value:e.id});this.options.sort(((e,t)=>"All Spaces"===e.text||"All Spaces"===t.text?1:e.text<t.text?-1:e.text>t.text?1:0))},async getActiveProposals(){if(this.ready=!1,this.proposals=[],"all"===this.selected)for(let e of this.spacesList){let t=await(0,te.getActiveProposals)(e.id);if(t.length>0)for(let e of t)this.proposals.push(e)}else this.proposals=await(0,te.getActiveProposals)(this.selected);this.ready=!0}},components:{ProposalsList:tt,AppFooter:it,KeysInput:Ut,MetamaskVote:Rt,ConnectAccount:ss}};const rs=(0,w.Z)(as,[["render",X]]);var os=rs;const ns=[{path:"/",name:"home",component:os}],ls=(0,H.p7)({history:(0,H.r5)(),routes:ns});var is=ls;const cs=s(8164);cs.replace(),(0,a.ri)(j).use(B).use(is).mount("#app");const ds=localStorage.getItem("theme");"dark"===ds&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-slate-50")},3962:function(e,t,s){s(7658);const{ethers:a}=s(8899),r=s(1832),o=s(6265),n=new a.providers.JsonRpcProvider("https://rpc.ankr.com/eth");async function l(e,t,s){const{domain:r,types:o,message:n}=t.data,l=new a.Wallet(e.privateKey,s);return await l._signTypedData(r,o,n)}async function i(e){const t={method:"post",url:"https://hub.snapshot.org/api/msg",headers:{authority:"hub.snapshot.org",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8","content-type":"application/json",origin:"https://snapshot.org",referer:"https://snapshot.org/","sec-ch-ua":'"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"macOS"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"},data:JSON.stringify(e)};let s={};try{const e=await o(t);if(e.data.id)return s.status_code="success",s.status_message="Successfully voted!",s}catch(a){return s.status_code="error",s.status_message="Vote Failed: "+a.response.data,s}}async function c(e,t,s){const o=r.utils.toChecksumAddress(e.address);let c;if("approval"===t.type){let e=[];for(let s=1;s<=t.choices.length;s++)e.push(s);c={address:o,data:{domain:{name:"snapshot",version:"0.1.4"},types:{Vote:[{name:"from",type:"address"},{name:"space",type:"string"},{name:"timestamp",type:"uint64"},{name:"proposal",type:"string"},{name:"choice",type:"uint32[]"},{name:"reason",type:"string"},{name:"app",type:"string"}]},message:{space:t.space,proposal:t.id,choice:e,app:"snapshot",reason:"",from:o,timestamp:Math.floor(Date.now()/1e3)}}}}else c={address:o,data:{domain:{name:"snapshot",version:"0.1.4"},types:{Vote:[{name:"from",type:"address"},{name:"space",type:"string"},{name:"timestamp",type:"uint64"},{name:"proposal",type:"string"},{name:"choice",type:"uint32"},{name:"reason",type:"string"},{name:"app",type:"string"}]},message:{space:t.space,proposal:t.id,choice:Number(t.vote),app:"snapshot",reason:"",from:o,timestamp:Math.floor(Date.now()/1e3)}}};if("true"===s||!0===s){if(!window.ethereum)return void alert("Please install Metamask");await window.ethereum.enable();const e=new a.providers.Web3Provider(window.ethereum).getSigner(),{domain:t,types:s,message:r}=c.data;c.sig=await e._signTypedData(t,s,r)}else c.sig=await l(e,c,n);let d=await i(c);t.status_code=d.status_code,t.status_message=d.status_message}async function d(e,t){const s="https://hub.snapshot.org/graphql",a={query:`query Votes {\n        votes (\n          first: 1\n          where: {\n            proposal: "${t}",\n            voter: "${e}"\n          }\n        ) {\n          id\n          voter\n          created\n          vp\n          choice\n          space {\n            id\n          }\n        }\n      }\n    `},r=await o.post(s,a);return r.data.data.votes.length>0}async function p(e){const t=await fetch("https://hub.snapshot.org/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:`{"operationName":"Proposal","variables":{"id":"${e}"},"query":"query Proposal($id: String!) {\\n  proposal(id: $id) {\\n    id\\n    ipfs\\n    title\\n    body\\n    choices\\n    start\\n    end\\n    snapshot\\n    state\\n    author\\n    created\\n    plugins\\n    network\\n    type\\n    strategies {\\n      name\\n   network\\n   params\\n    }\\n    space {\\n      id\\n      name\\n    }\\n    scores_state\\n    scores\\n    scores_by_strategy\\n    scores_total\\n    votes\\n  }\\n}"}`});return JSON.parse(await t.text()).data.proposal}async function u(e,t){const s=await p(e),a=await fetch("https://score.snapshot.org",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({method:"get_vp",params:{space:s.space.id,delegation:!1,network:s.network,snapshot:parseInt(s.snapshot),strategies:s.strategies,address:t}})});let r=(await a.json()).result.vp;return r}async function h(e){const t="https://hub.snapshot.org/graphql?",s={query:`query Proposals {\n      proposals(first: 20, skip: 0, where: {space_in: ["${e}"], state: "active"}, orderBy: "created", orderDirection: desc) {\n        id\n        title\n        body\n        choices\n        start\n        end\n        snapshot\n        state\n        author\n        type\n        app\n        space {\n          id\n          name\n        }\n      }\n    }`},a=await o.post(t,s);return a.data.data.proposals.map((t=>({space:e,id:t.id,title:t.title,type:t.type,choices:t.choices,end:t.end,vote:"approval"===t.type?"all":"1"})))}e.exports={vote:c,hasVoted:d,getVotingPowers:u,getActiveProposals:h}},6601:function(){}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=e,function(){s.amdO={}}(),function(){var e=[];s.O=function(t,a,r,o){if(!a){var n=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],o=e[d][2];for(var l=!0,i=0;i<a.length;i++)(!1&o||n>=o)&&Object.keys(s.O).every((function(e){return s.O[e](a[i])}))?a.splice(i--,1):(l=!1,o<n&&(n=o));if(l){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,n=a[0],l=a[1],i=a[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(r in l)s.o(l,r)&&(s.m[r]=l[r]);if(i)var d=i(s)}for(t&&t(a);c<n.length;c++)o=n[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},a=self["webpackChunksnapshot_voting"]=self["webpackChunksnapshot_voting"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(4979)}));a=s.O(a)})();
//# sourceMappingURL=app.be2dae87.js.map