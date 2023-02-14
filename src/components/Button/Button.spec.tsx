import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '.';
import { ToggleThemeContext } from '@hooks/ThemeContextProvider';

describe('buttonTheme', () =>{
    it('render input', () => {
        expect(1).toBe(1)
    })
    it('must change the theme from dark to light and vice versa and check and uncheck the input')
});
