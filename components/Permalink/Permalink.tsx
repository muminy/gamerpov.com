import classNames from "classnames";
import Link from "next/link";
import { PermalinkProps } from ".";

export default function Permalink({
  children,
  title,
  className,
  ...props
}: PermalinkProps) {
  return (
    <Link {...props} className={classNames(className)}>
      {children ?? title}
    </Link>
  );
}
