import React from 'react';

import { Loader } from 'components/Loader/Loader';

type Props = {
  loading?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  children: any;
};

export const LoadingWrapper = ({
  loading,
  hasError,
  errorMessage,
  children,
}: Props) => {
  if (loading) return <Loader />;

  if (hasError) throw new Error(errorMessage);

  return children;
};
