import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import { Profile, Project, About, Contact } from './Pages/index';


function App() {
  return (
    <div className="App">
      <Box margin='2rem 15rem' >
        <Tabs align='center'>
          <TabList >
            <Tab>About</Tab>
            <Tab>Profile</Tab>
            <Tab>Projects</Tab>
            <Tab>Contact</Tab>
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
            <TabPanel>
              <Contact />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div >
  );
}

export default App;
