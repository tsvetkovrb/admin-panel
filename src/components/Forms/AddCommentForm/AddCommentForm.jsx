import React from 'react';
import * as Yup from 'yup';

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import MaskedInput from 'react-text-mask';

import { FormikInput } from 'components/FormikInput/FormikInput';
import { Button } from 'components/Button/Button';

import './AddCommentForm.scss';

const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

const AddCommentSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is requred')
    .min(5, 'Title must be contain at least 5 caracters')
    .max(80, 'Maximum length must be no more than 80 characters'),
  comment: Yup.string()
    .required('Comment is required')
    .max(128, 'Maximum length must be no more than 128 characters'),
  phone: Yup.string()
    .matches(phoneRegex, 'Phone number is not valid')
    .required('Phone nubmier is requred'),
});

export const AddCommentForm = ({ id, showCommentsList, sendComment }) => (
  <Formik
    initialValues={{
      title: '',
      comment: '',
      phone: '',
    }}
    validationSchema={AddCommentSchema}
    onSubmit={(values, { resetForm }) => {
      const data = {
        id,
        comment: values,
      };
      sendComment(data);
      resetForm();
      showCommentsList();
    }}
  >
    {({ isValid }) => (
      <Form className='add-comment-form'>
        <h4 className='employee-page__comments-title mb10'>Add comment: </h4>
        <FormikInput name='title' placeholder='Title' />
        <FormikInput name='comment' placeholder='Comment' />
        <Field
          name='phone'
          render={({ field }) => (
            <MaskedInput
              {...field}
              className='input'
              placeholder='Enter a Phone Number'
              mask={mask}
            />
          )}
        />
        <ErrorMessage
          component='span'
          className='text_color-error formik-input__error'
          name='phone'
        />
        <div className='add-comment-form__buttons'>
          <Button onClick={showCommentsList} type='button' className='employee-page__button mr20'>
            Cancel
          </Button>

          <Button type='submit' className='employee-page__button' disabled={!isValid}>
            Submit
          </Button>
        </div>
      </Form>
    )}
  </Formik>
);
