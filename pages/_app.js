import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import Head from "next/head";
import nProgress from "nprogress";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        {/*not understand how to work provider (yt: 51:00) */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
