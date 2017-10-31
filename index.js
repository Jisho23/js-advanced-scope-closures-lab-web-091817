function produceDrivingRange(range){
  return function(start, end){
    let first = parseInt(start);
    let second = parseInt(end);
    let absoluteDistance = 	Math.abs(first - second);
    let difference = range - absoluteDistance;
    if (difference > 0){
      return `within range by ${difference}`;
    }
    else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare * percent;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    }
  }
}
