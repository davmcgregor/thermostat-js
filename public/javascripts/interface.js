$(document).ready(function() { 
  var thermostat = new Thermostat();
  thermostat.switchPowerSavingModeOff();
  updateTemp();

  $('#temperature-up').click(function() {
    thermostat.increase();
    updateTemp();
  })

  $('#temperature-down').click(function() {
    thermostat.decrease();
    updateTemp();
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemp();
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemp();
  })

  // $('PSM-switch').click(function() {
  //   thermostat.switchPowerSavingModeOn();
  //   $('#power-saving-status').text('on')
  //   updateTemp();
  // })

  // $('#PSM-off').click(function() {
  //   thermostat.switchPowerSavingModeOff();
  //   $('#power-saving-status').text('off')
  //   updateTemp();
  // })

  $('#PSM-switch').click(function(){
    if($(this).is(":checked")){
      thermostat.switchPowerSavingModeOn();
      updateTemp();
      $('.left-side').css({'background-color':'lightcyan'});
    }
    else if($(this).is(":not(:checked)")){
      thermostat.switchPowerSavingModeOff();
      updateTemp();
      $('.left-side').css({'background-color':'white'});
    }
  })

  function rightSide() {
    if (thermostat.getCurrentTemp() > 25 ){
      $('.right-side').css({'background-color':'red'});
    }
    else if (thermostat.getCurrentTemp() < 18){
      $('.right-side').css({'background-color':'green'});
    }
    else {
      $('.right-side').css({'background':'orange'});
    }
  }

  function updateTemp() {
    $('#temperature').text(thermostat.getCurrentTemp());
    rightSide();
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

});