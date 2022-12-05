import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useAccountList, UserProfile } from '..';

export const AllAccounts = () => {
  const { data } = useAccountList();
  return (
    <VStack align='stretch'>
      {data!.map((account) => (
        <Card key={account.userId}>
          <CardHeader>
            <UserProfile user={account} />
          </CardHeader>
          <CardBody>
            <Stack direction='row' spacing={1}>
              {account.webhookActivated && <Badge>Webhook</Badge>}
              {account.useStream && <Badge>Stream</Badge>}
            </Stack>
          </CardBody>
        </Card>
      ))}
    </VStack>
  );
};
