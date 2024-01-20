import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <div className="particles-container">
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 360,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true, 
            opacity: 0.08,
          },
          move: {
            direction: "right",
            speed: 0.5,
          },
          size: {
            value: 1.3,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 3,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
    </div>
  );
}

export default Particle;
