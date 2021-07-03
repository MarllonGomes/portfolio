import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Source Code Pro', monospace;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
