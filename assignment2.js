// FOR EACH //
Array.prototype.myEach = function(callbackFn) { 	
  for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined) continue;
      callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    var mapArray = [];
	for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined) continue;
      mapArray.push(callbackFn(this[i], i, this));
    }
  return mapArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  var passed = [];
	for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined) continue;
      if (callbackFn(this[i], i, this) === true) {
      passed.push(this[i]);
      }
    }
  return passed;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        var bool = false;
        if (this[i] === true) continue;
        bool = callbackFn(this[i], i, this);
        if (bool === true) {
          return bool;
        }
      }
    return bool; 
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (callbackFn(this[i], i, this) === false) {
      return false;
    }
    else if (i === this.length-1 && callbackFn(this[i], i, this) === true) {
      return true;
    }
  }
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, initialValue) {
    // Initializing variable that will keep track of result as reducer walks through array
    var running = null;
    // Checks if initial value is provided and uses it if it is
    if (initialValue != undefined) {
        running = initialValue;
    }
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        // Case where array length is 1
        if (this.length === 1) {
            running += this[i];
            return running;
        }
        // Applies callback fn to first two elements of array 
        if (i === 0 && this.length >= 2) {
            running += callbackFn(this[i], this[i+1]);
            i++;
        }
        // Continues applying callback fn to rest of array after first 2 elements done
        else {
            running = callbackFn(running, this[i]);
        };
    };
    return running;
};

//INCLUDES//
Array.prototype.myIncludes = function(searchElement,fromIndex) {
  for (let i = 0; i <= this.length; i++) {
    if(this[i]===undefined) continue;
    if(this[i]===searchElement){
      return true;
    }
  } //Closes For Loop
  if(fromIndex >= this.length){
    return false;
  }
  return false;
};//Closes Function

// INDEXOF //
Array.prototype.myIndexOf = function(target) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        else if (this[i] === target) {
            return i;
        }
        else if (i === this.length-1 && this[i] !== target) {
            return -1;
        }
    };
};

// PUSH //
Array.prototype.myPush = function(...args) {
  let arg_i = 0;
	let length = this. length;
  
	for(let i = length; i < length + args.length; i++) {
		this[i] = args[arg_i];
		arg_i++;
	}
	return this.length;
};

//LASTINDEXOF//
Array.prototype.myLastIndexOf = function(target) {
	for (let i = (this.length-1); i < this.length; i--) {
      if (this[i] === target) {
        return i;
      }
      else if (i === 0 && this[i] !== target) {
        return -1;
      }
    };
};

// KEYS //
Object.grabKeys = function(obj) {
    var objKeys = [];
    for (const property in obj) {
        objKeys.push(property);
    }
    return objKeys;
};

// VALUES //
Object.grabValues = function(obj) {
  var passed = [];
  for(const property in obj){
    passed.push(property);
  }
  return passed
};
