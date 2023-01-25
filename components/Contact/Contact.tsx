/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { TextField, Link, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import { ContactProps } from 'types';
import useContact from 'components/Contact/useContact';

const Property1ContactDesk: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundColor: `rgba(23, 23, 23, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
  minWidth:
    data.currentVariant === 'Property1ContactTablet'
      ? `unset`
      : data.currentVariant === 'Property1ContactMobile'
      ? `unset`
      : `1440px`,
}));

const Navbar1: any = styled(Navbar)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Top: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent:
    data.currentVariant === 'Property1ContactTablet'
      ? `flex-start`
      : data.currentVariant === 'Property1ContactMobile'
      ? `flex-start`
      : `center`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'Property1ContactTablet'
      ? `20px 0px 6px 30px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `20px 0px 0px 0px`
      : `30px 180px 0px 180px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1ContactTablet'
      ? `24px 0px 0px 0px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `24px 0px 0px 0px`
      : `30px 0px 0px 0px`,
  alignSelf:
    data.currentVariant === 'Property1ContactMobile' ? `stretch` : 'unset',
}));

const Group2: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'Property1ContactTablet'
      ? `4px 32px 0px 32px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `4px 32px 10px 32px`
      : `4px 32px 0px 0px`,
  boxSizing: `border-box`,
  width: data.currentVariant === 'Property1ContactMobile' ? `302px` : `521px`,
  margin: `0px`,
}));

const ContactUs: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Articulat CF`,
  fontWeight: `700`,
  fontSize:
    data.currentVariant === 'Property1ContactTablet'
      ? `46px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `38px`
      : `64px`,
  letterSpacing: `-1px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1ContactTablet'
      ? `46px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `44px`
      : `60px`,
  textTransform: `none`,
  width:
    data.currentVariant === 'Property1ContactTablet'
      ? `321px`
      : data.currentVariant === 'Property1ContactMobile'
      ? 'unset'
      : `419px`,
  margin: `0px`,
  alignSelf:
    data.currentVariant === 'Property1ContactMobile' ? `stretch` : 'unset',
}));

const PleaseCompleteThe: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `600`,
  fontSize:
    data.currentVariant === 'Property1ContactTablet'
      ? `20px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `16px`
      : `22px`,
  letterSpacing: `0.09090909361839294px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1ContactMobile' ? `24px` : `30px`,
  textTransform: `none`,
  width: data.currentVariant === 'Property1ContactMobile' ? `222px` : `287px`,
  margin:
    data.currentVariant === 'Property1ContactMobile'
      ? `6px 0px 0px 0px`
      : `10px 0px 0px 0px`,
}));

const Row: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection:
    data.currentVariant === 'Property1ContactTablet'
      ? `column`
      : data.currentVariant === 'Property1ContactMobile'
      ? `column`
      : `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'Property1ContactTablet'
      ? `0px 0px 0px 30px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `0px 0px 0px 32px`
      : `0px 180px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'Property1ContactTablet'
      ? `24px 0px 0px 0px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `24px 0px 0px 0px`
      : `30px 0px 0px 0px`,
  maxWidth:
    data.currentVariant === 'Property1ContactTablet'
      ? `900px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `unset`
      : `unset`,
}));

const Side1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 32px 0px 0px`,
  boxSizing: `border-box`,
  flexGrow:
    data.currentVariant === 'Property1ContactTablet'
      ? 'unset'
      : data.currentVariant === 'Property1ContactMobile'
      ? 'unset'
      : `1`,
  margin: `0px`,
  minWidth:
    data.currentVariant === 'Property1ContactTablet'
      ? `unset`
      : data.currentVariant === 'Property1ContactMobile'
      ? `345px`
      : `unset`,
  alignSelf:
    data.currentVariant === 'Property1ContactTablet'
      ? `stretch`
      : data.currentVariant === 'Property1ContactMobile'
      ? `stretch`
      : 'unset',
}));

const Card: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  border: `2px solid rgba(88, 88, 88, 1)`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding:
    data.currentVariant === 'Property1ContactMobile' ? `40px 22px` : `40px 8px`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Form: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'Property1ContactMobile' ? `0px` : `0px 20px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const TextFieldOutlined: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `0px`,
});

const TextFieldOutlined1: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `32px 0px 0px 0px`,
});

const TextFieldOutlined2: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `32px 0px 0px 0px`,
});

const SendAndLink: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding:
    data.currentVariant === 'Property1ContactTablet'
      ? `0px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `0px`
      : `0px 4px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `32px 0px 0px 0px`,
}));

const Link1: any = styled(Link)({
  color: `rgba(254, 136, 136, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0.05000000074505806px`,
  lineHeight: `16px`,
  textTransform: `none`,
});

const ButtonOutlined: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  alignSelf: `stretch`,
  width:
    data.currentVariant === 'Property1ContactTablet'
      ? `100px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `100px`
      : `145.33px`,
}));

const MessageSent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `20px 35px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `32px 0px 0px 0px`,
  overflow: `hidden`,
});

const Thanks: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `19px`,
  textTransform: `uppercase`,
  margin: `0px`,
});

const MailFly: any = styled('img')({
  height: `73px`,
  width: `74px`,
  margin: `11px 0px 0px 0px`,
});

const ThanksForReachingOut: any = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `600`,
  fontSize: `15px`,
  letterSpacing: `0.3055555522441864px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `11px 0px 0px 0px`,
});

const BtmTxt: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px 10px 10px 32px`,
  boxSizing: `border-box`,
  margin: `10px 0px 0px 0px`,
  alignSelf:
    data.currentVariant === 'Property1ContactMobile' ? `stretch` : 'unset',
}));

const Typically: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0.09090909361839294px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1ContactMobile' ? 'unset' : `30px`,
  textTransform: `none`,
  margin: `0px`,
  width: data.currentVariant === 'Property1ContactMobile' ? `243px` : 'unset',
}));

const Side2: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'Property1ContactMobile' ? `0px` : `0px 30px`,
  boxSizing: `border-box`,
  width: data.currentVariant === 'Property1ContactMobile' ? `311px` : `521px`,
  margin:
    data.currentVariant === 'Property1ContactTablet'
      ? `34px 0px 0px 0px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `34px 0px 0px 0px`
      : `0px 0px 0px 34px`,
}));

const Box: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundImage: `url(assets/images/Contact_box.png)`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  border: `2px solid rgba(46, 46, 46, 1)`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  alignSelf: `stretch`,
  height: data.currentVariant === 'Property1ContactMobile' ? `340px` : `310px`,
  margin: `0px`,
  overflow: `hidden`,
}));

const Text: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px 30px`,
  boxSizing: `border-box`,
  margin: `0px`,
  width: data.currentVariant === 'Property1ContactMobile' ? `288px` : 'unset',
}));

const LeftSide: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const CustomerQuote: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Quote: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `600`,
  fontSize: data.currentVariant === 'Property1ContactMobile' ? `12px` : `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1ContactMobile' ? `20px` : `22px`,
  textTransform: `none`,
  width: data.currentVariant === 'Property1ContactMobile' ? `263px` : `381px`,
  margin: `0px`,
}));

const Company: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const SuperformLogo: any = styled('img')({
  height: `29px`,
  width: `103px`,
  objectFit: `cover`,
  margin: `0px`,
});

const Name: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `18px 0px 0px 0px`,
});

const FullName: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `700`,
  fontSize: data.currentVariant === 'Property1ContactMobile' ? `22px` : `23px`,
  letterSpacing: `0.09090909361839294px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width: `241px`,
  margin: `0px`,
}));

const Title: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(196, 196, 196, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `700`,
  fontSize: data.currentVariant === 'Property1ContactMobile' ? `12px` : `16px`,
  letterSpacing: `0.09090909361839294px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `6px 0px 0px 0px`,
}));

const Links: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 17px`,
  boxSizing: `border-box`,
  margin: `20px 0px 0px 0px`,
  alignSelf:
    data.currentVariant === 'Property1ContactMobile' ? `stretch` : 'unset',
}));

const CustomerSupport: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  margin: `0px`,
  alignSelf:
    data.currentVariant === 'Property1ContactMobile' ? `stretch` : 'unset',
}));

const SupportTxt: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `800`,
  fontSize: data.currentVariant === 'Property1ContactMobile' ? `14px` : `16px`,
  letterSpacing: `0.09090909361839294px`,
  textDecoration: `none`,
  lineHeight: `30px`,
  textTransform: `none`,
  margin: `0px`,
  alignSelf:
    data.currentVariant === 'Property1ContactMobile' ? `stretch` : 'unset',
}));

const Link2: any = styled(Link, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  color: `rgba(254, 136, 136, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0.05000000074505806px`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `4px 0px 0px 0px`,
  alignSelf:
    data.currentVariant === 'Property1ContactMobile' ? `stretch` : 'unset',
}));

const Onboarding: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  margin: `8px 0px 0px 0px`,
  alignSelf:
    data.currentVariant === 'Property1ContactMobile' ? `stretch` : 'unset',
}));

const OnboardingTxt: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `800`,
  fontSize: data.currentVariant === 'Property1ContactMobile' ? `14px` : `16px`,
  letterSpacing: `0.09090909361839294px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1ContactMobile' ? 'unset' : `30px`,
  textTransform: `none`,
  margin: `0px`,
  width: data.currentVariant === 'Property1ContactMobile' ? `184px` : 'unset',
}));

const Link3: any = styled(Link, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  color: `rgba(254, 136, 136, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0.05000000074505806px`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `4px 0px 0px 0px`,
  alignSelf:
    data.currentVariant === 'Property1ContactMobile' ? `stretch` : 'unset',
}));

const SecLogos: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding:
    data.currentVariant === 'Property1ContactTablet'
      ? `20px 50px 100px 50px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `30px 50px 100px 50px`
      : `50px 180px 100px 180px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'Property1ContactTablet'
      ? `24px 0px 0px 0px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `24px 0px 0px 0px`
      : `30px 0px 0px 0px`,
}));

const TopLogoDivider: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const LogoDividerTop1: any = styled('div')({
  backgroundColor: `rgba(46, 46, 46, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  flexGrow: `1`,
  height: `2px`,
  margin: `0px`,
});

const TrustedBy: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Articulat CF`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `2px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 30px`,
});

const LogoDividerTop2: any = styled('div')({
  backgroundColor: `rgba(46, 46, 46, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  flexGrow: `1`,
  height: `2px`,
  margin: `0px 0px 0px 30px`,
});

const LogosRow1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'Property1ContactTablet'
      ? `26px 0px 0px 0px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `26px 0px 0px 0px`
      : `32px 0px 0px 0px`,
}));

const Lvmh: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1ContactTablet'
      ? `19.36px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `11.1px`
      : `32px`,
  width:
    data.currentVariant === 'Property1ContactTablet'
      ? `107.09px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `61.41px`
      : `177px`,
  objectFit: `contain`,
}));

const DrReddys: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1ContactTablet'
      ? `24.07px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `13.8px`
      : `39.78px`,
  width:
    data.currentVariant === 'Property1ContactTablet'
      ? `107.09px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `61.41px`
      : `177px`,
  objectFit: `contain`,
}));

const Clickout: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1ContactTablet'
      ? `22.83px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `13.09px`
      : `37.72px`,
  width:
    data.currentVariant === 'Property1ContactTablet'
      ? `82.89px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `47.53px`
      : `137px`,
  objectFit: `contain`,
}));

const Motortrend: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1ContactTablet'
      ? `20px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `12.14px`
      : `26px`,
  width:
    data.currentVariant === 'Property1ContactTablet'
      ? `108px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `61.75px`
      : `178px`,
  objectFit: `contain`,
}));

const LogosRow2: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'Property1ContactTablet'
      ? `26px 0px 0px 0px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `26px 0px 0px 0px`
      : `32px 0px 0px 0px`,
}));

const Doodleblue: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1ContactTablet'
      ? `18.7px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `10.87px`
      : `28px`,
  width:
    data.currentVariant === 'Property1ContactTablet'
      ? `103.41px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `60.14px`
      : `170px`,
  objectFit: `contain`,
}));

const Tapjoy: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1ContactTablet'
      ? `24.33px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `14.15px`
      : `40px`,
  width:
    data.currentVariant === 'Property1ContactTablet'
      ? `108.28px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `62.97px`
      : `178px`,
  objectFit: `contain`,
}));

const StorageDna: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1ContactTablet'
      ? `23.12px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `13.44px`
      : `38px`,
  width:
    data.currentVariant === 'Property1ContactTablet'
      ? `83.95px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `48.82px`
      : `138px`,
  objectFit: `contain`,
}));

const Teespring: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1ContactTablet'
      ? `21.29px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `12.38px`
      : `35px`,
  width:
    data.currentVariant === 'Property1ContactTablet'
      ? `108.28px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `62.97px`
      : `178px`,
  objectFit: `contain`,
}));

const LogoDividerBtm: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundColor: `rgba(46, 46, 46, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `2px`,
  margin:
    data.currentVariant === 'Property1ContactTablet'
      ? `26px 0px 0px 0px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `26px 0px 0px 0px`
      : `32px 0px 0px 0px`,
}));

const Footer1: any = styled(Footer, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  alignSelf: `stretch`,
  margin:
    data.currentVariant === 'Property1ContactTablet'
      ? `24px 0px 0px 0px`
      : data.currentVariant === 'Property1ContactMobile'
      ? `24px 0px 0px 0px`
      : `30px 0px 0px 0px`,
}));

function Contact(props: ContactProps): JSX.Element {
  const { data } = useContact();

  return (
    <Property1ContactDesk data={data}>
      <Navbar1 />
      <Top data={data}>
        <Group2 data={data}>
          <ContactUs data={data}>{`Talk with a Quest Expert`}</ContactUs>
          <PleaseCompleteThe data={data}>
            {`We’ll help you find the right plan for your team.`}
          </PleaseCompleteThe>
        </Group2>
      </Top>
      <Row data={data}>
        <Side1 data={data}>
          <Card data={data}>
            <Form data={data}>
              <TextFieldOutlined
                variant="outlined"
                size="medium"
                label={`Name`}
                helperText="Helper text"
              />
              <TextFieldOutlined1
                variant="outlined"
                size="medium"
                label={`Email`}
                helperText="Helper text"
              />
              <TextFieldOutlined2
                variant="outlined"
                size="medium"
                label={`Message`}
                helperText="Helper text"
              />
              <SendAndLink data={data}>
                <Link1 href={'https://discord.gg/EHkMgvcQ2R'} underline="hover">
                  Join us on Discord
                </Link1>
                <ButtonOutlined
                  variant="outlined"
                  size="large"
                  color="primary"
                  data={data}
                >
                  {' '}
                  Send{' '}
                </ButtonOutlined>
              </SendAndLink>
            </Form>
            {false && (
              <MessageSent>
                <Thanks>{`Message sent`}</Thanks>
                <MailFly
                  src={`assets/images/Contact_mailFly.png`}
                  loading="lazy"
                  alt={'mailFly'}
                />
                <ThanksForReachingOut>
                  {`Thanks for reaching out! 
We will get back to you soon.`}
                </ThanksForReachingOut>
              </MessageSent>
            )}
          </Card>
          <BtmTxt data={data}>
            <Typically data={data}>
              {`We typically get back to all requests within 24 hours.`}
            </Typically>
          </BtmTxt>
        </Side1>
        <Side2 data={data}>
          <Box data={data}>
            <Text data={data}>
              <LeftSide>
                <CustomerQuote>
                  <Quote data={data}>
                    {`Quest does an incredible job compared to dozens of alternatives we've tried. At Superform, we’ve automated as much of the design lifecycle as possible so that we can iterate quickly and ship more often. It’s really exciting to meet the creators at Quest who share this vision.`}
                  </Quote>
                  <Company>
                    <SuperformLogo
                      src={`assets/images/Contact_superform_logo.png`}
                      loading="lazy"
                      alt={'superform logo'}
                    />
                    <Name>
                      <FullName data={data}>{`Alex`}</FullName>
                      <Title data={data}>
                        {`Founder of Superform (a web3 company)`}
                      </Title>
                    </Name>
                  </Company>
                </CustomerQuote>
              </LeftSide>
            </Text>
          </Box>
          <Links data={data}>
            <CustomerSupport data={data}>
              <SupportTxt data={data}>
                {`Need white glove customer support?`}
              </SupportTxt>
              <Link2
                href={'mailTo:support@quest.ai'}
                underline="hover"
                data={data}
              >
                Contact Customer Support
              </Link2>
            </CustomerSupport>
            <Onboarding data={data}>
              <OnboardingTxt data={data}>
                {`Need an expert? Book an onboarding call.`}
              </OnboardingTxt>
              <Link3
                href={
                  'https://meetings.hubspot.com/quest/customer-onboarding-call'
                }
                underline="hover"
                data={data}
              >
                Book a Onboarding call or Demo
              </Link3>
            </Onboarding>
          </Links>
        </Side2>
      </Row>
      <SecLogos data={data}>
        <TopLogoDivider>
          <LogoDividerTop1></LogoDividerTop1>
          <TrustedBy>{`TRUSTED BY:`}</TrustedBy>
          <LogoDividerTop2></LogoDividerTop2>
        </TopLogoDivider>
        <LogosRow1 data={data}>
          <Lvmh
            data={data}
            src={`assets/images/Contact_lvmh.png`}
            loading="lazy"
            alt={'lvmh'}
          />
          <DrReddys
            data={data}
            src={`assets/images/Contact_drReddys.png`}
            loading="lazy"
            alt={'drReddys'}
          />
          <Clickout
            data={data}
            src={`assets/images/Contact_clickout.png`}
            loading="lazy"
            alt={'clickout'}
          />
          <Motortrend
            data={data}
            src={`assets/images/Contact_motortrend.png`}
            loading="lazy"
            alt={'motortrend'}
          />
        </LogosRow1>
        <LogosRow2 data={data}>
          <Doodleblue
            data={data}
            src={`assets/images/Contact_doodleblue.png`}
            loading="lazy"
            alt={'doodleblue'}
          />
          <Tapjoy
            data={data}
            src={`assets/images/Contact_tapjoy.png`}
            loading="lazy"
            alt={'tapjoy'}
          />
          <StorageDna
            data={data}
            src={`assets/images/Contact_storageDNA.png`}
            loading="lazy"
            alt={'storageDNA'}
          />
          <Teespring
            data={data}
            src={`assets/images/Contact_teespring.png`}
            loading="lazy"
            alt={'teespring'}
          />
        </LogosRow2>
        <LogoDividerBtm data={data}></LogoDividerBtm>
      </SecLogos>
      <Footer1 data={data} />
    </Property1ContactDesk>
  );
}

export default Contact;