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

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event){
    const question = this.state.question;
    question.title = event.target.value;
    this.setState({question: question});
  }

  onClickSave(){
    this.props.actions.createQuestion(this.state.question);
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
          type="text"
          onChange={this.onTitleChange}
          value={this.state.question.title}
        />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
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
