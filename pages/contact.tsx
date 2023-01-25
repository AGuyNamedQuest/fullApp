import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'MyDesignSystemLightTheme';
import ContactComp from 'components/Contact/Contact';

const Contact: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Contact</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <ContactComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Contact;
