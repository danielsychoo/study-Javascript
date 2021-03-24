import React from "react";

class SingleTweet extends React.Component {
  render(props) {
    // console.log(this.data)
    return (
      <>
        <div className='writer'>{ this.props.data.writer }</div>
        <div className='date'>{ this.props.data.date }</div>
        <div className='content'>{ this.props.data.content }</div>
      </>
    )
  }
}

export default SingleTweet;