import React from "react";
import Link from "next/link";
import clsx from "clsx";

type LinkItemProps = {
  path: string | undefined;
  route: string;
  desc: string;
};

export const LinkItem = ({ path, route, desc }: LinkItemProps) => {
  return (
    <Link
      href={route}
      className={clsx(
        "block rounded-lg px-4 py-2 text-sm font-medium text-gray-700",
        path === route && "bg-gray-200"
      )}
    >
      {desc}
    </Link>
  );
};
