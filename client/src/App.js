import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import { Profile, Project, About, Contact } from './Pages/index';


function App() {
  return (
    <div className="App">
      <Box margin='2rem 20rem' height='40rem'>
        <Tabs align='center' defaultIndex={1}>
          <TabList >
            <Tab>About</Tab>
            <Tab>Profile</Tab>
            <Tab>Projects</Tab>
            <Tab>Contact</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className='Card-Additional'>
              <About />
            </TabPanel >
            <TabPanel className='Card-Additional'>
              <Profile />
            </TabPanel>
            <TabPanel className='Card-Additional'>
              <Project />
            </TabPanel>
            <TabPanel className='Card-Additional'>
              <Contact />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div >
  );
}

export default App;
