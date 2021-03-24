/*
 * Singly linked list
 */
const LinkedList = function() {
  this.head = null;
  this.tail = null;
  this._size = 0;
};

const Node = function(value) {
  this.value = value;
  this.next = null;
};

LinkedList.prototype.addToTail = function(value) {
  let node = new Node(value);
  let pointer = this.head;
  if(pointer === null) {
    this.head = node;
    this.tail = node;
    this._size ++;
  } else {
    while(pointer.next) { // next가 존재하는 동안 계속 이동
      pointer = pointer.next;
    }
    pointer.next = node;
    this.tail = node;
    this._size ++;
  }
};

LinkedList.prototype.remove = function(value) {
  let pointer = this.head;
  let prev = pointer;
  if(this._size === 0) { // LinkedList가 비어있으면 0
    return 0;
  }
  if(pointer.value === value) {
    this.head = pointer.next;
  }
};

LinkedList.prototype.getNodeAt = function(index) {
};

LinkedList.prototype.contains = function(value) {
};

LinkedList.prototype.indexOf = function(value) {
};

LinkedList.prototype.size = function() {
};