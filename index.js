const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


const assembledBatteries = [10, 5, 8, 2, 6];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const totalBatteries = assembledBatteries.reduce(reducer, 0);

module.exports = { totalBatteries };
