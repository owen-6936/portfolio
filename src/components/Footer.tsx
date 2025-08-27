import { Link } from 'react-router-dom';
import links from '../constants/links';
import socials from '../constants/socials';

export default function Footer() {
  return (
    <footer className="bg-neutral p-8 text-center flex flex-col justify-evenly gap-1.5 w-full tracking-wide">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {links.map((link, index) => (
          <span key={link.key} className="link text-sm sm:text-base">
            <Link key={link.key} to={link.url}>
              {link.title}
            </Link>
            {index < links.length - 1 && (
              <span className="text-gray-500 mx-1"> | </span>
            )}
          </span>
        ))}
      </div>
      <div className="flex justify-center items-center gap-8 flex-wrap mt-4">
        {socials.map((social) => (
          <Link key={social.key} to={social.url}>
            <img
              loading="lazy"
              src={social.logo}
              alt={`${social.title} logo`}
              width={32}
              height={32}
              className="w-8 h-8 inline-block"
            />
          </Link>
        ))}
      </div>
      <h5 className="mt-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Designed and Developed by Owen Erhabor
      </h5>
    </footer>
  );
}
