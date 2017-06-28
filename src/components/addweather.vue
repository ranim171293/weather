
<template>
  <div class="fluid-container">
      <div class="main-container">
      <div class="row" style="margin-top: 5%">
        <div class="col-md-6 col-md-push-3">
            <div class="form-group">
                <select v-on:change="cityChanged" class="form-control">
                <option value="">select city</option>
                <option v-for="city in address_components" v-bind:value="city.short_name">{{city.short_name}}</option>
                </select>
            </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'cityChanged',
  data () {
    return {
      address_components: [],
      city: ''
    }
  },
  methods: {
    cityChanged: function (e) {
      for (var i = 0; i < this.address_components.length; i++) {
        if (this.address_components[i].short_name === e.target.value) {
          this.city = this.address_components[i].short_name
        }
      }
      this.$emit('cityChanged', e.target.value)
      this.$localStorage.set('cityChanged', this.city)
      console.log(this.$localStorage.get('cityChanged', this.city))
      this.$router.push('/weather')
    }
  },
  mounted: function () {
    this.$http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyA7JshcyVqXAKgFBQLA9BqtSsD-d0gm-TI', {
    }).then(response => {
      console.log(response)
      this.address_components = response.body.result.address_components
    })
  }
}
</script>
