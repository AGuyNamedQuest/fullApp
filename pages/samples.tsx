import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'MyDesignSystemLightTheme';
import SamplesComp from 'components/Samples/Samples';

const Samples: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Samples</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <SamplesComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Samples;
