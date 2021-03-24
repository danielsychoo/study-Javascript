import React from 'react';

class NewTweet extends React.Component {

  render(props) {
    console.log(this.props.buttonClick)
    return (
      <div>
        <div>작성자: 추성엽</div>
        <textarea className='inputText' onChange={this.props.textChange}></textarea>
        <button className='tweetButton' onClick={this.props.buttonClick}>Tweet!</button>
      </div>
    );
  };
}

export default NewTweet;