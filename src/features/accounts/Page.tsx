import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Loading } from '../../components/Loading';
import { AllAccounts, SelfProfile } from '.';

export const AccountsPage = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <section>
        <SelfProfile />
      </section>
      <section>
        <Heading as='h3' size='md' margin='1.5'>
          Account List
        </Heading>
        <AllAccounts />
      </section>
    </React.Suspense>
  );
};
