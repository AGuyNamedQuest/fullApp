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

const useWebsiteResponsiveSize = () => {
  const [variant, setVariant] = React.useState<string>('Property1HTMLD');

  React.useEffect(() => {
    const handlerProperty1HTMLM = (e) =>
      setVariant((size: string) => (e.matches ? 'Property1HTMLM' : size));
    const Property1HTMLMSize = window.matchMedia('(max-width: 572px)');
    setVariant((size: string) =>
      Property1HTMLMSize.matches ? 'Property1HTMLM' : size
    );
    Property1HTMLMSize.addEventListener('change', handlerProperty1HTMLM);

    const handlerProperty1HTMLT = (e) =>
      setVariant((size: string) => (e.matches ? 'Property1HTMLT' : size));
    const Property1HTMLTSize = window.matchMedia(
      '(min-width: 572px) and (max-width: 1104px)'
    );
    setVariant((size: string) =>
      Property1HTMLTSize.matches ? 'Property1HTMLT' : size
    );
    Property1HTMLTSize.addEventListener('change', handlerProperty1HTMLT);

    const handlerProperty1HTMLD = (e) =>
      setVariant((size: string) => (e.matches ? 'Property1HTMLD' : size));
    const Property1HTMLDSize = window.matchMedia('(min-width: 1104px)');
    setVariant((size: string) =>
      Property1HTMLDSize.matches ? 'Property1HTMLD' : size
    );
    Property1HTMLDSize.addEventListener('change', handlerProperty1HTMLD);
  }, []);

  return variant;
};

export default useWebsiteResponsiveSize;
