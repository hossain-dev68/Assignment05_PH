import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">

        {/* Footer Brand */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <img
              src="/images/logo-text.png"
              alt="Dev Stack"
              className="footer-logo-image"
            />
          </a>

          <p>
            Build smarter. Choose better. Create your ideal development
            stack with the tools that match your project.
          </p>

          <div className="socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">

          <div>
            <h4>Product</h4>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="container footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;