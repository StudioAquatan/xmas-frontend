import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import React from 'react';
import { Loading } from '../../components/Loading';
import { AllAccounts } from './components/AllAccounts';
import { SelfProfile } from './components/SelfProfile';

export const AccountsPage = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <section>
        <Card>
          <CardHeader>
            <Heading as='h3' size='md'>
              Logged in as
            </Heading>
          </CardHeader>
          <CardBody>
            <SelfProfile />
          </CardBody>
        </Card>
      </section>
      <section>
        <Card>
          <CardHeader>
            <Heading as='h3' size='md'>
              Account List
            </Heading>
          </CardHeader>
          <CardBody>
            <AllAccounts />
          </CardBody>
        </Card>
      </section>
    </React.Suspense>
  );
};
