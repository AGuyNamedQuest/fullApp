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
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import FooterLink from 'components/FooterLink/FooterLink';
import FooterLink2 from 'components/FooterLink2/FooterLink2';
import { FooterProps } from 'types';
import useFooter from 'components/Footer/useFooter';

const Property1Desktop: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundColor: `rgba(23, 23, 23, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems:
    data.currentVariant === 'Property1tablet'
      ? `flex-start`
      : data.currentVariant === 'Property1mobile'
      ? `flex-start`
      : `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  minWidth:
    data.currentVariant === 'Property1tablet'
      ? `761px`
      : data.currentVariant === 'Property1mobile'
      ? `349px`
      : `1190px`,
}));

const FooterContent: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding:
    data.currentVariant === 'Property1tablet'
      ? `0px 0px 50px 0px`
      : data.currentVariant === 'Property1mobile'
      ? `40px 0px`
      : `30px 180px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  maxWidth:
    data.currentVariant === 'Property1tablet'
      ? `unset`
      : data.currentVariant === 'Property1mobile'
      ? `unset`
      : `1498px`,
}));

const FooterCentered: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'Property1mobile' ? `column` : `row`,
  justifyContent:
    data.currentVariant === 'Property1mobile' ? `flex-start` : `space-between`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'Property1tablet'
      ? `50px 50px 0px 50px`
      : data.currentVariant === 'Property1mobile'
      ? `0px`
      : `0px 50px`,
  boxSizing: `border-box`,
  alignSelf: data.currentVariant === 'Property1mobile' ? 'unset' : `stretch`,
  margin: `0px`,
}));

const Social: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: data.currentVariant === 'Property1mobile' ? `0px` : 'unset',
}));

const QuestLogoFooter: any = styled('img')({
  height: `32px`,
  width: `110px`,
  margin: `0px`,
});

const SocialLinks: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `40px 0px 0px 0px`
      : `26px 0px 0px 0px`,
  overflow: `hidden`,
}));

const Social1: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `900`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
});

const FooterLink1: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const ExternalLink: any = styled('a')({
  textDecoration: `none`,
});

const FooterLink3: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const ExternalLink1: any = styled('a')({
  textDecoration: `none`,
});

const FooterLink4: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const ExternalLink2: any = styled('a')({
  textDecoration: `none`,
});

const FooterLink5: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const ExternalLink3: any = styled('a')({
  textDecoration: `none`,
});

const Column1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'Property1tablet'
      ? `54px 0px 0px 0px`
      : data.currentVariant === 'Property1mobile'
      ? `0px`
      : `58px 0px 0px 0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile' ? `38px 0px 0px 0px` : 'unset',
}));

const Links1: any = styled('div')({
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

const Product: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `900`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
});

const FooterLink6: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink7: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink8: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink9: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink10: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink11: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink12: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink13: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const Column2: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'Property1mobile' ? `row` : `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'Property1tablet'
      ? `54px 0px 0px 0px`
      : data.currentVariant === 'Property1mobile'
      ? `0px`
      : `58px 0px 0px 0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile' ? `38px 0px 0px 0px` : 'unset',
}));

const Link2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
});

const Compare: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `900`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
});

const FooterLink14: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink15: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink16: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink17: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink18: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const Link3: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 66px`
      : `28px 0px 0px 0px`,
  overflow: `hidden`,
}));

const Company: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `900`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
});

const FooterLink19: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink20: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const Column3: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'Property1mobile' ? `row` : `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === 'Property1tablet'
      ? `54px 0px 0px 0px`
      : data.currentVariant === 'Property1mobile'
      ? `0px`
      : `58px 0px 0px 0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile' ? `38px 0px 0px 0px` : 'unset',
}));

const Link4: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  width: data.currentVariant === 'Property1mobile' ? `110px` : 'unset',
}));

const Community: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `900`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width:
    data.currentVariant === 'Property1tablet'
      ? 'unset'
      : data.currentVariant === 'Property1mobile'
      ? 'unset'
      : `119px`,
  margin: `0px`,
}));

const FooterLink21: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink22: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink23: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const Links5: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 54px`
      : `28px 0px 0px 0px`,
  overflow: `hidden`,
}));

const UseCases: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `900`,
  fontSize: `16px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
});

const FooterLink24: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink25: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const FooterLink26: any = styled(FooterLink)(({ theme }: any) => ({
  margin: `8px 0px 0px 0px`,
}));

const MadeWith: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding:
    data.currentVariant === 'Property1tablet'
      ? `0px`
      : data.currentVariant === 'Property1mobile'
      ? `0px 0px 18px 0px`
      : `0px 0px 19px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
  height: data.currentVariant === 'Property1tablet' ? `54px` : 'unset',
}));

const Line: any = styled('div')({
  backgroundColor: `rgba(112, 112, 112, 1)`,
  border: `1px solid rgba(80, 80, 80, 1)`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `1px`,
  margin: `0px`,
});

const Group6: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === 'Property1mobile' ? `column` : `row`,
  justifyContent:
    data.currentVariant === 'Property1tablet'
      ? `center`
      : data.currentVariant === 'Property1mobile'
      ? `center`
      : `space-between`,
  alignItems: `center`,
  padding:
    data.currentVariant === 'Property1tablet'
      ? `0px`
      : data.currentVariant === 'Property1mobile'
      ? `0px`
      : `0px 230px`,
  boxSizing: `border-box`,
  alignSelf:
    data.currentVariant === 'Property1tablet'
      ? 'unset'
      : data.currentVariant === 'Property1mobile'
      ? 'unset'
      : `stretch`,
  margin: `15px 0px 0px 0px`,
  overflow: `hidden`,
}));

const FooterSaying: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent:
    data.currentVariant === 'Property1tablet'
      ? `center`
      : data.currentVariant === 'Property1mobile'
      ? `center`
      : `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  margin:
    data.currentVariant === 'Property1tablet'
      ? `0px`
      : data.currentVariant === 'Property1mobile'
      ? `0px`
      : 'unset',
}));

const ThisSiteWasProudl: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `700`,
  fontSize: data.currentVariant === 'Property1mobile' ? `10px` : `14px`,
  letterSpacing:
    data.currentVariant === 'Property1mobile'
      ? `-0.30000001192092896px`
      : `0px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1tablet'
      ? `22px`
      : data.currentVariant === 'Property1mobile'
      ? `19px`
      : `21px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame125: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 3px`
      : `0px 0px 0px 5px`,
}));

const FooterFigma1: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1tablet'
      ? `15px`
      : data.currentVariant === 'Property1mobile'
      ? `12px`
      : `16px`,
  width:
    data.currentVariant === 'Property1tablet'
      ? `10.35px`
      : data.currentVariant === 'Property1mobile'
      ? `8.28px`
      : `11.04px`,
  objectFit: `cover`,
  margin: `0px`,
}));

const ThisSiteWasProudl1: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `700`,
  fontSize: data.currentVariant === 'Property1mobile' ? `10px` : `14px`,
  letterSpacing:
    data.currentVariant === 'Property1mobile'
      ? `-0.30000001192092896px`
      : `0px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1tablet'
      ? `22px`
      : data.currentVariant === 'Property1mobile'
      ? `19px`
      : `21px`,
  textTransform: `none`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 4px`
      : `0px 0px 0px 6px`,
}));

const Frame126: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 3px`
      : `0px 0px 0px 5px`,
}));

const FooterQ1: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1tablet'
      ? `15px`
      : data.currentVariant === 'Property1mobile'
      ? `12px`
      : `16px`,
  width:
    data.currentVariant === 'Property1tablet'
      ? `14.87px`
      : data.currentVariant === 'Property1mobile'
      ? `11.9px`
      : `15.87px`,
  objectFit: `cover`,
  margin: `0px`,
}));

const ThisSiteWasProudl2: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `700`,
  fontSize: data.currentVariant === 'Property1mobile' ? `10px` : `14px`,
  letterSpacing:
    data.currentVariant === 'Property1mobile'
      ? `-0.30000001192092896px`
      : `0px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1tablet'
      ? `22px`
      : data.currentVariant === 'Property1mobile'
      ? `19px`
      : `21px`,
  textTransform: `none`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 4px`
      : `0px 0px 0px 6px`,
}));

const Frame127: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 3px`
      : `0px 0px 0px 5px`,
}));

const Vector: any = styled('img', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  height:
    data.currentVariant === 'Property1tablet'
      ? `15px`
      : data.currentVariant === 'Property1mobile'
      ? `12px`
      : `16px`,
  width:
    data.currentVariant === 'Property1tablet'
      ? `15px`
      : data.currentVariant === 'Property1mobile'
      ? `12px`
      : `16px`,
  margin: `0px`,
}));

const ThisSiteWasProudl3: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Visby CF`,
  fontWeight: `700`,
  fontSize: data.currentVariant === 'Property1mobile' ? `10px` : `14px`,
  letterSpacing:
    data.currentVariant === 'Property1mobile'
      ? `-0.30000001192092896px`
      : `0px`,
  textDecoration: `none`,
  lineHeight:
    data.currentVariant === 'Property1tablet'
      ? `22px`
      : data.currentVariant === 'Property1mobile'
      ? `19px`
      : `21px`,
  textTransform: `none`,
  margin:
    data.currentVariant === 'Property1tablet'
      ? `0px 0px 0px 6px`
      : data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 4px`
      : `0px 0px 0px 5px`,
}));

const Terms: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin:
    data.currentVariant === 'Property1tablet'
      ? `0px 0px 0px 14px`
      : data.currentVariant === 'Property1mobile'
      ? `9px 0px 0px 0px`
      : 'unset',
}));

const FooterLink27: any = styled(FooterLink2)(({ theme }: any) => ({
  margin: `0px`,
}));

const FooterLink28: any = styled(FooterLink2, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin:
    data.currentVariant === 'Property1tablet'
      ? `0px 0px 0px 10px`
      : data.currentVariant === 'Property1mobile'
      ? `0px 0px 0px 12px`
      : `0px 0px 0px 25px`,
}));

function Footer(props: FooterProps): JSX.Element {
  const { data } = useFooter();

  return (
    <Property1Desktop data={data}>
      <FooterContent data={data}>
        <FooterCentered data={data}>
          <Social data={data}>
            <QuestLogoFooter
              src={`assets/images/footer_quest_logo_footer.png`}
              loading="lazy"
              alt={'quest logo footer'}
            />
            <SocialLinks data={data}>
              <Social1>{`Social`}</Social1>
              <ExternalLink href="https://twitter.com/MadeWithQuestAI">
                <FooterLink1 text={'Twitter'} />
              </ExternalLink>
              <ExternalLink1 href="https://www.linkedin.com/company/madewithquestai/">
                <FooterLink3 text={'LinkedIn'} />
              </ExternalLink1>
              <ExternalLink2 href="https://www.facebook.com/madewithQuest/">
                <FooterLink4 text={'Facebook'} />
              </ExternalLink2>
              <ExternalLink3 href="https://www.instagram.com/madewithquest/">
                <FooterLink5 text={'Instagram'} />
              </ExternalLink3>
            </SocialLinks>
          </Social>
          <Column1 data={data}>
            <Links1>
              <Product>{`Product`}</Product>
              <Link href="/features">
                <FooterLink6 text={'Features'} />
              </Link>
              <Link href="/react">
                <FooterLink7 text={'Build React Components'} />
              </Link>
              <Link href="/website">
                <FooterLink8 text={'Build Webpages'} />
              </Link>
              <FooterLink9 text={'Plugin for Figma'} />
              <FooterLink10 text={'XD & Sketch Users'} />
              <FooterLink11 text={'Component Templates'} />
              <FooterLink12 text={'Samples'} />
              <FooterLink13 text={'Docs'} />
            </Links1>
          </Column1>
          <Column2 data={data}>
            <Link2>
              <Compare>{`Compare`}</Compare>
              <FooterLink14 text={'Anima'} />
              <FooterLink15 text={'Bubble'} />
              <FooterLink16 text={'Zeplin'} />
              <FooterLink17 text={'Avocode'} />
              <FooterLink18 text={'Amplify Studio'} />
            </Link2>
            <Link3 data={data}>
              <Company>{`Company`}</Company>
              <FooterLink19 text={'Jobs'} />
              <FooterLink20 text={'Contact Us'} />
            </Link3>
          </Column2>
          <Column3 data={data}>
            <Link4 data={data}>
              <Community data={data}>{`Community`}</Community>
              <FooterLink21 text={'Discord'} />
              <FooterLink22 text={'YouTube'} />
              <FooterLink23 text={'Blog'} />
            </Link4>
            <Links5 data={data}>
              <UseCases>{`Use Cases`}</UseCases>
              <FooterLink24 text={'For Startups'} />
              <FooterLink25 text={'For Agencies'} />
              <FooterLink26 text={'For Web3'} />
            </Links5>
          </Column3>
        </FooterCentered>
      </FooterContent>
      <MadeWith data={data}>
        <Line></Line>
        <Group6 data={data}>
          <FooterSaying data={data}>
            <ThisSiteWasProudl data={data}>
              {`Site designed in `}
            </ThisSiteWasProudl>
            <Frame125 data={data}>
              <FooterFigma1
                data={data}
                src={`assets/images/footer_footer_figma_1.png`}
                loading="lazy"
                alt={'footer_figma 1'}
              />
              <ThisSiteWasProudl1 data={data}>
                {data.currentVariant === 'Property1mobile'
                  ? `Figma,  built with`
                  : `Figma, built with`}
              </ThisSiteWasProudl1>
            </Frame125>
            <Frame126 data={data}>
              <FooterQ1
                data={data}
                src={`assets/images/footer_footer_q_1.png`}
                loading="lazy"
                alt={'footer_q 1'}
              />
              <ThisSiteWasProudl2 data={data}>
                {data.currentVariant === 'Property1mobile'
                  ? `Quest,  deployed with `
                  : `Quest, deployed with `}
              </ThisSiteWasProudl2>
            </Frame126>
            <Frame127 data={data}>
              <Vector
                data={data}
                src={`assets/images/footer_Vector.png`}
                loading="lazy"
                alt={'Vector'}
              />
              <ThisSiteWasProudl3 data={data}>{`NextJS`}</ThisSiteWasProudl3>
            </Frame127>
          </FooterSaying>
          <Terms data={data}>
            <FooterLink27 text={'Privacy Policy'} />
            <FooterLink28 data={data} text={'Terms of Service'} />
          </Terms>
        </Group6>
      </MadeWith>
    </Property1Desktop>
  );
}

export default Footer;
