import type { NextPage } from 'next';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'MyDesignSystemLightTheme';
import HomeComp from 'components/Home/Home';

const Home: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <main>
            <HomeComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Home;
