/*
 * Stack is FIFO (First In First Out)
 * Type of storage: object
 */
const Stack = function() {
  this._storage = {};
  this.top = 0;
};

// 'push' method is for push item ---------------------- //
Stack.prototype.push = function(item) {
  this._storage[this.top] = item;
  this.top ++;
};

// 'pop' method is for pop item ------------------------ //
Stack.prototype.pop = function() {
  if(Object.keys(this._storage) > 0) {
    let result = this._storage[this.top - 1];
    delete this._storage[this.top - 1];
    this.top --;
    return result;
  } else return null;
};

// 'peek' method is just retrieve the first item ------- //
// The element retrieved does not get deleted or removed //
Stack.prototype.peek = function() {
  if(Object.keys(this._storage) > 0) return this._storage[this.top - 1];
  else return null;
};

// 'isEmpty' method is check a stack is empty or not. ---- //
Stack.prototype.isEmpty = function() {
  if(this.top === 0) return true;
  else return false;
};

// 'search' method is search for an element in the stack //
// and get its distance from the top. -------------------//
Stack.prototype.search = function(item) {
  let currentArray = Object.values(this._storage);
  if(currentArray.includes(item)) {
    for(let i = currentArray.length; i >= 0; i--) {
      if(currentArray[i] === item) {
        return currentArray.length - i;
      }
    }
  } else return -1;
};