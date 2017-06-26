<style>
    .city-card{
        border:1px solid #3385b7;
    }
    .place{
        text-align: left;
        font-size: 20px;
        font-weight: 600;
    }
    .day_time{
        text-align: left;
        font-size: 18px;
        font-weight: 500;
    }
    .temprature{
        font-size: 20px;
        font-weight: 600;
    }
</style>

<template>
  <div class="fluid-container">
      <div class="main-container">
          <div class="row">
              <div class="col-md-6 col-md-push-3 city-card">
                  <div class="place">
                      <span class="city">Mumbai,</span><span class="state"> Maharashtra</span>
                  </div>
                  <div class="day_time">
                      <span class="day">Monday </span><span class="time">1:00 PM</span>
                  </div>
                  <div class="temprature">17 *c</div>

              </div>
          </div>
      </div>
  </div>
</template>
