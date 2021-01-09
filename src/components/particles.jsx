import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./layout/particlesjs-config";
export default function ParticlesBackroud(){
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "black",
        backgroundSize: "contain",
        paddingLeft:"80px"
      }}
    >
      <Particles params={particlesConfig} />
    </div>
  );
};
