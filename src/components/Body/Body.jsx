import React from 'react';
import VectorImage from 'src/assets/images/Body_Vector.png';
import UnionImage from 'src/assets/images/Body_Union.png';
import Union1Image from 'src/assets/images/Body_Union_1.png';
import PasteImageImage from 'src/assets/images/Body_Paste_image.png';
import Union2Image from 'src/assets/images/Body_Union_2.png';
import Vector1Image from 'src/assets/images/Body_Vector_1.png';
import Vector2Image from 'src/assets/images/Body_Vector_2.png';
import Vector3Image from 'src/assets/images/Body_Vector_3.png';
import Vector4Image from 'src/assets/images/Body_Vector_4.png';
import Union3Image from 'src/assets/images/Body_Union_3.png';
import Vector5Image from 'src/assets/images/Body_Vector_5.png';
import Union4Image from 'src/assets/images/Body_Union_4.png';
import Vector6Image from 'src/assets/images/Body_Vector_6.png';
import Union5Image from 'src/assets/images/Body_Union_5.png';
import Vector7Image from 'src/assets/images/Body_Vector_7.png';
import Union6Image from 'src/assets/images/Body_Union_6.png';
import { styled } from '@mui/material/styles';

const Body1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const ElementsTopBar = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(234, 236, 240, 1)`,
  boxSizing: `border-box`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  alignSelf: `stretch`,
  height: `66px`,
  margin: `0px`,
});

const Items = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `969px`,
  top: `9px`,
});

const Icons = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const IconIndicator = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px`,
});

const IconNotification = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  left: `0px`,
  top: `0px`,
});

const Vector = styled('img')({
  height: `18px`,
  width: `16px`,
  position: `absolute`,
  left: `4px`,
  top: `3px`,
});

const Indicator = styled('div')({
  backgroundColor: `rgba(226, 85, 99, 1)`,
  borderRadius: `85.71427154541016px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `6.86px`,
  height: `6.86px`,
  left: `20px`,
  top: `-2px`,
});

const IconCalendar = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 32px`,
});

const Union = styled('img')({
  height: `19.5px`,
  width: `17.5px`,
  position: `absolute`,
  left: `3px`,
  top: `2px`,
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
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 32px`,
});

const Union1 = styled('img')({
  height: `17.5px`,
  width: `17.5px`,
  position: `absolute`,
  left: `4px`,
  top: `3px`,
});

const Avatar1 = styled('div')({
  borderRadius: `38.66666793823242px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `40px`,
  height: `52px`,
  margin: `0px 0px 0px 32px`,
});

const ImagePlaceholder = styled('div')({
  border: `1.4999998807907104px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `99.99999237060547px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  width: `40px`,
  height: `40px`,
  left: `0px`,
  top: `0px`,
  overflow: `hidden`,
});

const PasteImage = styled('img')({
  height: `40px`,
  width: `40px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Indicator1 = styled('div')({
  backgroundColor: `rgba(32, 201, 151, 1)`,
  border: `1.3333333730697632px solid rgba(255, 255, 255, 1)`,
  borderRadius: `66.66667175292969px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `8px`,
  height: `8px`,
  left: `31px`,
  top: `31px`,
});

const FormInput = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `905px`,
  left: `32px`,
  top: `10px`,
});

const FormElementsTitle = styled('div')(({ theme }) => ({
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
  alignSelf: `stretch`,
  margin: `8px 0px 0px 0px`,
}));

const Input1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(234, 236, 240, 1)`,
  boxSizing: `border-box`,
  borderRadius: `6px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px 16px`,
  alignSelf: `stretch`,
  height: `46px`,
  margin: `0px`,
  overflow: `hidden`,
});

const IconInput = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const IconSearch = styled('div')({
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

const Union2 = styled('img')({
  height: `13.88px`,
  width: `13.88px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const YourEmail = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(157, 159, 161, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `none`,
  flex: `1`,
  margin: `0px 0px 0px 8px`,
}));

const IconArrowRight = styled('div')({
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
});

const Vector1 = styled('img')({
  height: `0px`,
  width: `11.67px`,
  position: `absolute`,
  left: `4px`,
  top: `10px`,
});

const Vector2 = styled('img')({
  height: `5px`,
  width: `5px`,
  position: `absolute`,
  left: `11px`,
  top: `10px`,
});

const Vector3 = styled('img')({
  height: `5px`,
  width: `5px`,
  position: `absolute`,
  left: `11px`,
  top: `5px`,
});

const Frame1985 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px 32px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `32px 0px 0px 0px`,
});

const Metrics = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const MetricCards = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.06)`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `20px`,
  boxSizing: `border-box`,
  width: `262px`,
  height: `184px`,
  margin: `0px`,
  overflow: `hidden`,
}));

const Content = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `214px`,
  margin: `0px`,
});

const Header = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `194px`,
  left: `0px`,
  top: `0px`,
});

const CarbonFootPrint = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Q2412314TCo2E = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(40, 40, 40, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `40px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Badge1 = styled('div')({
  backgroundColor: `rgba(220, 255, 245, 1)`,
  borderRadius: `100px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `2px 10px`,
  boxSizing: `border-box`,
  height: `22px`,
  left: `0px`,
  top: `123px`,
});

const Content1 = styled('div')({
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

const Indicator2 = styled('div')(({ theme }) => ({
  color: `rgba(0, 150, 136, 1)`,
  borderRadius: `100px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `8px`,
  height: `8px`,
  margin: `0px 0px 0px 4px`,
}));

const IconTrendUp = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `14px`,
  height: `14px`,
  margin: `0px 0px 0px 4px`,
});

const Vector4 = styled('img')({
  height: `5.83px`,
  width: `10.5px`,
  position: `absolute`,
  left: `2px`,
  top: `4px`,
});

const Hello = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(32, 201, 151, 1)`,
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

const IconClose = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `14px`,
  height: `14px`,
  margin: `0px 0px 0px 4px`,
});

const Union3 = styled('img')({
  height: `8.12px`,
  width: `8.12px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Info = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  alignSelf: `stretch`,
  width: `222px`,
  left: `0px`,
  top: `192px`,
});

const TypeMetricStyleStyle = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.06)`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `20px`,
  boxSizing: `border-box`,
  width: `259px`,
  height: `184px`,
  margin: `0px 0px 0px 32px`,
  overflow: `hidden`,
}));

const Content2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `147px`,
  margin: `0px`,
});

const Header1 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: `219px`,
  left: `0px`,
  top: `0px`,
});

const EmissionsBySpinning = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Q723694T = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(40, 40, 40, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `40px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Co2E = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(146, 146, 146, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
});

const Badge2 = styled('div')({
  backgroundColor: `rgba(220, 255, 245, 1)`,
  borderRadius: `100px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `2px 10px`,
  boxSizing: `border-box`,
  width: `80px`,
  height: `33px`,
  left: `0px`,
  top: `109px`,
});

const Content3 = styled('div')({
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

const Indicator3 = styled('div')(({ theme }) => ({
  color: `rgba(0, 150, 136, 1)`,
  borderRadius: `100px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `8px`,
  height: `8px`,
  margin: `0px 0px 0px 4px`,
}));

const IconTrendUp1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `14px`,
  height: `14px`,
  margin: `0px 0px 0px 4px`,
});

const Vector5 = styled('img')({
  height: `5.83px`,
  width: `10.5px`,
  position: `absolute`,
  left: `2px`,
  top: `4px`,
});

const Hello1 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(32, 201, 151, 1)`,
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

const IconClose1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `14px`,
  height: `14px`,
  margin: `0px 0px 0px 4px`,
});

const Union4 = styled('img')({
  height: `8.12px`,
  width: `8.12px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const TypeMetricStyleStyle1 = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.06)`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `20px`,
  boxSizing: `border-box`,
  width: `270px`,
  height: `184px`,
  margin: `0px 0px 0px 32px`,
  overflow: `hidden`,
}));

const Content4 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `122px`,
  margin: `0px`,
});

const Header2 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: `230px`,
  left: `0px`,
  top: `0px`,
});

const EmissionByTransporta = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Q361874T = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(40, 40, 40, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `40px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Co2E1 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(146, 146, 146, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
});

const Info1 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: `230px`,
  left: `0px`,
  top: `108px`,
});

const Badge3 = styled('div')({
  backgroundColor: `rgba(242, 244, 247, 1)`,
  borderRadius: `100px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `2px 10px`,
  boxSizing: `border-box`,
  left: `0px`,
  top: `6px`,
});

const Content5 = styled('div')({
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

const Indicator4 = styled('div')(({ theme }) => ({
  color: `rgba(0, 150, 136, 1)`,
  borderRadius: `100px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `8px`,
  height: `8px`,
  margin: `0px 0px 0px 4px`,
}));

const IconTrendUp2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `14px`,
  height: `14px`,
  margin: `0px 0px 0px 4px`,
});

const Vector6 = styled('img')({
  height: `5.83px`,
  width: `10.5px`,
  position: `absolute`,
  left: `2px`,
  top: `4px`,
});

const Hello2 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
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

const IconClose2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `14px`,
  height: `14px`,
  margin: `0px 0px 0px 4px`,
});

const Union5 = styled('img')({
  height: `8.12px`,
  width: `8.12px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const From46 = styled('div')(({ theme }) => ({
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
  flex: `1`,
  position: `absolute`,
  left: `62px`,
  top: `2px`,
}));

const TypeMetricStyleStyle2 = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.06)`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `20px`,
  boxSizing: `border-box`,
  width: `264px`,
  height: `184px`,
  margin: `0px 0px 0px 32px`,
  overflow: `hidden`,
}));

const Content6 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `144px`,
  margin: `0px`,
});

const Header3 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: `224px`,
  left: `0px`,
  top: `0px`,
});

const EmissionByCarding = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(95, 105, 128, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Q241231 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(40, 40, 40, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `40px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Co2E2 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(146, 146, 146, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
});

const Info2 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: `224px`,
  left: `0px`,
  top: `109px`,
});

const Badge4 = styled('div')({
  backgroundColor: `rgba(220, 255, 245, 1)`,
  borderRadius: `100px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `2px 10px`,
  boxSizing: `border-box`,
  width: `72px`,
  height: `34px`,
  left: `0px`,
  top: `0px`,
});

const Content7 = styled('div')({
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

const Indicator5 = styled('div')(({ theme }) => ({
  color: `rgba(0, 150, 136, 1)`,
  borderRadius: `100px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `8px`,
  height: `8px`,
  margin: `0px 0px 0px 4px`,
}));

const IconTrendUp3 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `14px`,
  height: `14px`,
  margin: `0px 0px 0px 4px`,
});

const Vector7 = styled('img')({
  height: `5.83px`,
  width: `10.5px`,
  position: `absolute`,
  left: `2px`,
  top: `4px`,
});

const Hello3 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(32, 201, 151, 1)`,
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

const IconClose3 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `14px`,
  height: `14px`,
  margin: `0px 0px 0px 4px`,
});

const Union6 = styled('img')({
  height: `8.12px`,
  width: `8.12px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const From461 = styled('div')(({ theme }) => ({
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
  flex: `1`,
  position: `absolute`,
  left: `80px`,
  top: `7px`,
}));

function Body(props) {
  return (
    <Body1 className={props.className}>
      <ElementsTopBar>
        <Items>
          <Icons>
            <IconIndicator>
              <IconNotification>
                <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
              </IconNotification>
              <Indicator></Indicator>
            </IconIndicator>
            <IconCalendar>
              <Union src={UnionImage} loading="lazy" alt={'Union'} />
            </IconCalendar>
            <IconLayoutGrid>
              <Union1 src={Union1Image} loading="lazy" alt={'Union'} />
            </IconLayoutGrid>
          </Icons>
          <Avatar1>
            <ImagePlaceholder>
              <PasteImage
                src={PasteImageImage}
                loading="lazy"
                alt={'Paste image'}
              />
            </ImagePlaceholder>
            <Indicator1></Indicator1>
          </Avatar1>
        </Items>
        <FormInput>
          {false && <FormElementsTitle>{`Label`}</FormElementsTitle>}
          <Input1>
            <IconInput>
              <IconSearch>
                <Union2 src={Union2Image} loading="lazy" alt={'Union'} />
              </IconSearch>
              <YourEmail>{`Search...`}</YourEmail>
            </IconInput>
            {false && (
              <IconArrowRight>
                <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
                <Vector2 src={Vector2Image} loading="lazy" alt={'Vector'} />
                <Vector3 src={Vector3Image} loading="lazy" alt={'Vector'} />
              </IconArrowRight>
            )}
          </Input1>
        </FormInput>
      </ElementsTopBar>
      <Frame1985>
        <Metrics>
          <MetricCards>
            <Content>
              <Header>
                <CarbonFootPrint>{`Carbon FootPrint`}</CarbonFootPrint>
                <Q2412314TCo2E>{`2,412,314t CO2e`}</Q2412314TCo2E>
              </Header>
              <Badge1>
                <Content1>
                  {false && <Indicator2></Indicator2>}
                  {false && (
                    <IconTrendUp>
                      <Vector4
                        src={Vector4Image}
                        loading="lazy"
                        alt={'Vector'}
                      />
                    </IconTrendUp>
                  )}
                  <Hello>{`-45%`}</Hello>
                  {false && (
                    <IconClose>
                      <Union3 src={Union3Image} loading="lazy" alt={'Union'} />
                    </IconClose>
                  )}
                </Content1>
              </Badge1>
              <Info></Info>
            </Content>
          </MetricCards>
          <TypeMetricStyleStyle>
            <Content2>
              <Header1>
                <EmissionsBySpinning>
                  {`Emissions by Spinning`}
                </EmissionsBySpinning>
                <Q723694T>{`72,3694t`}</Q723694T>
                <Co2E>{`CO2e`}</Co2E>
              </Header1>
              <Badge2>
                <Content3>
                  {false && <Indicator3></Indicator3>}
                  {false && (
                    <IconTrendUp1>
                      <Vector5
                        src={Vector5Image}
                        loading="lazy"
                        alt={'Vector'}
                      />
                    </IconTrendUp1>
                  )}
                  <Hello1>{`-60%`}</Hello1>
                  {false && (
                    <IconClose1>
                      <Union4 src={Union4Image} loading="lazy" alt={'Union'} />
                    </IconClose1>
                  )}
                </Content3>
              </Badge2>
            </Content2>
          </TypeMetricStyleStyle>
          <TypeMetricStyleStyle1>
            <Content4>
              <Header2>
                <EmissionByTransporta>
                  {`Emission By Transportation`}
                </EmissionByTransporta>
                <Q361874T>{`361,874t`}</Q361874T>
                <Co2E1>{`CO2e`}</Co2E1>
              </Header2>
              <Info1>
                <Badge3>
                  <Content5>
                    {false && <Indicator4></Indicator4>}
                    {false && (
                      <IconTrendUp2>
                        <Vector6
                          src={Vector6Image}
                          loading="lazy"
                          alt={'Vector'}
                        />
                      </IconTrendUp2>
                    )}
                    <Hello2>{`0.00`}</Hello2>
                    {false && (
                      <IconClose2>
                        <Union5
                          src={Union5Image}
                          loading="lazy"
                          alt={'Union'}
                        />
                      </IconClose2>
                    )}
                  </Content5>
                </Badge3>
                {false && <From46>{`From 4.6%`}</From46>}
              </Info1>
            </Content4>
          </TypeMetricStyleStyle1>
          <TypeMetricStyleStyle2>
            <Content6>
              <Header3>
                <EmissionByCarding>{`Emission by Carding`}</EmissionByCarding>
                <Q241231>{`241,231`}</Q241231>
                <Co2E2>{`CO2e`}</Co2E2>
              </Header3>
              <Info2>
                <Badge4>
                  <Content7>
                    {false && <Indicator5></Indicator5>}
                    {false && (
                      <IconTrendUp3>
                        <Vector7
                          src={Vector7Image}
                          loading="lazy"
                          alt={'Vector'}
                        />
                      </IconTrendUp3>
                    )}
                    <Hello3>{`+0.6%`}</Hello3>
                    {false && (
                      <IconClose3>
                        <Union6
                          src={Union6Image}
                          loading="lazy"
                          alt={'Union'}
                        />
                      </IconClose3>
                    )}
                  </Content7>
                </Badge4>
                <From461>{`From 4.6%`}</From461>
              </Info2>
            </Content6>
          </TypeMetricStyleStyle2>
        </Metrics>
      </Frame1985>
    </Body1>
  );
}

export default Body;
