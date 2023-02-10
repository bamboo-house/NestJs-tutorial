import React from "react";
import { GetServerSideProps } from "next";

const SSR = (props) => {
  return (
    <>
      {props.isSSR ? <p>SSR working</p> : <p>SSR not works</p>}
      <p>{`Build at: ${props.now}`}</p>
    </>
  );
};

export default SSR;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      isSSR: true,
      now: new Date().toISOString(),
    },
  };
};
