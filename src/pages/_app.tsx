import '@/styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import appTheme from 'constants/appTheme';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={appTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
