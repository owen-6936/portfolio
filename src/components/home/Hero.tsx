import { motion } from "framer-motion";
import heroImage from "../../assets/images/competent_owen.webp";
import locationIcon from "../../assets/icons/google-maps.png";
import checkIcon from "../../assets/icons/checked.png";
import { useEffect, useState } from "react";
import Card from "../Card";
import Link from "../CustomLink";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <Card>
      <section className="hero">
        <motion.figure
          className="hero-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="Professional headshot of Owen Erhabor, aspiring full-stack developer"
            height="375"
            loading="lazy"
            className={`${imageLoaded ? "loaded" : ""}`}
          />
        </motion.figure>

        <motion.div
          className="hero-details"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <p>
            Hello, I'm Owen, a very dedicated and algorithmically minded
            developer on the path to becoming a full-stack expert. My enthusiasm
            lies in crafting efficient, flexible and scalable solutions,
            particularly with JavaScript and its libraries/frameworks.
          </p>
          <p>
            My approach to problem-solving is fundamentally algorithmic and
            logical. I believe even the most complex challenges can be broken
            down into simpler steps or thoughtful combinations. This mindset
            helps me design elegant, optimized, and maintainable architectures.
            I genuinely enjoy designing code—and that’s why I love TypeScript.
          </p>
          <p>
            Explore my work to see how my algorithmic thinking brings innovative
            solutions to life, or{" "}
            <Link to="/about" className="link">
              learn more about my journey and expertise on my About Me page.
            </Link>
          </p>
          <div className="hero-details-links">
            <motion.div
              className="hero-details-link"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src={locationIcon}
                alt="Location icon"
                className="w-7 h-7 mb-3"
              />
              <p>London, United Kingdom</p>
            </motion.div>
            <motion.div
              className="hero-details-link"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <img
                src={checkIcon}
                alt="Checkmark icon"
                className="w-6 h-6 mb-3"
              />
              <p>Actively seeking entry-level or junior development roles.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Card>
  );
};

export default Hero;
