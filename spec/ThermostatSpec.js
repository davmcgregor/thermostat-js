'use strict';

describe('Thermostat',function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat(); 
  });

  it ('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });
  
  it ('can increase the temperature', function(){
    thermostat.increase()
    expect(thermostat.temp).toEqual(21);
  });

  it ('can decrease the temperature', function(){
    thermostat.decrease()
    expect(thermostat.temp).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decrease();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can reset to default temp', function() {
    thermostat.increase();
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  describe('when power saving mode is on', function() {
    it ('has a maximum temp of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.increase();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.increase();
      }
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });
  });
});