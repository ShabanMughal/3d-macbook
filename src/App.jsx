import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen font-[Helvetica_Now_Display]">
      <div className="navbar flex gap-10 py-5 pt-10 absolute top-0 left-1/2 -translate-x-1/2 line">
        {["iphone", "iPad", "Sevices", "ios", "mac", "Prodects"].map((e) => (
          <a href="#" className="text-white font-[500] text-md capitalize">{e}</a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2">
        <h3 className="masked text-7xl font-[700] tracking-tighter">
          Macbook pro.
        </h3>
        <h5>Oh so pro!</h5>
        <p className="text-center w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ullam molestiae nemo facilis!
        </p>
      </div>

      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
