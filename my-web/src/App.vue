<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/ResearchProject">Research/Project</router-link> |
    <router-link to="/Music">Music</router-link> |
    <router-link to="/Resume">Resume</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
}

nav a.router-link-exact-active {
  color: #969897;
}
</style>
