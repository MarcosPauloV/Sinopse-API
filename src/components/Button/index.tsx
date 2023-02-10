import { ToggleThemeContext } from '@hooks/ThemeContextProvider';
import React, { useContext } from 'react';
import { useTheme } from 'styled-components';

import { Container } from './styles';

const Button: React.FC = () => {
  const { toggleTheme } = useContext(ToggleThemeContext);
  const theme = useTheme();

  const isDark = theme.title === 'dark' ? true : false;

  return (
    <Container>
      <input type="checkbox" checked={isDark} name="buttonTheme" onChange={toggleTheme} />
    </Container>
  );
};

export default Button;