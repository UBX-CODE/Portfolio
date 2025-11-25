import React, { useEffect, useRef } from 'react';

interface CyberFieldProps {
    children: React.ReactNode;
}

const CyberField: React.FC<CyberFieldProps> = ({ children }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: 0, y: 0 };
        let scrollY = 0;

        // Configuration
        const particleCount = 60;
        const connectionDistance = 150;
        const mouseDistance = 200;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;

                // Tech colors
                const colors = ['#D00000', '#FF5A1F', '#ffffff', '#333333'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update(w: number, h: number) {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            resize();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const resize = () => {
            if (containerRef.current && canvas) {
                canvas.width = containerRef.current.offsetWidth;
                canvas.height = containerRef.current.offsetHeight;
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Grid relative to scroll
            drawGrid(ctx, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach((particle, i) => {
                particle.update(canvas.width, canvas.height);
                particle.draw(ctx);

                // Connect particles
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[j].x - particle.x;
                    const dy = particles[j].y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / connectionDistance * 0.1})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                const dx = mouse.x - particle.x;
                const dy = (mouse.y + window.scrollY) - particle.y; // Adjust mouse Y for scroll relative to canvas
                // Actually, since canvas is absolute in a relative container, we need mouse relative to container.
                // But the container is large.
                // Let's fix mouse tracking.
            });

            // Draw Mouse Connections separately to handle the coordinate system correctly
            // We need the mouse position relative to the canvas
            // The canvas covers the whole 3 sections.

            particles.forEach(particle => {
                // Mouse is client coordinates. Canvas is in document flow.
                // We need to map mouse client to canvas coordinates.
                // Since canvas is absolute 0,0 in the container...
                // We'll update mouse handler.

                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(208, 0, 0, ${0.2 - dist / mouseDistance * 0.2})`; // Brand Red
                    ctx.lineWidth = 1.5;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const drawGrid = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
            // Simple perspective grid effect
            const gridSize = 50;
            const offset = (window.scrollY * 0.5) % gridSize;

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;

            // Vertical lines
            for (let x = 0; x < w; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }

            // Horizontal lines (moving)
            for (let y = -gridSize + offset; y < h; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleResize = () => {
            resize();
            // Re-init particles to fit new bounds? Or just let them be.
            // Better to re-init or they might be out of bounds.
            // But re-init kills the vibe. Let's just wrap.
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ width: '100%', height: '100%' }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default CyberField;
