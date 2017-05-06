<template>
  <!-- Static navbar -->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><sup>1</sup><sub>2</sub><sup>3</sup></a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <!-- TODO li class="active" via $route.fullPath ; ist das der Weg? -->
          <li :class="{ active: $route.fullPath == '/' }"><router-link :to="{ name: 'Count'}">Zählen</router-link></li>
          <li :class="{ active: $route.fullPath == '/about' }"><router-link :to="{ name: 'About'}">Info</router-link></li>
        </ul>
      </div><!--/.navbar-collapse -->
    </div><!--/.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style>
</style>
