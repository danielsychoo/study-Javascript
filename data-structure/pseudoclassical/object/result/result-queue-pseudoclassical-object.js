/*
 * Queue is LIFO (Last In First Out)
 * Type of storage: object
 */
const Queue = function() {
  this._storage = {};
  this.head = 0;
  this.rear = 0;
};

// 'enqueue' method is for add item --------------------------- //
Queue.prototype.enqueue = function(item) {
  this._storage[this.head] = item;
  this.head++;
};

// 'dequeue' method is for remove item ------------------------ //
Queue.prototype.dequeue = function() {
  if(this.rear < this.head) {
    let result = this._storage[this.rear];
    delete(this._storage[this.rear]);
    this.rear++;
    return result;
  } else {
    return null;
  }
};

// 'peek' method is just retrieve the first item ------- //
// The element retrieved does not get deleted or removed //
Queue.prototype.peek = function() {
  if(this.rear < this.head) {
    return this._storage[this.rear];
  } else return null;
};

// 'isEmpty' method is check a stack is empty or not. ---- //
Queue.prototype.isEmpty = function() {
  if(Object.keys(this._storage).length === 0) {
    return true;
  } else {
    return false;
  }
};

// 'length' method returns the length of a queue object ------- //
Queue.prototype.length = function() {
  return Object.keys(this._storage).length;
};