//exr 5
// Using for loop
function powerOfTwoForLoop(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(Math.pow(2, arr[i]));
    }
    return result;
  }
  
  // Using forEach
  function powerOfTwoForEach(arr) {
    let result = [];
    arr.forEach(num => {
      result.push(Math.pow(2, num));
    });
    return result;
  }
  
  // Using map
  function powerOfTwoMap(arr) {
    return arr.map(num => Math.pow(2, num));
  }


  //exr 6
  function evenOrOdd(arr) {
    return arr.map(num => {
      if (typeof num !== "number" || isNaN(num)) {
        return "N/A";
      } else if (num % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    });
  }
  //exr 7
  function fizzbuzz(arr) {
    return arr.map(num => {
      if (num % 3 === 0 && num % 5 === 0) {
        return "Fizz Buzz";
      } else if (num % 3 === 0) {
        return "Fizz";
      } else if (num % 5 === 0) {
        return "Buzz";
      } else {
        return num.toString();
      }
    });
  }
  