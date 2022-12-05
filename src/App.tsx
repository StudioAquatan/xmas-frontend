import {
  Container,
  Divider,
  Heading,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react';
import * as React from 'react';

export const App: React.FC = () => {
  return (
    <Container maxW={1120}>
      <Heading marginY='1.5'>Illmination Controller</Heading>
      <Divider />

      <Tabs>
        <TabList>
          <Tab>Account</Tab>
          <Tab>Devices</Tab>
          <Tab>Monitors</Tab>
          <Tab>Rules</Tab>
        </TabList>
      </Tabs>
    </Container>
  );
};
