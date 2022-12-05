import { Container, Spinner } from '@chakra-ui/react';
import React from 'react';

export const Loading = () => {
  return (
    <Container centerContent>
      <Spinner size='xl' />
    </Container>
  );
};
