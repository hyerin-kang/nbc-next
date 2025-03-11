"use client";

import { useEffect } from "react";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    console.log("렌더링시 실행");
  }, []);
  return (
    <div>
      <h1>
        어드민페이지 입니다
        {children}
      </h1>
    </div>
  );
};
export default AdminLayout;
