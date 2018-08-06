//skills, interests, currently reading
<template>
  <div class="ui centered padded grid" id="about">
    <div class="stackable row center aligned">
      <div class="twelve wide computer twelve wide tablet twelve wide mobile column center aligned">
        <h2 class="ui header">
          <i class="building outline icon"></i>
          <div class="content">
            Education
            <div class="sub header">Second Homes</div>
          </div>
        </h2>
        <div class="ui segment">
          <div class="ui three stackable cards">
            <div class="ui card">
              <div class="content">
                <div class="center aligned header">Shiv Nadar University</div>
                <div class="center aligned description">
                  <div class="ui list">
                    <div class="item">2015 - <b>Current</b></div>
                    <div class="item"><b>8.47</b>/10.00</div>
                    <div class="item">Greater Noida</div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <div class="center aligned">
                  Graduation
                </div>
              </div>
            </div>
            <div class="ui card">
              <div class="content">
                <div class="center aligned header">Kendriya Vidyalaya</div>
                <div class="center aligned description">
                  <div class="ui list">
                    <div class="item">2014 - 2015</div>
                    <div class="item">94.60</div>
                    <div class="item">Indore</div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <div class="center aligned">
                  Senior Secondary
                </div>
              </div>
            </div>
            <div class="ui card">
              <div class="content">
                <div class="center aligned header">Kendriya Vidyalaya</div>
                <div class="center aligned description">
                  <div class="ui list">
                    <div class="item">2012 - 2013</div>
                    <div class="item">10.00/10.00</div>
                    <div class="item">Bhopal</div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <div class="center aligned">
                  High School
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="twelve wide computer twelve wide tablet twelve wide mobile column">
        <h2 class="ui header">
          <i class="clipboard outline icon"></i>
          <div class="content">
            Skills
            <div class="sub header">I am working on many of these</div>
          </div>
        </h2>
        <div class="ui segment">
          <div class="ui three stackable cards">
            <div class="ui card">
              <div class="content">
                <div class="center aligned header">Shiv Nadar University</div>
                <div class="center aligned description">
                  <div class="ui list">
                    <div class="item">2015 - <b>Current</b></div>
                    <div class="item"><b>8.47</b>/10.00</div>
                    <div class="item">Greater Noida</div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <div class="center aligned">
                  Graduation
                </div>
              </div>
            </div>
            <div class="ui card">
              <div class="content">
                <div class="center aligned header">Kendriya Vidyalaya</div>
                <div class="center aligned description">
                  <p>Some details here</p>
                </div>
              </div>
              <div class="extra content">
                <div class="center aligned">
                  Senior Secondary
                </div>
              </div>
            </div>
            <div class="ui card">
              <div class="content">
                <div class="center aligned header">Kendriya Vidyalaya</div>
                <div class="center aligned description">
                  <p>Some details here</p>
                </div>
              </div>
              <div class="extra content">
                <div class="center aligned">
                  High School
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    created() {
      $('.ui.styled.accordion')[0].accordion();
      console.log('created called');
    },
  }  
</script>
<style lang="scss" scoped>
#about 
{
  .column {
    margin: 50px;
  }
  .ui.segment {
    background: transparent !important;
    .ui.card {
      mix-blend-mode: overlay;
      background-color:white;
      .center.aligned.header {
        text-transform: uppercase;
        font-weight: 500;
      }
      .ui.list {
        .item {
          font-weight: 500;  
        }
      }
      .extra.content {
        text-transform: uppercase;
        font-weight: 800;
      }
    }
  }
}
</style>
