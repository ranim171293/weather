<style>
*{
    overflow-x: hidden;
}
.main-container{
    border-top:1px solid #3385b7;
    padding:20px;
}
.card_one{
    border: 1px solid #3385b7;
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
    cursor: pointer;
}
</style>
<template>
  <div class="fluid-container">
      <div class="main-container">
          <div class="row weather-row">
              <div class="col-md-3 card_one">
                  <!--<span><a href="#" class="/add-weather"> +</a></span>-->
                  <span class="add-weather" v-on:click="addWeather">+</span>
              </div>
              <!--<div class="col-md-3 card_one" v-for="country in countries">
                  <div class="city">{{country.city}}</div>
                  <div class="temp">{{country.temp}}</div>
              </div>-->
               <div class="col-md-4 city-card" v-bind:class="localstorage">
                  <div class="place">{{cityname}}</div>
                  <div><span class="temp">Humidity: </span> <span class="val"> {{humidity}} </span></div>
                  <div><span class="temp">Pressure: </span> <span class="val"> {{pressure}} </span></div>
                  <div><span class="temp">Temprature: </span> <span class="val"> {{temp}} </span></div>
                  <div><span class="temp">Max Temp: </span> <span class="val"> {{temp_max}} </span></div>
                  <div><span class="temp">Min Temp: </span> <span class="val"> {{temp_min}} </span></div>
               </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cityname: this.$localStorage.get('cityChanged'),
      humidity: this.$localStorage.get('humidity'),
      pressure: this.$localStorage.get('pressure'),
      temp: this.$localStorage.get('temp'),
      temp_max: this.$localStorage.get('temp_max'),
      temp_min: this.$localStorage.get('temp_min')
    }
  },
  methods: {
    addWeather: function () {
      window.location.href = '/#/addweather'
    },
    localstorage: function (data) {
      var status = []
      status = this.$localStorage.get('humidity')
      status.push(data)
      alert(status)
    }
  }
}
</script>
