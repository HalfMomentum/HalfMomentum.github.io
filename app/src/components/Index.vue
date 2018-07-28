<template>
  <div class="grid">
    <div class="row">
      <div class="segment center aligned">
        <h1 class="ui center aligned header">
          <img class="ui massicve circular middle aligned image" src="https://avatars0.githubusercontent.com/u/23341593?s=400&u=2c260827268f1b98e55e96398d4b953cc4d5c488&v=4"/>
          <br>
          Madhav Malpani
        </h1>
      </div>

      <div class="ui horizontal bulleted link list">
        <router-link class="item" :to="{name: 'project'}">Projects</router-link>
        <router-link class="item" :to="{name: 'project'}">Experience</router-link>
        <router-link class="item" :to="{name: 'project'}">About</router-link>
      </div>

    </div>
    <div class="left aligned ten wide column row">
      <div class="segment">
        <h2 class="header">
          About
        </h2>
        <p>Something about me, maybe a copied text here :p</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
