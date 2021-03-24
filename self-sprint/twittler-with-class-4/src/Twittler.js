import React from 'react';
import NewTweet from "./NewTweet";
import SingleTweet from "./SingleTweet";

class Twittler extends React.Component {
  constructor(props){
    super(props);
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
    this.onChange = this.onChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  };

  onChange(event) {
    this.setState({
      content: event.target.value
    })
  };

  buttonClick() {
    this.setState((prevState) => {
      return {
        tweets: [...prevState.tweets, {
          uuid: this.state.tweets + 1,
          writer: '추성엽',
          date: new Date().toISOString().substring(0, 10),
          content: this.state.content
        }]
      }
    })
  }

  render() {
    return (
      <div>
        <NewTweet buttonClick={this.buttonClick} onChange={this.onChange}/>
        <ul>
          {this.state.tweets.map((t) => (
            <SingleTweet
              key={t.uuid}
              writer={t.writer}
              date={t.date}
              content={t.content}
            />
          ))}
        </ul>
      </div>
    );
  };
};

export default Twittler;