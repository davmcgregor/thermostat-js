'use strict';

function Thermostat() {
  this.MINIMUM_TEMP = 10;
  this.temp = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemp = function() {
  return this.temp;
};

Thermostat.prototype.increase = function () {
  this.temp ++;
};

Thermostat.prototype.decrease = function () {
  if (this.isMinimumTemp()) {
    return;
  }
  this.temp --;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this.temp === this.MINIMUM_TEMP;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}