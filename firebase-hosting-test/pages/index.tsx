import { GetServerSideProps } from "next";

const Index = (props: { isSSR: any; now: any }) => {
  return (
    <div className="">
      {/* {props.isSSR ? <p>SSR working</p> : <p>SSR not works</p>}
      <p>{`Build at: ${props.now}`}</p> */}
      hello world
    </div>
  );
};

export default Index;

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       isSSR: true,
//       now: new Date().toISOString(),
//     },
//   };
// };
