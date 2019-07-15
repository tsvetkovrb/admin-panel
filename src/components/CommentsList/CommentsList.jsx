import React from 'react';
import { v4 } from 'uuid';

import { Comment } from 'components/Comment/Comment';

import './CommentsList.scss';

export const CommentsList = ({ comments = [] }) => {
  const lastComments = comments.length > 5 ? comments.slice(-5) : comments;
  return (
    <div className='comments-list  mb20'>
      <h4 className='employee-page__comments-title mb10'>Comments: </h4>
      <div className='comments'>
        {lastComments.reverse().map(comment => (
          <Comment comment={comment} key={v4()} />
        ))}
      </div>
    </div>
  );
};
