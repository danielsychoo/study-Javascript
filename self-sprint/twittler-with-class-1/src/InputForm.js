import React from "react";

class InputForm extends React.Component {
  render(props) {
    // console.log(this.props.buttonHandler)
    return (
      <>
        <div>작성자: 추성엽</div>
        <div id='writing-area'>
          <textarea id='new-tweet-content' onChange={this.props.newContentHandler}></textarea>
          <button id='submit-new-tweet' onClick={this.props.buttonHandler}>새 글 쓰기</button>
        </div>
      </>
    );
  };
}

export default InputForm;