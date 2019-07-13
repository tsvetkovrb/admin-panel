import React from 'react';

import { Field, ErrorMessage } from 'formik';

import './FormikInput.scss';

export const FormikInput = ({
  fieldClassName = 'input', type = 'text', name, placeholder,
}) => (
  <div className='formik-input'>
    <Field className={fieldClassName} type={type} name={name} placeholder={placeholder} />
    <ErrorMessage component='span' className='text_color-error formik-input__error' name={name} />
  </div>
);
