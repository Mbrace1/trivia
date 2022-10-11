import React from 'react';
import { decodeHTML } from '../lib';

class AnswerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.props.handleGuess}
        className='btn btn-outline-primary m-1'
      >
        {decodeHTML(this.props.answer)}
      </button>
    );
  }
}

export { AnswerButton };
