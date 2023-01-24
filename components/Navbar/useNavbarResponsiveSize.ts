/**********************************************************************
 *
 *   Responsiveness hook generated by Quest
 *
 *   Responsive Logic for the component goes in this hook
 *   If you want to customize the min/max values for the breakpoints, open the component on Quest Editor.
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';

const useNavbarResponsiveSize = () => {
  const [variant, setVariant] = React.useState<string>('screendesktop');

  React.useEffect(() => {
    const handlerscreenmobile = (e) =>
      setVariant((size: string) => (e.matches ? 'screenmobile' : size));
    const screenmobileSize = window.matchMedia('(max-width: 572px)');
    setVariant((size: string) =>
      screenmobileSize.matches ? 'screenmobile' : size
    );
    screenmobileSize.addEventListener('change', handlerscreenmobile);

    const handlerscreentablet = (e) =>
      setVariant((size: string) => (e.matches ? 'screentablet' : size));
    const screentabletSize = window.matchMedia(
      '(min-width: 572px) and (max-width: 1104px)'
    );
    setVariant((size: string) =>
      screentabletSize.matches ? 'screentablet' : size
    );
    screentabletSize.addEventListener('change', handlerscreentablet);

    const handlerscreendesktop = (e) =>
      setVariant((size: string) => (e.matches ? 'screendesktop' : size));
    const screendesktopSize = window.matchMedia('(min-width: 1104px)');
    setVariant((size: string) =>
      screendesktopSize.matches ? 'screendesktop' : size
    );
    screendesktopSize.addEventListener('change', handlerscreendesktop);
  }, []);

  return variant;
};

export default useNavbarResponsiveSize;