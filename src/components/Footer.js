import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TravelVista</h1>
          <p>Explore. Dream. Discover. Your travel begins here.</p>
        </div>
        <div>
          <a hreh="/"><i className="fa-brands fa-facebook-square"></i></a>
          <a hreh="/"><i className="fa-brands fa-instagram-square"></i></a>
          <a hreh="/"><i className="fa-brands fa-behance-square"></i></a>
          <a hreh="/"><i className="fa-brands fa-twitter-square"></i></a>
        </div>
      </div>
      <div className="bottom">
        <div><h4>Project</h4>
        <a href="/">Changelog</a>
        <a href="/">Status</a>
        <a href="/">License</a>
        <a href="/">All Versions</a>
        </div>
        <div><h4>Community</h4>
        <a href="/">Github</a>
        <a href="/">Issue</a>
        <a href="/">Project</a>
        <a href="/">twitter</a>
        </div>
        <div><h4>Help</h4>
        <a href="/">Support</a>
        <a href="/">Troubleshooting</a>
        <a href="/">Contact Us</a>
        
        </div>
        <div><h4>Others</h4>
        <a href="/">Terms of services</a>
        <a href="/">Privacy Policy</a>
        <a href="/">License</a>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
