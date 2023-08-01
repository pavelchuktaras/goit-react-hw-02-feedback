import { Component } from "react";
import { FeedbackOptions }  from "./FeedbackOptions/FeedbackOptions";
import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackLeave = (e) => {
    this.setState(prevState => ({
    [e.target.value]: prevState[e.target.value] + 1,
    }));
  };
  
  countTotalFeedbacks = () => {
    return Object.values(this.state).reduce((total, value) => (total += value));
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedbacks()) * 100);
  };

  render() {
    const {good, neutral, bad} = this.state
     return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onFeedbackLeave={this.onFeedbackLeave}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedbacks()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            message="There is no feedback"
          ></Statistics>
        </Section>
      </>
    );
  }
}

export default App;