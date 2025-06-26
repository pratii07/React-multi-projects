const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="public\images\nike_logo.jpg" id="logo" alt="logo" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Navigation;
