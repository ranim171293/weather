<style>
*{
    overflow-x: hidden;
}
.main-container{
    border:1px solid #000;
    padding:10px;
}
.card_one{
    border: 1px solid #000;
    margin:auto;
    height:50px;
}
.weather-row{
    display:flex;
}
.add-weather{
    text-align: center;
    font-weight: 800;
    font-size: 25px;
}
</style>
<template>
  <div class="fluid-container">
      <div class="main-container">
          <div class="row weather-row">
              <div v-if="!(countries.length ==3)" class="col-md-3 card_one">
                  <!--<span><a href="#" class="/add-weather"> +</a></span>-->
                  <span class="add-weather" v-on:click="addWeather()">+</span>
              </div>
              <div class="col-md-3 card_one" v-for="country in countries">
                  <div class="city">{{country.city}}</div>
                  <div class="temp">{{country.temp}}</div>
              </div>
              
          </div>
      </div>

    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      countries: [{
        city: 'pune',
        temp: '30 *c'
      },
      {
        city: 'mumbai',
        temp: '40 *c'
      }]
    }
  },
  methods: {
    addWeather: function () {
      console.log('i m clicked')
    }
  }
}
</script>
