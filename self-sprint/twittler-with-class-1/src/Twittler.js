import React from "react";
import InputForm from "./InputForm";
import SingleTweet from "./SingleTweet";

class Twittler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [
        {
          uuid: 1,
          writer: "김코딩",
          date: "2020-10-10",
          content: "안녕 리액트"
        },
        {
          uuid: 2,
          writer: "박해커",
          date: "2020-10-12",
          content: "좋아 코드스테이츠!"
        }
      ],
    }
    this.newContentHandler = this.newContentHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  newContentHandler(event) {
    // console.log(event.target.value)
    this.setState({
      content: event.target.value
    })
  }

  buttonHandler() {
    // console.log('클릭했능교');
    this.setState({
      tweets: [...this.state.tweets, {
        uuid: this.state.tweets + 1,
        writer: '추성엽',
        date: new Date().toISOString().split('T')[0],
        content: this.state.content
      }]
    })
  };

  render() {
    // console.log(this.state.tweets)
    let arr = [];

    for(let i = 0; i < this.state.tweets.length; i++) {
      arr.push(<SingleTweet key={this.state.tweets[i].uuid} data={this.state.tweets[i]} />)
    }
    return (
      <div>
        <InputForm newContentHandler={this.newContentHandler} buttonHandler={this.buttonHandler}/>
        {arr}
      </div>
    )
  }
}

export default Twittler;