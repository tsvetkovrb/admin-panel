import React from 'react';
import * as Yup from 'yup';

import { Formik, Form } from 'formik';

import { FormikInput } from 'components/FormikInput/FormikInput';
import { Button } from 'components/Button/Button';

import { request } from 'api/client';

import addUserIcon from 'static/add-user.svg';

import './AddUserForm.scss';

const AddUserSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is requred'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Email is not valid')
    .required('Email is required'),
  position: Yup.string().required('Position is requred'),
  address: Yup.string().required('Address is requred'),
});

export const AddUserPageForm = ({ goBack }) => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      address: '',
    }}
    validationSchema={AddUserSchema}
    onSubmit={(values, { resetForm }) => {
      const user = {
        name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        position: values.position,
        address: values.address,
        comments: [],
      };

      request.post('add-user/', user).then(response => console.log(response));
      resetForm();
    }}
  >
    {({ isValid }) => (
      <Form className='add-user-form'>
        <div className='add-user-form__image-wrapper mb40'>
          <img
            className='add-user-form__image'
            src={addUserIcon}
            alt='Add user icon'
          />
        </div>
        <div className='add-user-form__inputs mb40'>
          <FormikInput name='firstName' placeholder='First name' />
          <FormikInput name='lastName' placeholder='Last name' />
          <FormikInput name='email' placeholder='Email' />
          <FormikInput name='position' placeholder='Position' />
          <FormikInput name='address' placeholder='Address' />
        </div>
        <div className='add-user-form__buttons flex jcsb'>
          <button
            type='button'
            onClick={goBack}
            className='button add-user-form__link-back'
          >
            Back
          </button>
          <Button
            type='submit'
            className='add-user-form__button'
            disabled={!isValid}
          >
            Add User
          </Button>
        </div>
      </Form>
    )}
  </Formik>
);
