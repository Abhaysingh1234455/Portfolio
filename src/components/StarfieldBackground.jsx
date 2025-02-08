import  { useEffect } from 'react';

const StarfieldBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speed = Math.random() * 2 + 0.2;
      }

      move() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
    }

    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.move();
        star.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      id="starfield"
      style={{
        position: 'fixed', // This ensures it stays fixed on the screen
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensures it's in the background
      }}
    ></canvas>
  );
};

export default StarfieldBackground;
