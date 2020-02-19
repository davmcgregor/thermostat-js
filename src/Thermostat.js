'use strict';

function Thermostat() {
  this.MINIMUM_TEMP = 10;
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype.getCurrentTemp = function() {
  return this.temp;
};

Thermostat.prototype.resetTemp = function() {
   this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.increase = function () {
  if (this.isMaximumTemp()) {
    return;
  }
  this.temp ++;
};

Thermostat.prototype.isMaximumTemp = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temp >= this.MAX_LIMIT_PSM_ON;
  }
  return this.temp >= this.MAX_LIMIT_PSM_OFF;
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

Thermostat.prototype.energyUsage = function() {
  if (this.temp < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temp >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temp <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
}