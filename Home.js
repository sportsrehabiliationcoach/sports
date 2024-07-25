import React, { useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useNavigate,Link } from 'react-router-dom';
import HeadConcussions from './HeadConcussions';



const divstyles = {
    paddingTop: "55px",
};
const headerStyles = {
    color: "rgb(8, 8, 29)",
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: "50px",
    fontWeight: "bolder",
    textAlign: "center",
};
const pStyle = {
    color: "rgb(8, 8, 29)",
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: "30px",
    textAlign: "center",
};
const logoStyles = {
    top: '10px',
    right: '10px',
    paddingTop: '100px',
    borderRadius: "50%",
    textAlign: 'center',
};

function Model({ onClick }) {
    const { scene } = useGLTF('/ecorche_-_anatomy_study.glb');
    
    const handleClick = (event) => {
        onClick(); };
        React.useEffect(() => {
            scene.traverse((object) => {
                if (object.isMesh) {
                    object.userData = { name: object.name }; // Assign name to userData
                    object.onClick = (event) => {
                        event.stopPropagation();
                        console.log('Clicked part:', object.name); // Log the clicked part name
                        onClick(object.name); // Call onClick with part name
                    };
                }
            });
        }, [scene, onClick]);

    return <primitive object={scene} scale={[600, 600, 600]} onClick={handleClick} />;
}

function CameraControls({ zoomTarget }) {
    const { camera } = useThree();
    
    React.useEffect(() => {
        let position, lookAt;

        switch (zoomTarget) {
            case 'head':
                position = [0, 2, 5];
                lookAt = [0, 2, 0];
                break;
            case 'torso':
                position = [0, 0, 5];
                lookAt = [0, 0, 0];
                break;
            case 'ankles':
                position = [0, -2, 5];
                lookAt = [0, -2, 0];
                break;
            case 'ribs':
                position = [0, 1, 5];
                lookAt = [0, 1, 0];
                break;
            default:
                position = [0, 0, 10];
                lookAt = [0, 0, 0];
        }

        camera.position.set(...position);
        camera.lookAt(...lookAt);
    }, [zoomTarget, camera]);

    return null;
}

function Home() {
    const [zoomTarget, setZoomTarget] = useState(null);
    const navigate = useNavigate(); 
    const handleClickPart = (part) => {
        setZoomTarget(part);

        const routes = {
            'head': '/head-concussions',
            'torso': '/torso',
            'ankles': '/about',
            'ribs': '/ribs',
            // Add other parts and routes as needed
        };

         const path = routes[part] || '/injuries';
         navigate(path);
    };

    return (
        <div>
            <div style={logoStyles}>
                <img 
                    src="https://hbbg.ca/wp-content/uploads/2016/06/cropped-fbprofile-300x300.jpg" 
                    alt="Logo" 
                    style={{ borderRadius: '50%', width: '200px', height: '200px' }} 
                />
            </div>

            <div style={divstyles}>
                <header style={headerStyles}>Welcome to the Rehabilitation Website</header>
                <p style={pStyle}>Your 24/7 recovery for sports injuries recovery!</p>
            </div>
           

            <div style={{ width: '100%', height: '100vh', marginTop: '5px' }}>
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Model onClick={handleClickPart} />
                    <OrbitControls 
                        minDistance={1}
                        maxDistance={50}
                        enableZoom={true}
                    />
                    <CameraControls zoomTarget={zoomTarget} />
                    <perspectiveCamera makeDefault position={[0, 0, 10]} />
                </Canvas>
            </div>
        </div>
    );
}

export default Home;
