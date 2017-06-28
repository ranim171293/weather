<style>
    .city-card{
        border:1px solid #3385b7;
    }
    .place{
        text-align: left;
        font-size: 20px;
        font-weight: 600;
    }
    .temp{
        font-size: 18px;
        font-weight: 600;
    }
    .val{
        font-size: 18px;
    }
    .bttn{
        margin-bottom: 10px;
    }
</style>

<template>
  <div class="fluid-container">
      <div class="main-container">
          <button class="btn bttn" v-on:click="back">Back to Home</button>
          <div class="row">
              <div class="col-md-6 col-md-push-3 city-card">
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
      cityname: '',
      humidity: '',
      pressure: '',
      temp: '',
      temp_max: '',
      temp_min: ''
    }
  },
  methods: {
    back: function () {
      this.$localStorage.set('humidity', this.humidity)
      this.$localStorage.set('pressure', this.pressure)
      this.$localStorage.set('temp', this.temp)
      this.$localStorage.set('temp_max', this.temp_max)
      this.$localStorage.set('temp_min', this.temp_min)
      this.$router.push('/home')
    }
  },
  mounted: function () {
    this.$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.$localStorage.get('cityChanged', this.city) + '&appid=251c2117779c86bee5f38ece3c7781b9', {
    }).then(response => {
      console.log(response)
      this.cityname = response.body.name
      this.humidity = (response.body.main.humidity) + ' %'
      this.pressure = (response.body.main.pressure) + ' hpa'
      this.temp = (response.body.main.temp) - 273.15 + ' °C'
      this.temp_max = (response.body.main.temp_max) - 273.15 + ' °C'
      this.temp_min = (response.body.main.temp_min) - 273.15 + ' °C'
    })
  }
}
</script>
