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

const useSamplesResponsiveSize = () => {
  const [variant, setVariant] = React.useState<string>('Property1ReactPageD');

  React.useEffect(() => {
    const handlerProperty1ReactPageM = (e) =>
      setVariant((size: string) => (e.matches ? 'Property1ReactPageM' : size));
    const Property1ReactPageMSize = window.matchMedia('(max-width: 572px)');
    setVariant((size: string) =>
      Property1ReactPageMSize.matches ? 'Property1ReactPageM' : size
    );
    Property1ReactPageMSize.addEventListener(
      'change',
      handlerProperty1ReactPageM
    );

    const handlerProperty1ReactPageT = (e) =>
      setVariant((size: string) => (e.matches ? 'Property1ReactPageT' : size));
    const Property1ReactPageTSize = window.matchMedia(
      '(min-width: 572px) and (max-width: 1116px)'
    );
    setVariant((size: string) =>
      Property1ReactPageTSize.matches ? 'Property1ReactPageT' : size
    );
    Property1ReactPageTSize.addEventListener(
      'change',
      handlerProperty1ReactPageT
    );

    const handlerProperty1ReactPageD = (e) =>
      setVariant((size: string) => (e.matches ? 'Property1ReactPageD' : size));
    const Property1ReactPageDSize = window.matchMedia('(min-width: 1116px)');
    setVariant((size: string) =>
      Property1ReactPageDSize.matches ? 'Property1ReactPageD' : size
    );
    Property1ReactPageDSize.addEventListener(
      'change',
      handlerProperty1ReactPageD
    );
  }, []);

  return variant;
};

export default useSamplesResponsiveSize;
