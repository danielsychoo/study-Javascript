// * index.js는 pages dir 내에 있는 component들을 export해주는 묶음의 역할
// * 해당 dir 안에 index.js가 존재해야 App.js에서 import시 destructuring이 가능함

export { default as Home } from "./Home";
export { default as About } from "./About";
export { default as Posts } from "./Posts";
export { default as Post } from "./Post";
