import React from 'react'

class NewTweet extends React.Component {

  render(props) {
    return (
      <div className='inputForm'>
        <div>작성자: 추성엽</div>
        <textarea
          className='inputText'
          onChange={this.props.onChange}
        ></textarea>
        <button
          className='tweetBtn'
          onClick={this.props.onClick}
        >Tweet!</button>
      </div>
    );
  };
};

export default NewTweet;