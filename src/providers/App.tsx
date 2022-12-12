import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  ChakraProvider,
  Container,
} from '@chakra-ui/react';
import { ConfirmContextProvider } from 'chakra-confirm';
import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { SWRConfig, Fetcher } from 'swr';
import { fetchJson } from '../lib/fetch';

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

const fetcher: Fetcher<unknown, [string, RequestInit | undefined]> = (
  resource,
  init
) => fetchJson(resource, init);
export const AppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ChakraProvider>
      <ConfirmContextProvider>
        <SWRConfig
          value={{ fetcher, shouldRetryOnError: false, suspense: true }}
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
          </ErrorBoundary>
        </SWRConfig>
      </ConfirmContextProvider>
    </ChakraProvider>
  );
};
