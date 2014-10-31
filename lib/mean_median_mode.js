var MeanMedianMode = function() {
  this.mean = function (numArray) {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
      sum += numArray[i];
    }
    return sum / numArray.length;
    //divide the total number
  };
    //console.log(findMean(numArray));

  this.median = function (a, b, c, d) {
    var numArray = Array.prototype.slice.call(arguments);
    numArray.sort(function(a, b) {return a - b; });
    //sort numbers numerically and in ascending order
    var midNum = Math.floor(numArray.length / 2);
    //rounds all the number to its nearest integer
    //get all the number from the list and divide by 2
    if(numArray.length % 2) {
      return numArray[midNum];
    } else {
      return ((numArray[midNum - 1] + numArray[midNum]) / 2);
    }
  };
  //console.log(findMedian(numArray));

  this.mode = function (a, b, c, d, e) {
    //sort number
    //scan the array for consectuive occurrence
    var arg = Array.prototype.slice.call(arguments);
    //make a copy of the array into objects
    var map = {};
    var maxEl = arg[0];
    var maxCount = 1;
    for(var i = 0; i < arg.length; i++)
    {
      var el = arg[i];
      if(map[el] === null) {
        map[el] = 1;
      } else {
        map[el]++;
      }
      if(map[el] > maxCount)
      {
        maxEl = el;
        maxCount = map[el];
      }
    }
    return maxEl;
  };
};
var mmm = new MeanMedianMode();
module.exports = mmm;

//co-programing guidance from thewillhuang on 'mode'
