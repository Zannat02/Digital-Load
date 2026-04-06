let particlesInstance = null;

async function loadParticles() {
  await loadFireflyPreset(tsParticles);

  particlesInstance = await tsParticles.load({
    id: "tsparticles",
    options: {
      preset: "firefly",
      background: {
        color: "transparent"
      }
    }
  });
}

function destroyParticles() {
  if (particlesInstance) {
    particlesInstance.destroy();
    particlesInstance = null;
  }
}

// Observe section visibility
const section = document.getElementById("pricing-section");

const observer = new IntersectionObserver(
  async (entries) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        // section visible → start animation
        if (!particlesInstance) {
          await loadParticles();
        }
      } else {
        // section out of view → stop animation
        destroyParticles();
      }
    });
  },
  {
    threshold: 0.3 // 
  }
);

observer.observe(section);