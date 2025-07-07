"use client"

import React, { useState, useEffect } from "react";

const FlipCard = ({ icon, title, num }) => {
  const [hovered, setHovered] = useState(false);
  const [forceBackFace, setForceBackFace] = useState(false);

  // التحقق من حجم الشاشة
  const checkScreenSize = () => {
    const isMobileOrTablet = window.innerWidth < 992  ;
    setForceBackFace(isMobileOrTablet);
  };

  useEffect(() => {
    checkScreenSize(); // مرة أولى عند التحميل

    window.addEventListener("resize", checkScreenSize); // لما تتغير الشاشة

    return () => {
      window.removeEventListener("resize", checkScreenSize); // تنظيف عند الخروج
    };
  }, []);

  const containerStyle = {
    perspective: "1000px",
    width: "320px",
    height: "400px",
    margin: "20px",
  };

  const innerStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.8s",
    transform: (hovered || forceBackFace) ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const faceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "3px solid #1E3A8A",
    borderRadius: "24px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    fontFamily: "sans-serif",
  };

  const frontStyle = {
    ...faceStyle,
    backgroundColor: "transparent",
    color: "#1E3A8A",
  };

  const backStyle = {
    ...faceStyle,
    backgroundColor: "#000",
    color: "#1E3A8A",
    transform: "rotateY(180deg)",
  };

  const iconStyle = {
    fontSize: "5rem",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const numStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginTop: "20px",
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={innerStyle}>
        {/* Front Face */}
        <div style={frontStyle}>
          <div style={iconStyle}>{icon}</div>
          <div style={titleStyle}>{title}</div>
        </div>

        {/* Back Face */}
        <div style={backStyle}>
          <div style={iconStyle}>{icon}</div>
          <div style={titleStyle}>{title}</div>
          <div style={numStyle}>{num}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
