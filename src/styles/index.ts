import { createGlobalStyle } from 'styled-components';

import { theme } from '../theme';

const applyDefaultTheme = (t: any) => ({ ...theme.light, ...t });

export const GlobalStyles = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;

    font-family: ${(props) => applyDefaultTheme(props.theme).font_family};
    font-size: ${(props) => applyDefaultTheme(props.theme).font_size_medium}px;
    color: ${(props) => applyDefaultTheme(props.theme).color_grey_1};

    background-color: ${(props) => applyDefaultTheme(props.theme).color_white};

    transition: ${(props) => applyDefaultTheme(props.theme).transition};
  }
`;
