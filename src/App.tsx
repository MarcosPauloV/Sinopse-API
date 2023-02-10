import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@components/Layout';
import Home from '@pages/Home';
import ThemeContextProvider from '@hooks/ThemeContextProvider';
import GlobalStyle from '@styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
    <ThemeContextProvider>
      <GlobalStyle/>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
          </Route>
        </Routes>
    </ThemeContextProvider>
      </>
  );
}

export default App;