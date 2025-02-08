import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <h2>
            ABH<span className="gradient-text">AY</span>
          </h2>
          
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="#">Term of Services</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Connect with me</a>
          </div>
          {/* <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button className="gradient-bg">Subscribe</button>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2023 Abhay Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}