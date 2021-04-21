import React, { ReactElement } from 'react';

import { Loader } from 'components/Loader/Loader';

type Props = {
  loading: boolean;
  hasError: boolean;
  errorMessage: string;
  children: ReactElement;
};

export const LoadingWrapper: React.FC<Props> = ({
  loading,
  hasError,
  errorMessage,
  children,
}) => {
  if (loading) return <Loader />;

  if (hasError) throw new Error(errorMessage);

  return children;
};
