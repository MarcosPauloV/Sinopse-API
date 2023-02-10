import React, { createContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from '@styles/themes/light';
import dark from '@styles/themes/dark';
import usePersistedState from '@utils/usePersistedState';

interface IProps {
    children : React.ReactNode
}

interface IToggleThemeContext {
    toggleTheme?: () => void
}

export const ToggleThemeContext = createContext<IToggleThemeContext>({});

const ThemeContextProvider: React.FC<IProps> = ({children}) => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme' ,light);
    
	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	return(    
		<ThemeProvider theme={theme}>
			<ToggleThemeContext.Provider value={{toggleTheme}}>
				{children}
			</ToggleThemeContext.Provider>
		</ThemeProvider>
	);
};

export default ThemeContextProvider;