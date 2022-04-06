const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const totalBatteries = batteryBatches.reduce(callBack, 0);
console.log(totalBatteries);

function callBack(previousValue, currentValue) {
    return previousValue + currentValue
}

