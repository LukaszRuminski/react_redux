/**
 * Created by grubson on 26.03.2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../actions/contactActions';

class ContactPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      question: { title: ""}
    };

    this.onTitleChange =  this.onTitleChange.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this._handleEnterKeyPress = (e) => {
      if (e.key === 'Enter') {
        this.addQuestion();
      }
    };

  }

  onTitleChange(event){
    const question = this.state.question;
    question.title = event.target.value;
    this.setState({question: question});
  }

  addQuestion(){
    this.props.actions.createQuestion(this.state.question);
    this.clearInput();
  }
  clearInput(){
    this.refs.questionText.value="";
  }

  questionRow(question, index){
    return <div key={index}>{question.title}</div>;
  }

  render () {
    return (
      <div>
        <h1>Contact</h1>
        {this.props.questions.map(this.questionRow)}
        <h2>Add your Question</h2>
        <input
          ref="questionText"
          type="text"
          onChange={this.onTitleChange}
          value={this.state.question.title}
          onKeyPress={this._handleEnterKeyPress}
        />
        <input
          type="submit"
          value="Save"
          onClick={this.addQuestion}
        />
      </div>
    );
  }
}

ContactPage.propTypes = {
  questions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
  return{
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
