import "./Hero.css";
function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-pill">YOUR MODERN DEV TOOLKIT</span>
          <h1>
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>
          <p>
            Discover the best technologies for your next project. Explore,
            compare, and build your personalized development stack.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-btn">
              Explore Technologies <span>→</span>
            </a>
            <a href="#projects" className="secondary-btn">
              Learn More
            </a>
          </div>

          <div className="hero-stats">
            <div><strong>12+</strong><span>Technologies</span></div>
            <div><strong>7</strong><span>Categories</span></div>
            <div><strong>4.9</strong><span>Top Rating</span></div>
          </div>
        </div>

        <div className="hero-art">
          <div className="glow"></div>
          <img
            src="/images/dev-stack-hero.png"
            alt="3D technology stack illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
