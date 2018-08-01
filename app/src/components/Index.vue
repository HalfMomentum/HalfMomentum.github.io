<template>
  <div class="grid">
    <div class="row">
      <div class="segment center aligned">
        <img class="ui small circular middle aligned image" src="https://avatars0.githubusercontent.com/u/23341593?s=400&u=2c260827268f1b98e55e96398d4b953cc4d5c488&v=4"/>
        <h1 class="ui center aligned header">
          Madhav Malpani
        </h1>
      </div>

      <div class="ui horizontal bulleted link list">
        <router-link class="item" :to="{name: 'project'}">Projects</router-link>
        <router-link class="item" :to="{name: 'experience'}">Experience</router-link>
        <router-link class="item" :to="{name: 'about'}">About</router-link>
      </div>
      <h5 class="ui sub header" v-html="quote"></h5>
      <span class="ui disabled header" v-html="author"></span>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      quote: "A charming quote",
      author: "someone",
      support: "#"
    };
  },
  mounted() {
    this.get_quote();
  },
  methods: {
    get_quote() {
      let api_quote = this.axios.get('https://quotesondesign.com/wp-json/posts?filter[posts_per_page]=1').then(response=>{
          this.author = response.data[0].title;
          this.quote = response.data[0].content;
      },
      response=>{

      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
