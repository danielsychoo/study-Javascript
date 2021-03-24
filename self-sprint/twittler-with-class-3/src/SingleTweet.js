import React from 'react';

class SingleTweet extends React.Component {
  render(props) {
    // console.log(this.props.date)
    return (
      <li className='singleTweet'>
        <div className='writer'>{ this.props.writer }</div>
        <div className='date'>{ this.props.date }</div>
        <div className='content'>{ this.props.content }</div>
      </li>
    )
  }
}

export default SingleTweet
