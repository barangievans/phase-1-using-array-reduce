const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate totalBatteries using reduce()
const totalBatteries = batteryBatches.reduce((acc, batch) => {
    return acc + batch;
  }, 0);
  
  console.log(totalBatteries); // Output: 31
