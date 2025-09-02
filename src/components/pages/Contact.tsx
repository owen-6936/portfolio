import person from '../../assets/icons/person.png';
import phone from '../../assets/icons/telephone.png';
import email from '../../assets/icons/mail.png';
import location from '../../assets/icons/google-maps.png';
import worldWideWeb from '../../assets/icons/world-wide-web.png';
import Card from '../Card';
import '../../styles/contact.css';

export default function Contact() {
  return (
    <div>
      <Card
        index={0}
        key={'contact-form'}
        amount={0.1}
        bg="bg-accent-secondary"
        padding="p-4"
        className="contact-container"
      >
        <section className="contact-form-section">
          <form className="contact-form">
            <h2 className="m-0 mt-4 mb-4 text-3xl">Get in Touch</h2>
            <label htmlFor="name" className="relative">
              <img src={person} alt="Name" />
              <input
                className="contact-form-field"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </label>
            <label htmlFor="email">
              <img src={email} alt="Email" />
              <input
                className="contact-form-field"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </label>
            <textarea
              className="contact-form-field"
              id="message"
              name="message"
              placeholder="write your message here..."
              required
              cols={30}
              rows={10}
            ></textarea>
            <button type="button" className="contact-form-field">
              Send Message
            </button>
          </form>
        </section>
        <section className="contact-me-section">
          <h1 className="bouncing-header">Contact Me</h1>
          <ul className="personal-links">
            <li>
              <img src={phone} alt="Phone" />
              <a href="tel:+447438782177">+447438782177</a>
            </li>
            <li>
              <img src={email} alt="Email" />
              <a href="mailto:erhaborowen3.com">erhaborowen3.com</a>
            </li>
            <li>
              <img src={location} alt="Location" />
              <a
                href="https://www.google.com/maps/place/London,+UK"
                rel="noopener noreferrer"
                target="_blank"
              >
                London, UK
              </a>
            </li>
            <li>
              <img src={worldWideWeb} alt="World Wide Web" />
              <a
                href="https://www.owenlibrary.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Owen Library
              </a>
            </li>
          </ul>
        </section>
      </Card>{' '}
    </div>
  );
}
