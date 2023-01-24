/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import useHomeResponsiveSize from './useHomeResponsiveSize';

//These are the possible values for the current variant. Use this to change the currentVariant dynamically.
//Please don't modify
const variantOptions = {
  Property1Desktop: 'Property1Desktop',
  Property1Tablet: 'Property1Tablet',
  Property1Mobile: 'Property1Mobile',
};

const useHome = () => {
  const [currentVariant, setCurrentVariant] = React.useState<string>(
    variantOptions['Property1Desktop']
  );

  const breakpointsVariant = useHomeResponsiveSize();

  React.useEffect(() => {
    if (breakpointsVariant !== currentVariant) {
      setCurrentVariant(breakpointsVariant);
    }
  }, [breakpointsVariant]);

  let data: any = { currentVariant };

  let fns: any = { setCurrentVariant };
  return { data, fns };
};

export default useHome;
