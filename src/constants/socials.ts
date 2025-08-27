import github from '../assets/icons/github.png';
import dev from '../assets/icons/dev.png';
import linkedin from '../assets/icons/linkedin.png';
import reddit from '../assets/icons/reddit.png';
import twitter from '../assets/icons/x.png';

interface SocialLink {
  key: string;
  url: string;
  title: string;
  logo: string;
}

const socials: SocialLink[] = [
  {
    key: 'github',
    url: 'https://github.com/owen-6936',
    title: 'GitHub',
    logo: github,
  },
  {
    key: 'linkedin',
    url: 'https://linkedin.com/in/owen-erhabor-80958b262/',
    title: 'LinkedIn',
    logo: linkedin,
  },
  { key: 'DEV', url: 'https://dev.to/owen6936', title: 'DEV', logo: dev },
  {
    key: 'X formely Twitter',
    url: 'https://twitter.com/owen66936',
    title: 'X',
    logo: twitter,
  },
  {
    key: 'reddit',
    url: 'https://www.reddit.com/user/Jazzlike-Writing914/',
    title: 'Reddit',
    logo: reddit,
  },
];

export default socials;
