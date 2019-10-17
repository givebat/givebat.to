import { useRouter } from "next/router";
// import Layout from '../../components/MyLayout';

import isValidHttpUrl from "is-valid-http-url";

export default function Post() {
  const router = useRouter();

  console.log(isValidHttpUrl("http://wikipedia.org"));

  console.log(router.query);

  return (
    // <Layout>
    <>
      <h1>{router.query.url}</h1>
      <p>Donate to:</p>
      <a href={`https://${router.query.url}`}>{router.query.url}</a>
      {/* </Layout> */}
    </>
  );
}
