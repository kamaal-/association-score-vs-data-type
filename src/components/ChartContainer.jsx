import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radar from './charts/Radar'
import Bar from './charts/Bar'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 490,
        flexDirection: 'column'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

function ChartContainer({row, chartTitle}) {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
    <div className={classes.root}>
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable auto tabs example">
                <Tab label="Bar Chart" {...a11yProps(0)} />
                <Tab label="Radar Chart" {...a11yProps(1)} />
            </Tabs>
        </div>
        <div>
            <TabPanel value={value} index={0}>
                <div style={{width: '520px', height: '380px'}}>
                    <Bar title={chartTitle} row={row}/>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{width: '520px', height: '380px'}}>
                    <Radar title={chartTitle} row={row}/>
                </div>
            </TabPanel>
        </div>
    </div>)
}

export default ChartContainer
