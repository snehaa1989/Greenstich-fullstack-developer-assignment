import React from 'react';
import UnionImage from 'src/assets/images/Sidebar_Union.png';
import Union1Image from 'src/assets/images/Sidebar_Union_1.png';
import Union2Image from 'src/assets/images/Sidebar_Union_2.png';
import VectorImage from 'src/assets/images/Sidebar_Vector.png';
import Ellipse1Image from 'src/assets/images/Sidebar_Ellipse_1.png';
import Vector1Image from 'src/assets/images/Sidebar_Vector_1.png';
import Union3Image from 'src/assets/images/Sidebar_Union_3.png';
import Ellipse11Image from 'src/assets/images/Sidebar_Ellipse_1_1.png';
import Vector2Image from 'src/assets/images/Sidebar_Vector_2.png';
import Union4Image from 'src/assets/images/Sidebar_Union_4.png';
import Ellipse12Image from 'src/assets/images/Sidebar_Ellipse_1_2.png';
import Vector3Image from 'src/assets/images/Sidebar_Vector_3.png';
import Union5Image from 'src/assets/images/Sidebar_Union_5.png';
import Ellipse13Image from 'src/assets/images/Sidebar_Ellipse_1_3.png';
import Vector4Image from 'src/assets/images/Sidebar_Vector_4.png';
import Vector5Image from 'src/assets/images/Sidebar_Vector_5.png';
import Ellipse14Image from 'src/assets/images/Sidebar_Ellipse_1_4.png';
import Vector6Image from 'src/assets/images/Sidebar_Vector_6.png';
import Vector7Image from 'src/assets/images/Sidebar_Vector_7.png';
import Ellipse15Image from 'src/assets/images/Sidebar_Ellipse_1_5.png';
import Vector8Image from 'src/assets/images/Sidebar_Vector_8.png';
import Screenshot20230301AtImage from 'src/assets/images/Sidebar_Screenshot_2023_03_01_at_10_56_1.png';
import { styled } from '@mui/material/styles';

const Sidebar1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(234, 236, 240, 1)`,
  boxSizing: `border-box`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `1061px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
});

const Footer = styled('div')({
  border: `1px solid rgba(234, 236, 240, 1)`,
  boxSizing: `border-box`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `12px 20px`,
  width: `232px`,
  left: `0px`,
  top: `1017px`,
});

const IconSettings = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  overflow: `hidden`,
});

const Union = styled('img')({
  height: `12.5px`,
  width: `16.25px`,
  position: `absolute`,
  left: `2px`,
  top: `4px`,
});

const IconLogout = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
});

const Union1 = styled('img')({
  height: `14.58px`,
  width: `16.25px`,
  position: `absolute`,
  left: `2px`,
  top: `3px`,
});

const IconGlobe = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
});

const Union2 = styled('img')({
  height: `15.94px`,
  width: `15.94px`,
  position: `absolute`,
  left: `2px`,
  top: `2px`,
});

const Menu = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `232px`,
  left: `0px`,
  top: `102px`,
});

const Section01 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Title = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 0px 0px 20px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const DASHBOARD = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(157, 159, 161, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Links = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ElementsMenuLink = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `12px 20px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
});

const Header = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `22px`,
  margin: `0px`,
});

const Frame1941 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `0px`,
  top: `0px`,
});

const Frame1983 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const IconStats = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
});

const Vector = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Dashboard = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(40, 40, 40, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Number1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px 0px 0px 8px`,
  overflow: `hidden`,
});

const Ellipse1 = styled('img')({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q2 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `10px`,
  textTransform: `none`,
  position: `absolute`,
  left: `6px`,
  top: `5px`,
}));

const IconChevronUp = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  left: `172px`,
  top: `1px`,
});

const Vector1 = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `5px`,
  top: `8px`,
});

const Links1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 0px 0px 28px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Record = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(40, 40, 40, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Reports = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `12px 0px 0px 0px`,
}));

const Analyse = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `12px 0px 0px 0px`,
}));

const Learn = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `12px 0px 0px 0px`,
}));

const ElementsMenuLink1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `46px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Frame19411 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `20px`,
  top: `12px`,
});

const Frame19831 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const IconEmail = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
});

const Union3 = styled('img')({
  height: `12.92px`,
  width: `16.25px`,
  position: `absolute`,
  left: `2px`,
  top: `3px`,
});

const Messages = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Number2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px 0px 0px 8px`,
  overflow: `hidden`,
});

const Ellipse11 = styled('img')({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q21 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `10px`,
  textTransform: `none`,
  position: `absolute`,
  left: `6px`,
  top: `5px`,
}));

const IconChevronDown = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  left: `194px`,
  top: `13px`,
});

const Vector2 = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `5px`,
  top: `8px`,
});

const ElementsMenuLink2 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `46px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Frame19412 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `20px`,
  top: `12px`,
});

const Frame19832 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const IconUser = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
});

const Union4 = styled('img')({
  height: `15.33px`,
  width: `11.25px`,
  position: `absolute`,
  left: `4px`,
  top: `3px`,
});

const Dashboard1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Number3 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px 0px 0px 8px`,
  overflow: `hidden`,
});

const Ellipse12 = styled('img')({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q22 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `10px`,
  textTransform: `none`,
  position: `absolute`,
  left: `6px`,
  top: `5px`,
}));

const IconChevronDown1 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  left: `194px`,
  top: `13px`,
});

const Vector3 = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `5px`,
  top: `8px`,
});

const ElementsMenuLink3 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `46px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Frame19413 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `20px`,
  top: `12px`,
});

const Frame19833 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const IconLayoutGrid = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
});

const Union5 = styled('img')({
  height: `14.58px`,
  width: `14.58px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Dashboard2 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Number4 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px 0px 0px 8px`,
  overflow: `hidden`,
});

const Ellipse13 = styled('img')({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q23 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `10px`,
  textTransform: `none`,
  position: `absolute`,
  left: `6px`,
  top: `5px`,
}));

const IconChevronDown2 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  left: `194px`,
  top: `13px`,
});

const Vector4 = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `5px`,
  top: `8px`,
});

const Section02 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `32px 0px 0px 0px`,
});

const Title1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 0px 0px 20px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const PAGES = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(157, 159, 161, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Links2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const ElementsMenuLink4 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `46px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Frame19414 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `20px`,
  top: `12px`,
});

const Frame19834 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const IconSupport = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
});

const Vector5 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Dashboard3 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Number5 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px 0px 0px 8px`,
  overflow: `hidden`,
});

const Ellipse14 = styled('img')({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q24 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `10px`,
  textTransform: `none`,
  position: `absolute`,
  left: `6px`,
  top: `5px`,
}));

const IconChevronDown3 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  left: `194px`,
  top: `13px`,
});

const Vector6 = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `5px`,
  top: `8px`,
});

const ElementsMenuLink5 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `46px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Frame19415 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `20px`,
  top: `12px`,
});

const Frame19835 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const IconFolder = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
});

const Vector7 = styled('img')({
  height: `12.5px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Dashboard4 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Number6 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px 0px 0px 8px`,
  overflow: `hidden`,
});

const Ellipse15 = styled('img')({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q25 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `10px`,
  textTransform: `none`,
  position: `absolute`,
  left: `6px`,
  top: `5px`,
}));

const IconChevronDown4 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  left: `194px`,
  top: `13px`,
});

const Vector8 = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `5px`,
  top: `8px`,
});

const Screenshot20230301At = styled('img')({
  height: `41px`,
  width: `133px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `18px`,
  top: `24px`,
});

function Sidebar(props) {
  return (
    <Sidebar1 className={props.className}>
      <Footer>
        <IconSettings>
          <Union src={UnionImage} loading="lazy" alt={'Union'} />
        </IconSettings>
        <IconLogout>
          <Union1 src={Union1Image} loading="lazy" alt={'Union'} />
        </IconLogout>
        <IconGlobe>
          <Union2 src={Union2Image} loading="lazy" alt={'Union'} />
        </IconGlobe>
      </Footer>
      <Menu>
        <Section01>
          <Title>
            <DASHBOARD>{`D A S H B O A R D`}</DASHBOARD>
          </Title>
          <Links>
            <ElementsMenuLink>
              <Header>
                <Frame1941>
                  <Frame1983>
                    <IconStats>
                      <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
                    </IconStats>
                    <Dashboard>{`Dashboard`}</Dashboard>
                  </Frame1983>
                  {false && (
                    <Number1>
                      <Ellipse1
                        src={Ellipse1Image}
                        loading="lazy"
                        alt={'Ellipse 1'}
                      />
                      <Q2>{`2`}</Q2>
                    </Number1>
                  )}
                </Frame1941>
                <IconChevronUp>
                  <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
                </IconChevronUp>
              </Header>
              <Links1>
                <Record>{`Record`}</Record>
                <Reports>{`Reports`}</Reports>
                <Analyse>{`Analyse`}</Analyse>
                <Learn>{`Learn`}</Learn>
              </Links1>
            </ElementsMenuLink>
            {false && (
              <ElementsMenuLink1>
                <Frame19411>
                  <Frame19831>
                    <IconEmail>
                      <Union3 src={Union3Image} loading="lazy" alt={'Union'} />
                    </IconEmail>
                    <Messages>{`Messages`}</Messages>
                  </Frame19831>
                  {false && (
                    <Number2>
                      <Ellipse11
                        src={Ellipse11Image}
                        loading="lazy"
                        alt={'Ellipse 1'}
                      />
                      <Q21>{`2`}</Q21>
                    </Number2>
                  )}
                </Frame19411>
                <IconChevronDown>
                  <Vector2 src={Vector2Image} loading="lazy" alt={'Vector'} />
                </IconChevronDown>
              </ElementsMenuLink1>
            )}
            {false && (
              <ElementsMenuLink2>
                <Frame19412>
                  <Frame19832>
                    <IconUser>
                      <Union4 src={Union4Image} loading="lazy" alt={'Union'} />
                    </IconUser>
                    <Dashboard1>{`Friends`}</Dashboard1>
                  </Frame19832>
                  {false && (
                    <Number3>
                      <Ellipse12
                        src={Ellipse12Image}
                        loading="lazy"
                        alt={'Ellipse 1'}
                      />
                      <Q22>{`2`}</Q22>
                    </Number3>
                  )}
                </Frame19412>
                <IconChevronDown1>
                  <Vector3 src={Vector3Image} loading="lazy" alt={'Vector'} />
                </IconChevronDown1>
              </ElementsMenuLink2>
            )}
            {false && (
              <ElementsMenuLink3>
                <Frame19413>
                  <Frame19833>
                    <IconLayoutGrid>
                      <Union5 src={Union5Image} loading="lazy" alt={'Union'} />
                    </IconLayoutGrid>
                    <Dashboard2>{`Apps`}</Dashboard2>
                  </Frame19833>
                  {false && (
                    <Number4>
                      <Ellipse13
                        src={Ellipse13Image}
                        loading="lazy"
                        alt={'Ellipse 1'}
                      />
                      <Q23>{`2`}</Q23>
                    </Number4>
                  )}
                </Frame19413>
                <IconChevronDown2>
                  <Vector4 src={Vector4Image} loading="lazy" alt={'Vector'} />
                </IconChevronDown2>
              </ElementsMenuLink3>
            )}
          </Links>
        </Section01>
        <Section02>
          <Title1>
            <PAGES>{`P A G E S`}</PAGES>
          </Title1>
          <Links2>
            <ElementsMenuLink4>
              <Frame19414>
                <Frame19834>
                  <IconSupport>
                    <Vector5 src={Vector5Image} loading="lazy" alt={'Vector'} />
                  </IconSupport>
                  <Dashboard3>{`Help Center`}</Dashboard3>
                </Frame19834>
                {false && (
                  <Number5>
                    <Ellipse14
                      src={Ellipse14Image}
                      loading="lazy"
                      alt={'Ellipse 1'}
                    />
                    <Q24>{`2`}</Q24>
                  </Number5>
                )}
              </Frame19414>
              <IconChevronDown3>
                <Vector6 src={Vector6Image} loading="lazy" alt={'Vector'} />
              </IconChevronDown3>
            </ElementsMenuLink4>
            <ElementsMenuLink5>
              <Frame19415>
                <Frame19835>
                  <IconFolder>
                    <Vector7 src={Vector7Image} loading="lazy" alt={'Vector'} />
                  </IconFolder>
                  <Dashboard4>{`File Manager`}</Dashboard4>
                </Frame19835>
                {false && (
                  <Number6>
                    <Ellipse15
                      src={Ellipse15Image}
                      loading="lazy"
                      alt={'Ellipse 1'}
                    />
                    <Q25>{`2`}</Q25>
                  </Number6>
                )}
              </Frame19415>
              <IconChevronDown4>
                <Vector8 src={Vector8Image} loading="lazy" alt={'Vector'} />
              </IconChevronDown4>
            </ElementsMenuLink5>
          </Links2>
        </Section02>
      </Menu>
      <Screenshot20230301At
        src={Screenshot20230301AtImage}
        loading="lazy"
        alt={'Screenshot 2023-03-01 at 10.56 1'}
      />
    </Sidebar1>
  );
}

export default Sidebar;
