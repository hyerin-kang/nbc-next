"use client";

import { useEffect } from "react";

const ClientExample = () => {
  useEffect(() => {
    console.log("나는 클라이언트 컴포넌트");
  }, []);
  return <div>ClientExample</div>;
};

export default ClientExample;
