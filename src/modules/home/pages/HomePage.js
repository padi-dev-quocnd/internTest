import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeView from "../views/HomeView";

export default function HomePage() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate("/location-information")
  },[])
  return (
    <div>
      <HomeView />
    </div>
  );
}
