<template>
  <div id="connected">
    <section>
      <p>Connected as <b>{{ address}}</b></p>
    </section>
  </div>
</template>

<script>
export default {
    props: ["address"]

};
</script>

<style>
</style>