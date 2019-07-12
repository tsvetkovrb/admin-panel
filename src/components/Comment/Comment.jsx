import React from 'react';

import './Comment.scss';

export const Comment = ({ comment }) => (
  <p className='comment'>
    «
    {comment}
    »
  </p>
);
