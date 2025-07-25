import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutePaths } from "../Paths/AuthRoutePaths";
import { useSelector } from "react-redux";

const AuthRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="h100 w100">
      <Routes>
        {AuthRoutePaths.map((data) => {
          if (isLoggedIn) {
            if (data.isProtected == "true" || data.isProtected == "both") {
              return <Route path={data.path} element={<data.component />} />;
            }
          } else {
            if (data.isProtected == "false" || data.isProtected == "both") {
              return <Route path={data.path} element={<data.component />} />;
            }
          }
        })}
      </Routes>
    </div>
  );
};

export default AuthRoutes;
