import React from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          uuid: 1,
          writer: '김코딩',
          date: '2020-10-10',
          content: '안녕 리엑트'
        },
        {
          uuid: 2,
          writer: '박해커',
          date: '2020-10-12',
          content: '헬로우'
        }
      ]
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  componentDidMount() {

  }

  onClick() {
    const url = 'http://localhost:8080/messages'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uuid: this.state.tweets.length + 1,
        writer: '추성엽',
        date: new Date().toISOString().substring(0, 10),
        content: this.state.content
      })
  })
  .then(this.setState((prevState) => {
    return {
      tweets: [...prevState, {
        uuid: this.state.tweets.length + 1,
        writer: '추성엽',
        date: new Date().toISOString().substring(0, 10),
        content: this.state.content
      }]
    };
  }))
};

  onChange(event) {
    this.setState({
      content: event.target.value
    });
  };

  render() {
    return (
      <div>
        <NewTweet
          onClick={this.onClick}
          onChange={this.onChange}
        />
        <ul>
          {this.state.tweets.map(tweet => 
            <TweetList
              tweet={tweet}
              key={tweet.uuid}
            />
          )}
        </ul>
      </div>
    );
  };
};

export default App;
