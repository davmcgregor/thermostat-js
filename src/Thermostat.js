'use strict';

function Thermostat() {
  this.MINIMUM_TEMP = 10;
  this.temp = 20;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
};

Thermostat.prototype.getCurrentTemp = function() {
  return this.temp;
};

Thermostat.prototype.increase = function () {
  if (this.isMaximumTemp()) {
    return;
  }
  this.temp ++;
};

Thermostat.prototype.isMaximumTemp = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temp === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temp === this.MAX_LIMIT_PSM_ON;
}

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