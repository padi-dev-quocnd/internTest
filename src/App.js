import AppLayout from "layouts/AppLayout";
import AppRoutes from "layouts/AppRoutes";
import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
