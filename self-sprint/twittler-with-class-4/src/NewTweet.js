import React from 'react';

class NewTweet extends React.Component {
  render(props) {
    // console.log(this.props.buttonClick)
    return (
      <div className='input-group'>
        <div>작성자: 추성엽</div>
        <textarea className='textBox' onChange={this.props.onChange}></textarea>
        <button className='newTweetBtn' onClick={this.props.buttonClick}>Tweet!</button>
      </div>
    );
  };
};

export default NewTweet;