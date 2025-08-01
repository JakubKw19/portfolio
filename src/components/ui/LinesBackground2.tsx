// import { motion, useMotionValue } from 'framer-motion';
// import { useEffect, useState } from 'react';

// function GridBackground({ size }: { size: number }) {
//     const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);

//     useEffect(() => {
//         const updateSize = () => {
//             setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//         };
//         updateSize();
//         window.addEventListener('resize', updateSize);
//         return () => window.removeEventListener('resize', updateSize);
//     }, []);

//     useEffect(() => {
//         const handleMouseMove = (event: MouseEvent) => {
//             mouseX.set(event.clientX);
//             mouseY.set(event.clientY);
//         };
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, [mouseX, mouseY]);



//     const createGrid = () => {
//         if (windowSize.width === 0 || windowSize.height === 0) {
//             return null;
//         }

//         const cellSize = size;
//         const cols = size;
//         const rows = Math.ceil(windowSize.height / cellSize);

//         const grid = [];
//         for (let x = 0; x < cols; x++) {
//             for (let y = 0; y < rows; y++) {
//                 grid.push(
//                     <motion.div
//                         key={`${x}-${y}`}
//                         initial={{ borderColor: '#333' }}
//                         style={{
//                             width: cellSize,
//                             height: cellSize,
//                             left: x * cellSize,
//                             top: y * cellSize,
//                             position: 'absolute',
//                             // boxSizing: 'border-box',
//                             // Add border-style and border-width here
//                             borderStyle: 'solid',
//                             borderWidth: '1px',
//                             transformStyle: 'preserve-3d'
//                         }}
//                     />
//                 );
//             }
//         }
//         return grid;
//     };



//     return (
//         <div
//             style={{
//                 width: '100%',
//                 height: '100%',
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 overflow: 'hidden',

//                 // zIndex: -1,
//             }}
//         >
//             <motion.div
//                 style={{
//                     width: '100%',
//                     height: '100%',
//                     position: 'relative'
//                 }}
//             >
//                 {createGrid()}
//             </motion.div>
//         </div>
//     );
// }

// export default GridBackground;