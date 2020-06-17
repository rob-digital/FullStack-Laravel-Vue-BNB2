<template>

    <div>

<nav class="navbar navbar-expand-lg navbar-light " style="background-color: #e3f2fd;">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">

        <!-- <router-link class="nav-link btn-outline-dark" :to="{name: 'home'}">Home</router-link> -->
        <router-link class="nav-link " :to="{name: 'home'}"><button type="button" class="btn btn-outline-dark">Home</button></router-link>
      </li>
      <li class="nav-item">

        <router-link class="nav-link " :to="{name: 'contact'}"><button type="button" class="btn btn-outline-dark">Contact</button></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link " :to="{name: 'bookables'}"><button type="button" class="btn btn-outline-dark">Bookables</button></router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

        <router-view></router-view>
 <anime></anime>
        <sidebar></sidebar>
    </div>
</template>

<script>
    export default {
        name: 'Index'
    }
</script>

<style lang="scss" scoped>

</style>
