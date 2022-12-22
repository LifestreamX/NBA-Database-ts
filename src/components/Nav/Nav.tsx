import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import nbalogo from '../../images/nbalogo.webp';
import './Nav.scss';

import { Link } from 'react-router-dom';
import Cards from '../players/Cards';
import Teams from '../teams/Teams';
import Games from '../games/Games';
import Stats from '../stats/Stats';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Nav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <nav className='header'>
      <div className='nav-wrapper'>
        <div className='logo-title-wrapper'>
          <Link to='/'>
            <img src={nbalogo} alt='' className='nav-logo' />
          </Link>
          <h1> NBA DATABASE</h1>
        </div>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <div className='nav-links'>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label='basic tabs example'
              >
                <Tab label='Players' {...a11yProps(0)} />

                <Tab label='Teams' {...a11yProps(1)} />
                <Tab label='Games' {...a11yProps(2)} />
                <Tab label='Stats' {...a11yProps(3)} />
              </Tabs>
            </div>
          </Box>
          <TabPanel value={value} index={0}>
            <Cards />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Teams />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Games />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Stats />
          </TabPanel>
        </Box>
      </div>
    </nav>
  );
}
