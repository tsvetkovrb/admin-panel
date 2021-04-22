import React from 'react';

import './Comment.scss';

export type CommentType = {
  comment: string;
};

export const Comment: React.FC<CommentType> = ({ comment }) => (
  <p className="comment">«{comment}»</p>
);
