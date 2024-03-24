import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import Profile from './Pages/Profile';
import Project from './Pages/Project';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <Box m={5}>
        <Tabs align='center'>
          <TabList>
            <Tab>About</Tab>
            <Tab>Profile</Tab>
            <Tab>Project</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <About />
            </TabPanel>
            <TabPanel>
              <Profile />
            </TabPanel>
            <TabPanel>
              <Project />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}

export default App;
