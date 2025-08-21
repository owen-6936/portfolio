interface Link {
  key?: string | number;
  title: string;
  url: string;
}

const links: Link[] = [
  { key: "home", title: "Home", url: "/" },
  { key: "projects", title: "Projects", url: "/projects" },
  { key: "contact", title: "Contact", url: "/contact" },
  { key: "about", title: "About", url: "/about" },
];

export default links;
