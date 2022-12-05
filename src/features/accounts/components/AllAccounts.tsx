import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { useAccountList, UserProfile } from '..';

export const AllAccounts = () => {
  const { data } = useAccountList();
  return (
    <VStack align='stretch'>
      {data!.map((account) => (
        <Box key={account.userId}>
          <UserProfile user={account} />
        </Box>
      ))}
    </VStack>
  );
};
