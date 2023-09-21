function distanceFromHqInBlocks(blockNumber) {
    const hqLocation = 42; 
    return Math.abs(blockNumber - hqLocation); 
  }
  function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks(blockNumber);
    const feetPerBlock = 264; 
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetInBlock = 264; 
    const distanceInBlocks = Math.abs(destination - start); 
    return distanceInBlocks * feetInBlock; 
  }
  function calculatesFarePrice(startBlock, endBlock) {
      const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);
      return calculatedFare;
  }
  function calculatesFarePrice(startBlock, endBlock) {
      const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);
      let calculatedFare;
      if (feetTravelled <= 400) { 
          return 0; 
          } else if (feetTravelled > 400 && feetTravelled <= 2000) { 
          return (feetTravelled - 400) * 0.02; 
          } else if (feetTravelled > 2000 && feetTravelled <= 2500) { 
          return 25 ; 
          } else {
        calculatedFare = "cannot travel that far"; 
      }
       return calculatedFare;
  }