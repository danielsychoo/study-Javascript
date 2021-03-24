// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const title = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

// ? Mouse Events 공식문서 -> https://www.w3schools.com/jsref/obj_mouseevent.asp

// * 7. ALL function handlers should be INSIDE of "superEventHandler"
const superEventHandler = {
  // * 1. The text of the title should change when the mouse is on top of it.
  handleMouseHover: () => {
    title.textContent = 'The mouse is here!';
    title.style.color = colors[0];
  },
  // * 2. the text of the title should change when the mouse is leaves it.
  handleMouseLeave: () => {
    title.textContent = 'The mouse is gone!';
    title.style.color = colors[1];
  },
  // * 3. When the window is resized the title should change.
  handleWindowResize: () => {
    title.textContent = 'You just resized!';
    title.style.color = colors[2];
  },
  // * 4. On right click the title should also change.
  handleRightClick: () => {
    title.textContent = 'That was a right click!';
    title.style.color = colors[3];
  }
};

// eventListeners 캡슐화
const superEventListener = () => {
  title.addEventListener('mouseover', superEventHandler.handleMouseHover); // 마우스를 올렸을 때
  title.addEventListener('mouseleave', superEventHandler.handleMouseLeave); // 마우스를 밖으로 보냈을 때
  window.addEventListener('resize', superEventHandler.handleWindowResize); // 창 크기를 조정했을 때
  window.addEventListener('contextmenu', superEventHandler.handleRightClick); // 우 클릭을 했을 때
}

superEventListener(); // eventListeners Rendering
title.style.display = 'inline-block'; // h2가 block이기 때문에 inline-block으로 변경

// * 5. The colors of the title should come from a color from the colors array
// * 6. Do NOT CHANGE .css, or .html files.
// * 8. IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN X