import { useEffect, useRef } from 'react';

interface Line {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    currentX: number;
    currentY: number;
    currentLength: number;
    size: number;
    trailPoints: { x: number; y: number }[];
}

interface gridCell {
    x: number;
    y: number;
    size: number;
}

const LinesBackground = ({ size, red, green, blue }: { size: number, red: number, green: number, blue: number }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;
        ctxRef.current = ctx;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let cols = 0;
        let rows = 0;
        const cellSize = size;
        let grid: gridCell[] = [];
        const NUM_LINES = 15;
        let lines: Line[] = [];

        const generateGrid = () => {
            cols = Math.ceil(canvas.width / cellSize);
            rows = Math.ceil(canvas.height / cellSize);
            grid = [];

            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < rows; y++) {
                    grid.push({ x, y, size: cellSize });
                }
            }
        };

        const drawGrid = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = `rgba(${255 * red}, ${255 * green}, ${255 * blue}, 0.12)`;
            ctx.lineWidth = 1;
            grid.forEach(({ x, y, size }) => {
                ctx.strokeRect(x * size, y * size, size, size);
            });
        }

        const createNewLine = (startX: number, startY: number): Line => {
            const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
            const movePositive = Math.random() > 0.5;
            // const totalLength = 50 + Math.random() * 300;

            let endX = startX;
            let endY = startY;

            if (direction === 'horizontal') {
                if (movePositive && startX + size < canvas.width) {
                    endX = startX + size;
                } else if (!movePositive && startX - size >= 0) {
                    endX = startX - size;
                } else {
                    // fallback to vertical
                    return createNewLine(startX, startY);
                }
            } else {
                if (movePositive && startY + size < canvas.height) {
                    endY = startY + size;
                } else if (!movePositive && startY - size >= 0) {
                    endY = startY - size;
                } else {
                    return createNewLine(startX, startY);
                }
            }


            return {
                startX,
                startY,
                endX,
                endY,
                currentX: startX,
                currentY: startY,
                trailPoints: [],
                currentLength: 0,
                size,
            };
        };

        const createLines = () => {
            lines = [];
            for (let i = 0; i < NUM_LINES; i++) {
                const startX = Math.floor(Math.random() * cols) * size;
                const startY = Math.floor(Math.random() * rows) * size;
                lines.push(createNewLine(startX, startY));
            }
        };

        const clearCanvas = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }


        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            clearCanvas();
            generateGrid();
            drawGrid();
            createLines();
        };

        window.addEventListener('resize', handleResize);

        handleResize();


        let animationFrameId: number;
        let isCancelled = false;





        const animate = () => {
            if (isCancelled || !ctx) return;
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = `rgba(${255 * red}, ${255 * green}, ${255 * blue}, 0.01)`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'source-over';
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                const dx = line.endX - line.currentX;
                const dy = line.endY - line.currentY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 1) {
                    lines[i] = createNewLine(line.endX, line.endY);
                    continue;
                }
                const prevX = line.currentX;
                const prevY = line.currentY;
                line.trailPoints.push({ x: line.currentX, y: line.currentY });
                line.currentX += (dx / distance) * 1;
                line.currentY += (dy / distance) * 1;
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);
                ctx.lineTo(line.currentX, line.currentY);
                ctx.strokeStyle = `rgba(${255 * red}, ${255 * green}, ${255 * blue}, 1)`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            isCancelled = true;
            cancelAnimationFrame(animationFrameId);
            // window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    width: '100%',
                    height: '100vh',
                }}
            />
        </>
    );
};

export default LinesBackground;