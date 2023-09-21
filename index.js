function distanceFromHqInBlocks(blockNumber) {
    const hqLocation = 42; // mtaa iko on the 42nd block
    return Math.abs(blockNumber - hqLocation); // distance in blocks from hq is gonna be the block you are at - hq(42)
  }
  function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks(blockNumber);
    const feetPerBlock = 264; 
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetInBlock = 264; // From canvas we saw 1 block = 264 feet
    const distanceInBlocks = Math.abs(destination - start); // to get distance between travelled blocks
    return distanceInBlocks * feetInBlock; // distance in feet btwn blocks is gonna be distance in blocks * 264
  }
  function calculatesFarePrice(startBlock, endBlock) {
      const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);
      return calculatedFare;
  }
  function calculatesFarePrice(startBlock, endBlock) {
      const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);
      let calculatedFare;
      if (feetTravelled <= 400) { //if feet travelled is less that 400 feet
          return 0; //fare is free
          } else if (feetTravelled > 400 && feetTravelled <= 2000) { //if feet is more than 400 but less than 2000 feet
          return (feetTravelled - 400) * 0.02; // fare is gonna be feet travelled * 2 cents
          } else if (feetTravelled > 2000 && feetTravelled <= 2500) { // if feet is more than 2000 feet but less than 2500
          return 25 ; // fare is gonna be 25 dollars
          } else {
        calculatedFare = "cannot travel that far"; // feet is more than 2500, not applicable 
      }
       return calculatedFare;
  }