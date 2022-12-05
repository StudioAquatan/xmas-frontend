import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { UserProfileData } from '../types';

export const UserProfile: React.FC<{ user: UserProfileData }> = ({ user }) => {
  return (
    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
      <Avatar name={user.displayName} src={user.iconUrl} />

      <Box>
        <Heading size='sm'>{user.displayName}</Heading>
        <Text>@{user.screenName}</Text>
      </Box>
    </Flex>
  );
};
