
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  return (
    <div className="particle-css" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Particles
        options={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 1,
            },
          },
        }}
      />
      {/* Your content goes here */}
    </div>
  );
};

export default ParticleBackground;
