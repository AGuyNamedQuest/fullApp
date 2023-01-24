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
import { HowItWorksMProps } from 'types';
import { animated, useSpring, easings } from 'react-spring';
import useHowItWorksM from 'components/HowItWorksM/useHowItWorksM';

const ScreenMobileStep1: any = styled('div')({
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
  height: 'auto',
});

const M: any = styled('div')({
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

const Frame122: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `360px`,
  margin: `0px`,
});

const BarHighlight: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `10px 0px 0px 0px`,
});

const Divider: any = styled('div')({
  backgroundColor: `rgba(46, 46, 46, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `2px`,
  margin: `0px`,
});

const HighlightedBar: any = styled('div')({
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

const Rectangle139: any = styled('div')({
  backgroundColor: `rgba(254, 136, 136, 0)`,
  width: `453px`,
  height: `3px`,
  margin: `0px`,
});

const Rectangle141: any = styled('div')({
  backgroundColor: `rgba(254, 136, 136, 1)`,
  width: `146px`,
  height: `3px`,
  margin: `0px`,
});

const TextLinks: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 10px 0px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const SyncDs: any = animated(
  styled('div', {
    shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
  })(({ data }: any) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    color: `rgba(254, 136, 136, 1)`,
    fontStyle: `normal`,
    fontFamily: `Visby CF`,
    fontWeight: `700`,
    fontSize: `11px`,
    letterSpacing: `0.30000001192092896px`,
    textDecoration: `none`,
    textTransform: `uppercase`,
    width: `156px`,
    margin: `0px`,
  }))
);

const ExportDesign: any = animated(
  styled('div', {
    shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
  })(({ data }: any) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    color: `rgba(255, 255, 255, 0.5)`,
    fontStyle: `normal`,
    fontFamily: `Visby CF`,
    fontWeight: `700`,
    fontSize: `11px`,
    letterSpacing: `0.30000001192092896px`,
    textDecoration: `none`,
    textTransform: `uppercase`,
    width: `156px`,
    margin: `0px 0px 0px 28px`,
  }))
);

const TextLinks1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 10px 0px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `10px 0px 0px 0px`,
});

const SetupInQuest: any = animated(
  styled('div', {
    shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
  })(({ data }: any) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    color: `rgba(255, 255, 255, 0.5)`,
    fontStyle: `normal`,
    fontFamily: `Visby CF`,
    fontWeight: `700`,
    fontSize: `11px`,
    letterSpacing: `0.30000001192092896px`,
    textDecoration: `none`,
    textTransform: `uppercase`,
    width: `156px`,
    margin: `0px`,
  }))
);

const ExportReact: any = animated(
  styled('div', {
    shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
  })(({ data }: any) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    color: `rgba(255, 255, 255, 0.5)`,
    fontStyle: `normal`,
    fontFamily: `Visby CF`,
    fontWeight: `700`,
    fontSize: `11px`,
    letterSpacing: `0.30000001192092896px`,
    textDecoration: `none`,
    textTransform: `uppercase`,
    width: `156px`,
    margin: `0px 0px 0px 28px`,
  }))
);

const StepVisual1M: any = styled('img')({
  height: `315px`,
  width: `306px`,
  margin: `14px 0px 0px 0px`,
});

const StepVisual2M: any = styled('img')({
  height: `315px`,
  width: `306px`,
  margin: `14px 0px 0px 0px`,
});

const StepVisual3M: any = styled('img')({
  height: `315px`,
  width: `306px`,
  margin: `14px 0px 0px 0px`,
});

const StepVisual4M: any = styled('img')({
  height: `315px`,
  width: `306px`,
  margin: `14px 0px 0px 0px`,
});

function HowItWorksM(props: HowItWorksMProps): JSX.Element {
  const { data, fns } = useHowItWorksM();

  const SyncDsScreenMobileStep1 = { color: `rgba(254, 136, 136, 1)` };
  const SyncDsScreenMobileStep2 = { color: `rgba(255, 255, 255, 0.5)` };
  const SyncDsScreenMobileStep3 = { color: `rgba(255, 255, 255, 0.5)` };
  const SyncDsScreenMobileStep4 = { color: `rgba(255, 255, 255, 0.5)` };
  const [SyncDsStateStyles, SyncDsStateApi] = useSpring(() => ({
    from: eval('SyncDs' + data.currentVariant),
    config: { duration: 1000 },
    delay: 500,
  }));

  const ExportDesignScreenMobileStep1 = { color: `rgba(255, 255, 255, 0.5)` };
  const ExportDesignScreenMobileStep2 = { color: `rgba(254, 136, 136, 1)` };
  const ExportDesignScreenMobileStep3 = { color: `rgba(255, 255, 255, 0.5)` };
  const ExportDesignScreenMobileStep4 = { color: `rgba(255, 255, 255, 0.5)` };
  const [ExportDesignStateStyles, ExportDesignStateApi] = useSpring(() => ({
    from: eval('ExportDesign' + data.currentVariant),
    config: { duration: 1000 },
    delay: 500,
  }));

  const SetupInQuestScreenMobileStep1 = { color: `rgba(255, 255, 255, 0.5)` };
  const SetupInQuestScreenMobileStep2 = { color: `rgba(255, 255, 255, 0.5)` };
  const SetupInQuestScreenMobileStep3 = { color: `rgba(254, 136, 136, 1)` };
  const SetupInQuestScreenMobileStep4 = { color: `rgba(255, 255, 255, 0.5)` };
  const [SetupInQuestStateStyles, SetupInQuestStateApi] = useSpring(() => ({
    from: eval('SetupInQuest' + data.currentVariant),
    config: { duration: 1000 },
    delay: 500,
  }));

  const ExportReactScreenMobileStep1 = { color: `rgba(255, 255, 255, 0.5)` };
  const ExportReactScreenMobileStep2 = { color: `rgba(255, 255, 255, 0.5)` };
  const ExportReactScreenMobileStep3 = { color: `rgba(255, 255, 255, 0.5)` };
  const ExportReactScreenMobileStep4 = { color: `rgba(254, 136, 136, 1)` };
  const [ExportReactStateStyles, ExportReactStateApi] = useSpring(() => ({
    from: eval('ExportReact' + data.currentVariant),
    config: { duration: 1000 },
    delay: 500,
  }));

  const switchStateToScreenMobileStep1: (
    duration: number,
    delay: number,
    easing: string
  ) => void = (
    duration: number = 0,
    delay: number = 0,
    easing: string = 'linear'
  ) => {
    SyncDsStateApi.start({
      ...SyncDsScreenMobileStep1,
      delay,
      config: { duration, easing: easings[easing] },
    });
    ExportDesignStateApi.start({
      ...ExportDesignScreenMobileStep1,
      delay,
      config: { duration, easing: easings[easing] },
    });
    SetupInQuestStateApi.start({
      ...SetupInQuestScreenMobileStep1,
      delay,
      config: { duration, easing: easings[easing] },
    });
    ExportReactStateApi.start({
      ...ExportReactScreenMobileStep1,
      delay,
      config: { duration, easing: easings[easing] },
    });
  };

  const switchStateToScreenMobileStep2: (
    duration: number,
    delay: number,
    easing: string
  ) => void = (
    duration: number = 0,
    delay: number = 0,
    easing: string = 'linear'
  ) => {
    SyncDsStateApi.start({
      ...SyncDsScreenMobileStep2,
      delay,
      config: { duration, easing: easings[easing] },
    });
    ExportDesignStateApi.start({
      ...ExportDesignScreenMobileStep2,
      delay,
      config: { duration, easing: easings[easing] },
    });
    SetupInQuestStateApi.start({
      ...SetupInQuestScreenMobileStep2,
      delay,
      config: { duration, easing: easings[easing] },
    });
    ExportReactStateApi.start({
      ...ExportReactScreenMobileStep2,
      delay,
      config: { duration, easing: easings[easing] },
    });
  };

  const switchStateToScreenMobileStep3: (
    duration: number,
    delay: number,
    easing: string
  ) => void = (
    duration: number = 0,
    delay: number = 0,
    easing: string = 'linear'
  ) => {
    SyncDsStateApi.start({
      ...SyncDsScreenMobileStep3,
      delay,
      config: { duration, easing: easings[easing] },
    });
    ExportDesignStateApi.start({
      ...ExportDesignScreenMobileStep3,
      delay,
      config: { duration, easing: easings[easing] },
    });
    SetupInQuestStateApi.start({
      ...SetupInQuestScreenMobileStep3,
      delay,
      config: { duration, easing: easings[easing] },
    });
    ExportReactStateApi.start({
      ...ExportReactScreenMobileStep3,
      delay,
      config: { duration, easing: easings[easing] },
    });
  };

  const switchStateToScreenMobileStep4: (
    duration: number,
    delay: number,
    easing: string
  ) => void = (
    duration: number = 0,
    delay: number = 0,
    easing: string = 'linear'
  ) => {
    SyncDsStateApi.start({
      ...SyncDsScreenMobileStep4,
      delay,
      config: { duration, easing: easings[easing] },
    });
    ExportDesignStateApi.start({
      ...ExportDesignScreenMobileStep4,
      delay,
      config: { duration, easing: easings[easing] },
    });
    SetupInQuestStateApi.start({
      ...SetupInQuestScreenMobileStep4,
      delay,
      config: { duration, easing: easings[easing] },
    });
    ExportReactStateApi.start({
      ...ExportReactScreenMobileStep4,
      delay,
      config: { duration, easing: easings[easing] },
    });
  };
  return (
    <ScreenMobileStep1>
      <M>
        <Frame122>
          {false && (
            <BarHighlight>
              <Divider></Divider>
              <HighlightedBar>
                <Rectangle139></Rectangle139>
                <Rectangle141></Rectangle141>
              </HighlightedBar>
            </BarHighlight>
          )}
          <TextLinks>
            <SyncDs
              data={data}
              onClick={() => {
                switchStateToScreenMobileStep1(500, 0, 'easeOutQuart');
                fns.setCurrentVariant('ScreenMobileStep1');
              }}
              style={{ ...SyncDsStateStyles }}
            >
              {`Sync MUI Design System`}
            </SyncDs>
            <ExportDesign
              data={data}
              onClick={() => {
                switchStateToScreenMobileStep2(500, 0, 'easeOutQuart');
                fns.setCurrentVariant('ScreenMobileStep2');
              }}
              style={{ ...ExportDesignStateStyles }}
            >
              {`EXPORT DESIGN`}
            </ExportDesign>
          </TextLinks>
          <TextLinks1>
            <SetupInQuest
              data={data}
              onClick={() => {
                switchStateToScreenMobileStep3(500, 0, 'easeOutQuart');
                fns.setCurrentVariant('ScreenMobileStep3');
              }}
              style={{ ...SetupInQuestStateStyles }}
            >
              {`SETUP IN QUEST`}
            </SetupInQuest>
            <ExportReact
              data={data}
              onClick={() => {
                switchStateToScreenMobileStep4(500, 0, 'easeOutQuart');
                fns.setCurrentVariant('ScreenMobileStep4');
              }}
              style={{ ...ExportReactStateStyles }}
            >
              {`EXPORT REACT CODE`}
            </ExportReact>
          </TextLinks1>
        </Frame122>
        {!(data.currentVariant === 'ScreenMobileStep2') &&
          !(data.currentVariant === 'ScreenMobileStep3') &&
          !(data.currentVariant === 'ScreenMobileStep4') && (
            <StepVisual1M
              src={`assets/images/HowitworksM_Step_Visual_1___M.png`}
              loading="lazy"
              alt={'Step Visual 1 - M'}
            />
          )}
        {data.currentVariant === 'ScreenMobileStep2' && (
          <StepVisual2M
            src={`assets/images/HowitworksM_Step_Visual_2___M.png`}
            loading="lazy"
            alt={'Step Visual 2 - M'}
          />
        )}
        {data.currentVariant === 'ScreenMobileStep3' && (
          <StepVisual3M
            src={`assets/images/HowitworksM_Step_Visual_3___M.png`}
            loading="lazy"
            alt={'Step Visual 3 - M'}
          />
        )}
        {data.currentVariant === 'ScreenMobileStep4' && (
          <StepVisual4M
            src={`assets/images/HowitworksM_Step_Visual_4___M.png`}
            loading="lazy"
            alt={'Step Visual 4 - M'}
          />
        )}
      </M>
    </ScreenMobileStep1>
  );
}

export default HowItWorksM;