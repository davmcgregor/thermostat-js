'use strict';

describe('Thermostat',function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat(); 
  });

  it ('starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });
  
  it ('can increase the temperature', function(){
    thermostat.increase()
    expect(thermostat.temp).toEqual(21);
  });

  it ('can decrease the temperature', function(){
    thermostat.decrease()
    expect(thermostat.temp).toEqual(19);
  });
 
});