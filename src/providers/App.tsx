/// <reference types="vite/client" />

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  ChakraProvider,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { SWRConfig, Fetcher } from 'swr';

const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <Container maxW={1120}>
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Unexpected error occured</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    </Container>
  );
};

const apiRoot = `${import.meta.env.VITE_API_ROOT ?? ''}`;
const fetcher: Fetcher<unknown, [string, RequestInit | undefined]> = (
  resource,
  init
) =>
  fetch(`${apiRoot}${resource}`, {
    ...init,
    credentials: 'include',
  }).then((res) => res.json());

export const AppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ChakraProvider>
      <SWRConfig value={{ fetcher, shouldRetryOnError: false, suspense: true }}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      </SWRConfig>
    </ChakraProvider>
  );
};
