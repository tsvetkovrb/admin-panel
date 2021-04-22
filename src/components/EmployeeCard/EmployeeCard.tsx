import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import { CommentType } from 'components/Comment';

import './EmployeeCard.scss';

export type Person = {
  id: string;
  photo: string;
  name: string;
  position: string;
  comments: CommentType[];
  address: string;
};

type Props = {
  data: Person;
};

export const EmployeeCard: React.FC<Props> = ({ data }) => (
  <Link className="employee-card box" to={`/staff/${data.id}`}>
    <div className="employee-card__image">
      <img
        className="employee-card__profile-photo"
        src={data.photo}
        alt={data.name}
      />
    </div>
    <div className="employee-card__description">
      <h3 className="employee-card__name">
        <Truncate lines={1} ellipsis="...">
          {data.name}
        </Truncate>
      </h3>
      <p className="employee-card__position">
        <span className="text_bold">Position: </span>
        {data.position}
      </p>
    </div>
  </Link>
);
