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
import useSamplesResponsiveSize from './useSamplesResponsiveSize';

//These are the possible values for the current variant. Use this to change the currentVariant dynamically.
//Please don't modify
const variantOptions = {
  Property1ReactPageD: 'Property1ReactPageD',
  Property1ReactPageT: 'Property1ReactPageT',
  Property1ReactPageM: 'Property1ReactPageM',
};

const useSamples = () => {
  const [currentVariant, setCurrentVariant] = React.useState<string>(
    variantOptions['Property1ReactPageD']
  );

  const breakpointsVariant = useSamplesResponsiveSize();

  React.useEffect(() => {
    if (breakpointsVariant !== currentVariant) {
      setCurrentVariant(breakpointsVariant);
    }
  }, [breakpointsVariant]);

  let data: any = { currentVariant };

  let fns: any = { setCurrentVariant };
  return { data, fns };
};

export default useSamples;
