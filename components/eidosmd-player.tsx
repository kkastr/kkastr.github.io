import * as THREE from "three"
import React from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { PresentationControls } from '@react-three/drei';
import trajectory from '../components/data/trajectory.json'
import { Flex, IconButton, Container, Progress} from '@chakra-ui/react'
import { useBoolean, } from '@chakra-ui/react'

import {FaPlay} from 'react-icons/fa'
import {FaPause} from 'react-icons/fa'

const numFrames = Object.keys(trajectory).length

function AnimatedSpheres({flag, val, setval}) {
    const sref = React.useRef(null)

    const numFrames = Object.keys(trajectory).length
    const numAtoms = Object.keys(trajectory.f0.x).length


    const geometry = new THREE.SphereGeometry(1,32,32);

	const material = new THREE.MeshPhongMaterial({color: "red", emissive: "#370037"});
    const temp = new THREE.Matrix4();
    useFrame((state, delta) => {
        if (flag){
            const pos = trajectory['f' + val.toString()]
            for (let i = 0; i < numAtoms; i++) {
                temp.setPosition(pos.x[i], pos.y[i], pos.z[i]);
                sref.current.setMatrixAt(i, temp);
            }
            sref.current.instanceMatrix.needsUpdate = true
            setval(val++)
            if (val >= numFrames) {
                setval(0)
            }
        }
      });

    return (
        <instancedMesh ref={sref} castShadow receiveShadow args={[null, null, numAtoms]} geometry={geometry} material={material}/>
    )
}

export default function EidosMDPlayer() {
    const [flag, setFlag] = useBoolean()
    const playIcon = <FaPlay/>
    const pauseIcon = <FaPause/>
    const [n, setN] = React.useState(1500)

    const displayIcon = flag ? pauseIcon : playIcon
    return (
        <Container>
            <IconButton onClick={setFlag.toggle} aria-label='play_pause' icon={displayIcon}/>
            <Progress value={(n / numFrames) * 100}/>
            <Flex w='720px' h='900px'>
            <Canvas shadows={true} camera={{ position: [0, 40, 0]}}>
            <ambientLight color={"white"} intensity={0.3} />
            {/* <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />  */}
            <directionalLight intensity={0.5} position={[1, 0, 1]} color="white" />
            <directionalLight intensity={0.5} position={[-1, -1, -1]} color="white" />
            <PresentationControls
                global={true} // Spin globally or by dragging the model
                cursor={true} // Whether to toggle cursor style on drag
                snap={false} // Snap-back to center (can also be a spring config)
                speed={1} // Speed factor
                zoom={1} // Zoom factor when half the polar-max is reached
                rotation={[0, 0, 0]} // Default rotation
                polar={[0, Math.PI / 2]} // Vertical limits
                azimuth={[-Infinity, Infinity]} // Horizontal limits
                config={{ mass: 1, tension: 170, friction: 5 }} // Spring config
                >
            <AnimatedSpheres flag={flag} val={n} setval={setN}/>
            </PresentationControls>
            </Canvas>
            </Flex>
        </Container>
    )
}