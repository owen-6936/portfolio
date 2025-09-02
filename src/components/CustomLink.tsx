import type { JSX } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
export default function CustomLink({
  children,
  ...props
}: LinkProps): JSX.Element {
  return (
    <span className={props.className}>
      <Link {...props} className="inline-block w-full h-full">
        {children}
      </Link>
    </span>
  );
}
