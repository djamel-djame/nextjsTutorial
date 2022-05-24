export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx>
        {`body {
            margin: 0
            padding: 0 2rem;
            font-family: sans-serif;
            background-color: red;
        }`}
      </style>
    </>
  );
}
