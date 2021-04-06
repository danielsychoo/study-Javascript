import React from 'react';
import NewTweet from "./NewTweet";
import SingleTweet from "./SingleTweet";

class Twittler extends React.Component {
  constructor(props) {
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
    this.buttonHandler = this.buttonHandler.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  buttonHandler() {
    // console.log('버튼 클릭 테스트');
    this.setState(prevState => {
      return {
        tweets: [...prevState.tweets, {
          uuid: this.state.tweets + 1,
          writer: "추성엽",
          date: new Date().toISOString().substring(0, 10),
          content: this.state.content
        }]
      };
    });
  };

  onChange(event) {
    // console.log(event.target.value)
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <div>
        <NewTweet buttonHandler={this.buttonHandler} onChange={this.onChange}/>
        <ul className='tweetList'>
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