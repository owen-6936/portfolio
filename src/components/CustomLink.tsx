import type { JSX } from "react";
import { Link, type LinkProps } from "react-router-dom";
export default function CustomLink({
  children,
  ...props
}: LinkProps): JSX.Element {
  return (
    <span className={props.className}>
      <Link {...props} className="">
        {children}
      </Link>
    </span>
  );
}
