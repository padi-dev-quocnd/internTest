import React, { useEffect } from "react";
// import Footer from "components/Footer/Footer";
// import Header from "components/Header/Header";
// import { HIDDEN_FOOTER, HIDDEN_HEADER } from "constants/renderLayout";
// import { flagPathname } from "utils/flagPathname";
import { Spinner } from "modules/base/common/Spinner/Spinner";
import { useSelector } from "react-redux";
import { useLoadingSelector } from "modules/loading/LoadingSlice";
import { useNavigate } from "react-router-dom";

export default function AppLayout({ children }) {
  const loading = useSelector(useLoadingSelector);
  // dispatch(setLoading(STATE_LOADING));
  const navigate = useNavigate();

  return (
    <div className="app-layout">
      {/* {!flagPathname(HIDDEN_HEADER, location.pathname) && <Header />} */}
      {/* LIST_ROUTE    */}
      {children}
      {/*End LIST_ROUTE    */}
      {/* {!flagPathname(HIDDEN_FOOTER, location.pathname) && <Footer />} */}
      <Spinner loading={loading} />
    </div>
  );
}
