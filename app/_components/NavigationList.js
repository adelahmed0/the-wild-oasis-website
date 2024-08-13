"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavigationList({ session }) {
  const pathName = usePathname();
  return (
    <ul className="flex gap-16 items-center">
      <li>
        <Link
          href="/cabins"
          className={`hover:text-accent-400 transition-colors ${pathName === "/cabins" ? "text-accent-400" : ""}`}
        >
          Cabins
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`hover:text-accent-400 transition-colors ${pathName === "/about" ? "text-accent-400" : ""}`}
        >
          About
        </Link>
      </li>
      <li>
        {session?.user?.image ? (
          <Link
            href="/account"
            className={`flex items-center gap-4 hover:text-accent-400 transition-colors ${pathName === "/account" || pathName === "/account/reservations" || pathName === "/account/profile" ? "text-accent-400" : ""}`}
          >
            <img
              className="h-8 rounded"
              src={session.user.image}
              alt={session.user.name}
              referrerPolicy="no-referrer"
            />
            <span>Guest area</span>
          </Link>
        ) : (
          <Link
            href="/account"
            className={`hover:text-accent-400 transition-colors ${pathName === "/account" || pathName === "/account/reservations" || pathName === "/account/profile" ? "text-accent-400" : ""}`}
          >
            Guest area
          </Link>
        )}
      </li>
    </ul>
  );
}

export default NavigationList;
