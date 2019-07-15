import React from 'react';

import { AddCommentFormContainer as AddCommentForm } from 'containers/AddCommentFormContainer';

import { CommentsList } from 'components/CommentsList/CommentsList';
import { LoadingWrapper } from 'components/LoadingWrapper/LoadingWrapper';

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
  };

  renderCommentsList = (employee) => {
    const { isSendingComment } = this.props;
    return (
      <LoadingWrapper loading={isSendingComment}>
        <CommentsList comments={employee.comments} />
        <button
          type='button'
          className='button employee-page__button'
          onClick={this.toggleBetweenFormAndList}
        >
          Add a comment
        </button>
      </LoadingWrapper>
    );
  };

  render() {
    const {
      employee, isLoadingEmployeeData, hasError, error,
    } = this.props;
    const { showCommentForm } = this.state;

    return (
      <LoadingWrapper
        loading={isLoadingEmployeeData}
        hasError={hasError}
        errorMessage={error.message}
      >
        <div className='employee-page flex jcc aic'>
          <div className='employee-page__content box'>
            <img
              className='employee-page__image'
              src={employee.photo}
              alt={employee.name}
            />
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
                  />
                ) : (
                  this.renderCommentsList(employee)
                )}
              </div>
            </div>
          </div>
        </div>
      </LoadingWrapper>
    );
  }
}
