import React from 'react';
import { UserProfile } from '..';
import { useUser } from '../../auth/api';

export const SelfProfile = () => {
  const { data } = useUser();

  return <UserProfile user={data!} />;
};
