import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Body from './components/Body/Body';
import ConsumptionPerDay from './components/ConsumptionPerDay/ConsumptionPerDay';
import Group157 from './components/Group157/Group157';
import Sidebar from './components/Sidebar/Sidebar';
import { styled } from '@mui/material/styles';
const Title = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(40, 40, 40, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `-0.44px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  position: `relative`,
  left: `51px`,
  top: `35px`,
  paddingBottom: `80px`,
});
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>  
          <Route path="/" element={
            <div>
            <div style={{ display: 'flex' }}>
            <div style={{ width: '13.8%' }}>
              <Sidebar />
              </div>
              <div style={{ display: 'flex' , flexDirection: 'column'}}>
              <Body />
              <div style={{ display: 'flex', flexDirection: 'row' , paddingLeft: '20px', paddingTop: '30px'}} >
              <ConsumptionPerDay />
              <div>
              <Title>{`Top emissions by type`}</Title>
              <Group157 />
              </div>
              </div>
              </div>
            </div>
            </div>
          } />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
