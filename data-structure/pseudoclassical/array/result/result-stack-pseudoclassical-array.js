/*
 * Stack is FIFO (First In First Out)
 * Type of storage: Array
 */
const Stack = function() {
  this._storage = [];
  this.top = 0;
};

// 'push' method is for push item ---------------------- //
Stack.prototype.push = function(item) {
  this._storage[this.top] = item;
  this.top ++;
};

// 'pop' method is for pop item ------------------------ //
Stack.prototype.pop = function() {
  if(this.top > 0) {
    this.top --;

    return this._storage[this.top];  // because 'index' is 'length - 1'
  } else return null;
};

// 'peek' method is just retrieve the first item ------- //
// The element retrieved does not get deleted or removed //
Stack.prototype.peek = function() {
  if(this.top > 0) {
    return this._storage[this.top - 1];
  } else return null;
};

// 'isEmpty' method is check a stack is empty or not. ---- //
Stack.prototype.isEmpty = function() {
  if(this.top === 0) {
    return true;
  } else {
    return false;
  }
};

// 'search' method is search for an element in the stack //
// and get its distance from the top. -------------------//
Stack.prototype.search = function(item) {
  let currentStorage = [];
  for(let n = 0; n < this.top; n++) {
    currentStorage.push(this._storage[n]); // bacause this.storage still have popped element
  }

  if(currentStorage.length === 0 || (!currentStorage.includes(item))) {
    return -1;
  } else {
    for(let i = this.top - 1; i >= 0; i--) {
      if(item === currentStorage[i]) {
        return this.top - i;
      }
    }
    return -1;
  }
};