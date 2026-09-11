function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>
          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="hero-actions">
            <a href="#technologies" className="gradient-button">Explore Technologies</a>
            <a href="#about" className="outline-button">Learn More</a>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/assets/hero-stack.png" alt="Illustration of a layered development technology stack" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
