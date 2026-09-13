import "./Navbar.css";
interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="#" className="brand" onClick={closeMenu}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span className="brand-name">Dev Stack</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#" onClick={closeMenu}>Home</a>
          <a href="#technologies" onClick={closeMenu}>Technologies</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
