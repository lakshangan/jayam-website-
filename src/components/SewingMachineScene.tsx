import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Model({ scrollValue }: { scrollValue: number }) {
    // Ultra-safe loading
    const { scene } = useGLTF('/sewing_machine.glb');
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            // Very simple spin
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.4 + scrollValue * 4;
        }
    });

    return <primitive ref={ref} object={scene} scale={0.7} position={[0, -0.5, 0]} />;
}

export const SewingMachineScene = ({ scrollValue }: { scrollValue: number }) => {
    return (
        <div className="w-full h-full bg-transparent">
            <Canvas
                gl={{ antialias: true, alpha: true }}
                camera={{ position: [0, 0, 10], fov: 40 }}
            >
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                    <Model scrollValue={scrollValue} />
                </Suspense>
            </Canvas>
        </div>
    );
};