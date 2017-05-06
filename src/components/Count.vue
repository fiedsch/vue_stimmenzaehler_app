<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-xs-6">
        <h2>Pro</h2>
        <button class="btn btn-lg btn-success"
        @click="addTo('pro', +1)" ><b>+1</b></button>
        &nbsp;
        <button @click="addTo('pro', -1)" class="btn btn-sm btn-success">-1</button>
      </div>
      <div class="col-xs-6">
        <h2>Contra</h2>
        <button class="btn btn-lg btn-danger"
        @click="addTo('contra', +1)"><b>+1</b></button>
        &nbsp;
        <button @click="addTo('contra', -1)" class="btn btn-sm btn-danger">-1</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h2>Aktueller Stand {{ stand }}</h2>
        <!-- <input v-on:keyup.left="addTo('pro', +1)" v-on:keyup.right="addTo('contra', +1)"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'count',
  data: function () {
    return {
      msg: 'Stimmenzähler',
      procount: 0,
      contracount: 0
    }
  },
  computed: {
    stand: function () {
      return this.$store.state.procount + ':' + this.$store.state.contracount
    }
  },
  methods: {
    addTo: function (where, amount) {
      switch (where) {
        case 'pro':
          this.$store.commit('increment', ['pro', amount])
          break
        case 'contra':
          this.$store.commit('increment', ['contra', amount])
          break
        default:

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
