import React from 'react';
import Slider from 'react-slick';

import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

import { AddUserRound } from 'components/AddUser/AddUserRound/AddUserRound';

import './slick-theme.min.css';
import './slick.min.css';

import './StaffCaurusel.scss';

export class StaffCaurusel extends React.Component {
  componentDidMount() {
    const { staffList = [], fetchStaffList } = this.props;
    if (staffList.length === 0) {
      fetchStaffList();
    }
  }

  renderStaffItems = staffList => staffList.map(worker => (
    <Link to={`/staff/${worker.id}`} className='caurusel-item' key={v4()}>
      <img
        className='caurusel-item__image'
        src={worker.photo}
        alt={worker.name}
      />
    </Link>
  ));

  render() {
    const { staffList } = this.props;
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 7,
      slidesToScroll: 2,
      swipeToSlide: false,
    };
    return (
      <div className='caurusel'>
        <Slider {...settings}>
          <AddUserRound />
          {this.renderStaffItems(staffList)}
        </Slider>
      </div>
    );
  }
}
