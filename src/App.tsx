import {
  Container,
  Divider,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import * as React from 'react';
import { AccountsPage } from './features/accounts';

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

        <TabPanels>
          <TabPanel>
            <AccountsPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
