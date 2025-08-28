function ContactPage() {
  return (
    <div className="contact-container">
      <img
        src="/green-scott.png"
        alt="Contact Page Image"
        className="contact-image"
      />
      <div className="social-links">
        <a href="https://www.instagram.com/scoggee/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram social-icon" aria-hidden="true"></i>
          <p className="social-text">Instagram</p>
        </a>
        <a href="https://www.tiktok.com/@skawttea" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok social-icon" aria-hidden="true"></i>
          <p className="social-text">TikTok</p>
        </a>
        <a href="https://www.linkedin.com/in/scotty-ninh-888b272b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin social-icon" aria-hidden="true"></i>
          <p className="social-text">LinkedIn</p>
        </a>
        <div className="email-text">
          Email: scottninhmedia@gmail.com
        </div>
      </div>
    </div>
  );
}

export default ContactPage;