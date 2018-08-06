<template>
  <div class="ui centered grid">
    <div class="row">
      <div class="ten wide computer eight wide tablet eight wide mobile column middle aligned">
        <div class="ui segment">
          <h5 class="ui sub header quote" v-html="quote"></h5>
          <span class="ui sub header right floated author" v-html="author"></span>
        </div>
      </div>
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
<style lang="scss" scoped>

  .ui.segment {
      mix-blend-mode: overlay;
      background-color:white;
    }
</style>

