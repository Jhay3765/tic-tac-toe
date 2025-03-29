/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Banana.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const model = useRef(null);
  useFrame(() => {
    model.current.rotation.y += 0.005;
    model.current.rotation.x += 0.005;
  });
  const { nodes, materials } = useGLTF("/models/Banana.glb");
  return (
    <group ref={model} {...props} dispose={null}>
      <mesh
        geometry={nodes.mesh1337751287.geometry}
        material={materials.mat12}
      />
      <mesh
        geometry={nodes.mesh1337751287_1.geometry}
        material={materials.mat20}
      />
    </group>
  );
}

useGLTF.preload("/models/Banana.glb");
