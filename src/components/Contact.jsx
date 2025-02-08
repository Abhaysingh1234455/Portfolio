import './Contact.css'

export default function Contact() {
  return (
    <section className="contact container" id="contact">
      <h2 className="section-title">
        Get in <span className="gradient-text">touch</span>
      </h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Lets talk</h3>
          <p>
            I am currently available to take on new projects, so feel free to send me a message
            about anything that you want me to work on.
          </p>
          <div className="contact-details">
            <p>Abhis92137@gmail.com</p>
            <p>+91-8901388630</p>
            <p>Hisar,Haryana</p>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Write your message here</label>
            <textarea id="message" rows="6" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="gradient-bg">Submit now</button>
        </form>
      </div>
    </section>
  )
}