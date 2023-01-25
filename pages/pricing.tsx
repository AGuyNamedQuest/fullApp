import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'MyDesignSystemLightTheme';
import PricingComp from 'components/Pricing/Pricing';

const Pricing: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Pricing</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <PricingComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Pricing;
