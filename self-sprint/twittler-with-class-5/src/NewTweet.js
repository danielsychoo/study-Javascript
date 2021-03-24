import React from 'react';

class NewTweet extends React.Component {
  render(props) {
    // console.log(this.props.onChange)
    return (
      <div className='inputForm'>
        <div>작성자: 추성엽</div>
        <textarea className='textBox' onChange={this.props.onChange}></textarea>
        <button className='tweetButton' onClick={this.props.buttonHandler}>Tweet!</button>
      </div>
    );
  };
};

export default NewTweet;