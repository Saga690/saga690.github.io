import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
// import scene.gltf from 'public/buster_drone'

const Drone = () => {

    // const drone = useGLTF('/public/buster_drone/scene.gltf');
    // const drone = useLoader(GLTFLoader, scene.gltf)
    const gltf = useLoader(GLTFLoader, '/../../public/buster_drone/scene.gltf')

    return (
        <mesh>
            {/* <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <primitive
                object={drone.scene}
            /> */}
        </mesh>
    )
}

// const DroneCanvas = () => {
//     return (
//         <Canvas
//             frameLoop="demand"
//             shadows
//             camera={{ position: [20, 3, 5], fov: 25 }}
//             gl={{ preserveDrawingBuffer: true }}
//         >
//             <Suspense fallback={<CanvasLoader />}>
//                 <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//                 <Drone />
//             </Suspense>
//             <Preload all />
//         </Canvas>
//     )
// }

export default Drone