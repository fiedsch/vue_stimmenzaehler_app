<template>
  <div class="container">
    <h1>Vue-Zähler-App</h1>
    <div class="row">
      <div class="col-xs-12">
        <h2>Aktueller Stand {{ stand }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <button @click="reset()" class="btn btn-sm btn-warning">zurücksetzen</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  computed: {
    stand: function () {
      return this.$store.state.procount + ':' + this.$store.state.contracount
    }
  },
  methods: {
    reset: function () {
      if (confirm('zurücksetzen?')) {
        this.$store.commit('reset')
      }
    }
  }
}
</script>

<style>
.container {
  text-align: center;
}
</style>
