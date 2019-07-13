import React from 'react';

import './EmployeePage.scss';
import { Comment } from 'components/Comment/Comment';
// import { AddCommentForm } from 'components/Forms/AddCommentForm/AddCommentForm';

export class EmployeePage extends React.Component {
  componentDidMount() {
    const {
      fetchEmployee,
      match: {
        params: { id },
      },
    } = this.props;
    fetchEmployee(id);
  }

  renderComments = (comments = []) => comments.map(comment => <Comment comment={comment.text} />);

  render() {
    const comments = [
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, provident!',
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, provident!',
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, provident!',
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, provident!',
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, provident!',
      },
    ];
    const { employee } = this.props;
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
              <h4 className='employee-page__comments-title mb10'>Comments: </h4>
              <div className='comments mb20'>{this.renderComments(comments)}</div>
              {/* <AddCommentForm /> */}
              <p className='button employee-page__button'>Add a comment</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
