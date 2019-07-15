import React from 'react';

import { Loader } from 'components/Loader/Loader';

export const LoadingWrapper = ({
  loading,
  hasError,
  errorMessage,
  children,
}) => {
  if (loading) return <Loader />;

  if (hasError) throw new Error(errorMessage);

  return children;
};
