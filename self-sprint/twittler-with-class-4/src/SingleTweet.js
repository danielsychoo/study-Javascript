import React from 'react';

class SingleTweet extends React.Component {
  render(props) {
    // console.log(this.props)
    return (
      <li className='single-Tweet'>
        <div className='writer'>{ this.props.writer }</div>
        <div className='date'>{ this.props.date }</div>
        <div className='content'>{ this.props.content }</div>
      </li>
    );
  };
};

export default SingleTweet;