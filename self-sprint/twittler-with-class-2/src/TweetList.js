import React from 'react';

class TweetList extends React.Component {

  render(props) {
    // console.log(this.writer);
    // console.log(this.props.date);
    return (
      <li className='SingleTweet'>
        <div className='writer'>{ this.props.writer }</div>
        <div className='date'>{ this.props.date }</div>
        <div className='content'>{ this.props.content }</div>
      </li>
    );
  };
}

export default TweetList;