import React from 'react'

class TweetList extends React.Component {
  render(props) {
    // console.log(this.props)
    return (
      <li className='singleTweet'>
        <div className='writer'>{this.props.tweet.writer}</div>
        <div className='date'>{this.props.tweet.date}</div>
        <div className='content'>{this.props.tweet.content}</div>
      </li>
    );
  };
};

export default TweetList;