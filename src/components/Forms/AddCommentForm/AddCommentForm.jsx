// @flow

import React from 'react';
import * as Yup from 'yup';

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import MaskedInput from 'react-text-mask';

import './AddCommentForm.scss';
import { FormikInput } from 'components/FormikInput/FormikInput';

const phoneRegExp = /(?=.*?[^\w\s])/;

const AddCommentSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is requred')
    .min(5, 'Title must be contain at least 5 caracters')
    .max(80, 'Maximum length must be no more than 80 characters'),
  text: Yup.string()
    .required('Text is required')
    .max(128, 'Maximum length must be no more than 128 characters'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone nubmier is requred'),
});

export const AddCommentForm = () => (
  <Formik
    initialValues={{
      title: '',
      text: '',
      phoneNumber: '',
    }}
    validationSchema={AddCommentSchema}
    onSubmit={(values) => {
      // eslint-disable-next-line
      alert(JSON.stringify(values, null, 2));
    }}
  >
    {({ isValid }) => (
      <Form className='add-comment-form'>
        <FormikInput name='title' placeholder='Title' />
        <FormikInput name='text' placeholder='Comment' />
        <Field
          name='phoneNumber'
          render={({ field }) => (
            <MaskedInput
              {...field}
              className='input'
              mask={[
                '(',
                /[1-9]/,
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
            />
          )}
        />
        <ErrorMessage
          component='span'
          className='text_color-error formik-input__error'
          name='phoneNumber'
        />
        <button className='button add-comment-form__button' type='submit' disabled={!isValid}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);
