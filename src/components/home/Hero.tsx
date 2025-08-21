import { motion } from "framer-motion";
import heroImage from "../../assets/images/competent_owen.webp";
import locationIcon from "../../assets/icons/google-maps.png";
import checkIcon from "../../assets/icons/checked.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="p-0 flex flex-col items-center justify-evenly flex-wrap gap-8"
    >
      <motion.figure
        className="rounded-2xl w-full max-w-[400px] overflow-hidden box-shadow relative hero-image"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Professional headshot of Owen Erhabor, aspiring full-stack developer"
          height="375"
          loading="lazy"
          className="rounded-lg shadow-md shadow-gray-500 w-full max-w-full max-h-[375px] object-cover object-center"
        />
      </motion.figure>

      <motion.div
        id="hero-details"
        className="max-w-[415px] py-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <p>
          Hello, I'm Owen, a very dedicated and algorithmically minded developer
          on the path to becoming a full-stack expert. My enthusiasm lies in
          crafting efficient, flexible and scalable solutions, particularly with
          JavaScript and its libraries/frameworks.
        </p>
        <p>
          My approach to problem-solving is fundamentally algorithmic and
          logical. I believe even the most complex challenges can be broken down
          into simpler steps or thoughtful combinations. This mindset helps me
          design elegant, optimized, and maintainable architectures. I genuinely
          enjoy designing code—and that’s why I love TypeScript.
        </p>
        <p>
          Explore my work to see how my algorithmic thinking brings innovative
          solutions to life, or{" "}
          <a
            href="/about"
            className="text-blue-600 underline hover:text-blue-800"
          >
            learn more about my journey and expertise on my About Me page.
          </a>
        </p>

        <div className="hero-details-link">
          <img src={locationIcon} alt="Location icon" className="w-7 h-7" />
          <p>London, United Kingdom</p>
        </div>
        <div className="hero-details-link">
          <img src={checkIcon} alt="Checkmark icon" className="w-6 h-6" />
          <p>Actively seeking entry-level or junior development roles.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
