let bfs = function (node) {
  let queue = [node];
  const result = [];

  while(queue.length > 0) {
    let head = queue[0];
    queue = queue.slice(1);

    result.push(head.value);

    head.children.forEach(child => queue.push(child));
  }
  return result;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
// let output = bfs(root);
// console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]