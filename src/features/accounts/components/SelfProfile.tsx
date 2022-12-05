import React from 'react';
import { useUser } from '../../auth/api';
import { UserProfile } from './UserProfile';

export const SelfProfile = () => {
  const { data } = useUser();

  return <UserProfile user={data!} />;
};
