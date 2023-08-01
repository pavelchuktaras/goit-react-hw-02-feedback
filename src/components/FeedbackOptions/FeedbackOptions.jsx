import { Component } from "react";
import styled from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

 export class FeedbackOptions extends Component {
 
  static defaultProps = {
    options: [],
  };

  render() {
    const { options, onFeedbackLeave } = this.props;
    return (
      <>
        <ul className={styled.list}>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <button className={styled.btn} type="button" onClick={onFeedbackLeave} value={option}>
                  {option}
                </button>
              </li>);
          })}
        </ul>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedbackLeave: PropTypes.func.isRequired,
};