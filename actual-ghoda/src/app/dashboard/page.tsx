"use client";

import { CONTRACT_ADDRESS } from "@/app/constants";
import { Environment } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/horse_3.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.1} />
    </>
  );
};

const Dashboard = () => {
  useEffect(() => {

  }, []);
  return (
    <div className="w-full min-h-screen bg-[#131418]">
      <div className="min-w-screen min-h-screen flex justify-center items-center">
        <div className="w-[1000px] h-[500px] bg-white/10 rounded-3xl flex gap-4 p-4 items-center">
          <Canvas
            style={{ flexGrow: 1, borderRadius: "20px" }}
            shadows
            dpr={[1, 2]}
            camera={{ position: [10, 5, 3], fov: 24 }}
          >
            <Suspense fallback={null}>
              <Model />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
          <div className="flex-grow flex flex-col gap-1">
            <div className="p-4 bg-white/20 rounded-xl min-w-[300px] text-white flex justify-between">
              <strong>Speed:</strong>
            </div>
            <div className="p-4 bg-white/20 rounded-xl min-w-[300px] text-white flex justify-between">
              <strong>Acceleration:</strong>
            </div>
            <div className="p-4 bg-white/20 rounded-xl min-w-[300px] text-white flex justify-between">
              <strong>Agility:</strong>
            </div>
            <div className="p-4 bg-white/20 rounded-xl min-w-[300px] text-white flex justify-between">
              <strong>Stamina:</strong>
            </div>
            <div className="p-4 bg-white/20 rounded-xl min-w-[300px] text-white flex justify-between">
              <strong>Strength:</strong>
            </div>
            <div className="p-4 bg-white/20 rounded-xl min-w-[300px] text-white flex justify-between">
              <strong>Rarity:</strong>
            </div>
            <div className="p-4 bg-blue-600 rounded-xl min-w-[300px] text-white flex justify-between mt-auto cursor-pointer">Breed if you dare</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
