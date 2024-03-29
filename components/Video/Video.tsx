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
import { styled } from '@mui/material/styles';
import { VideoProps } from 'types';

const ScreenDesktop: any = styled('div')({
  backgroundColor: `rgba(196, 196, 196, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `607px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
});

const ScreenDesktopIFrame: any = styled('iframe')({
  width: `100%`,
  height: `100%`,
  position: `absolute`,
  zIndex: `-1000`,
  border: `0px`,
});

function Video(props: VideoProps): JSX.Element {
  return (
    <ScreenDesktop>
      <ScreenDesktopIFrame
        src={`https://www.youtube.com/embed/FAr23TFwGB0?autoplay=1&controls=0&mute=1&playsinline=1&loop=0`}
        allow="autoplay; fullscreen; picture-in-picture"
      ></ScreenDesktopIFrame>
    </ScreenDesktop>
  );
}

export default Video;
