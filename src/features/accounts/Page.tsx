import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import React from 'react';
import { Loading } from '../../components/Loading';
import { AllAccounts } from './components/AllAccounts';
import { SelfProfile } from './components/SelfProfile';

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
