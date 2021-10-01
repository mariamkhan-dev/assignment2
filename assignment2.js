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
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

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
Array.prototype.myIndexOf = function() {

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

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
