import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="brand">
            <span className="brand-mark">&lt;/&gt;</span>
            <span className="brand-name">Dev Stack</span>
          </a>
          <p>
            Build smarter. Choose better. Create your ideal development stack
            with the tools that match your project.
          </p>
          <div className="socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#about">Features</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#about">Careers</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#contact">Privacy</a>
            <a href="#contact">Terms</a>
            <a href="#contact">License</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div>
          <a href="#contact">Privacy</a>
          <a href="#contact">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
