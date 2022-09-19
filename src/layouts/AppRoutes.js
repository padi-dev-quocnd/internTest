import { PrivateRoute } from "modules/base/common/Routes/PrivateRoute";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "routes";

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {appRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.authenticated ? (
                <PrivateRoute>
                  <route.component />
                </PrivateRoute>
              ) : (
                <route.component />
              )
            }
          />
        ))}
        <Route path="*" element={"Not found"} />

        {/* <Route path="/" element={<BasePage />} /> */}
      </Routes>
    </Suspense>
  );
}
