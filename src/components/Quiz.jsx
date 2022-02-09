import React, { Component } from "react";
import "../styles/quiz.css";
import questions from "../resources/Question.json";

var index_value = 0;

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = { details: questions[index_value] };
  }

  next = () => {
    index_value += 1;
    this.setState({ details: questions[index_value] });
  };
  previous = () => {
    index_value -= 1;
    this.setState({ details: questions[index_value] });
  };

  quit = () => {
    document.getElementById("quiz-cont").style.display = "none";
  };
  render() {
    return (
      <div className="quiz-parent">
        <div className="quiz-cont" id="quiz-cont">
          <div id="quiz-container">
            <div className="head">Question</div>
            <div className="question-num">
              <p id="numbers">{index_value + 1} of 15</p>
              <p id="question">{this.state.details.question}</p>
            </div>
            <div className="options-container">
              <div className="option-cont-1">
                <button id="opt-1">{this.state.details.optionA}</button>
                <button id="opt-2">{this.state.details.optionB}</button>
              </div>
              <div className="option-cont-2">
                <button id="opt-3">{this.state.details.optionC}</button>
                <button id="opt-4">{this.state.details.optionD}</button>
              </div>
            </div>
          </div>
          <div className="controls">
            <button onClick={this.previous} id="prev">
              Previous
            </button>
            <button onClick={this.next} id="next">
              Next
            </button>
            <button onClick={this.quit} id="quit">
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
