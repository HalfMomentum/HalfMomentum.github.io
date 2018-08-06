<template>
  <div id="app">
    <div class="ui centered grid">
      <div class="row">
        <div class="ten wide column center aligned">
          <div class="center aligned segment">
            <img class="ui small circular image centered" src="https://avatars0.githubusercontent.com/u/23341593?s=400&u=2c260827268f1b98e55e96398d4b953cc4d5c488&v=4"/>
            <h1 class="ui center aligned header">
              Madhav Malpani
            </h1>
            <div class="ui horizontal bulleted link list">
              <router-link class="item" :to="{name: 'about'}">About</router-link>
              <router-link class="item" :to="{name: 'project'}">Projects</router-link>
              <router-link class="item" :to="{name: 'experience'}">Experience</router-link>
            </div>
          </div>
          <!-- <div class="ui center aligned">
          </div> -->
        </div>
        
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
 .grid {
   
    img {
      margin-top: 20px;
    }
 }  
</style>