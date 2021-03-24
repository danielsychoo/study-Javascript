import React from 'react';
import NewTweet from './NewTweet';
import TweetList from './TweetList';

class Twittler extends React.Component {
  constructor(prop) {
    super(prop);
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
      ]
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.textChange = this.textChange.bind(this);
  };

  textChange(event) {
    // console.log(event.target.value);
    this.setState({
      content: event.target.value
    });
  }

  buttonClick() {
    this.setState((prevState) => {
      return {tweets: [...prevState.tweets, {
        uuid: this.state.tweets + 1,
        writer: '추성엽',
        date: new Date().toISOString().substring(0, 10),
        content: this.state.content
      }]}
    })
      
      
    //   {
    //   tweets: [...this.state.tweets, {
    //     uuid: this.state.tweets + 1,
    //     writer: '추성엽',
    //     date: new Date().toISOString().substring(0, 10),
    //     content: this.state.content
    //   }]
    // })
  };

  render() {
    return (
      <>
        <NewTweet
          buttonClick={this.buttonClick}
          textChange={this.textChange}
          />
        <ul>
          {this.state.tweets.map((t) => (
            <TweetList
              key = {t.uuid}
              writer = {t.writer}
              date = {t.date}
              content = {t.content}
            />
          ))}
        </ul>
      </>
    );
  };
}

export default Twittler;
