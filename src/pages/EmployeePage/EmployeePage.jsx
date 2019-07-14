import React from 'react';

import { AddCommentForm } from 'components/Forms/AddCommentForm/AddCommentForm';
import { CommentsList } from 'components/CommentsList/CommentsList';

import './EmployeePage.scss';

export class EmployeePage extends React.Component {
  state = {
    showCommentForm: false,
  };

  componentDidMount() {
    const {
      fetchEmployee,
      match: {
        params: { id },
      },
    } = this.props;
    fetchEmployee(id);
  }

  toggleBetweenFormAndList = () => {
    this.setState(prevState => ({
      showCommentForm: !prevState.showCommentForm,
    }));
  }

  render() {
    const { employee, sendComment } = this.props;
    const { showCommentForm } = this.state;
    return (
      <div className='employee-page flex jcc aic'>
        <div className='employee-page__content box'>
          <img className='employee-page__image' src={employee.photo} alt={employee.name} />
          <div className='employee-page__description'>
            <h2 className='employee-page__name mb30'>{employee.name}</h2>
            <p className='employee-page__position text_size-20 mb10'>
              <span className='text_bold'>Position: </span>
              <span>{employee.position}</span>
            </p>
            <p className='employee-page__address text_size-20 mb10'>
              <span className='text_bold'>Adress: </span>
              <span>{employee.address}</span>
            </p>
            <div className='employee-page__comments'>
              {showCommentForm ? (
                <AddCommentForm
                  id={employee.id}
                  showCommentsList={this.toggleBetweenFormAndList}
                  sendComment={sendComment}
                />
              ) : (
                <React.Fragment>
                  <CommentsList comments={employee.comments} />
                  <button
                    type='button'
                    className='button employee-page__button'
                    onClick={this.toggleBetweenFormAndList}
                  >
                    Add a comment
                  </button>
                </React.Fragment>
              )}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
