import React, { lazy, Suspense, VFC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Container from './layouts/Container';
import CustomThemeProvider from '../utils/provider/themeProvider';

const TopPage = lazy(() => import('./pages/TopPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const App: VFC = () => {
  return (
    <CustomThemeProvider>
      <Suspense fallback={() => 'hello'}>
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<TopPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route element={<NotFound />} />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </Suspense>
    </CustomThemeProvider>
  );
};

export default App;
