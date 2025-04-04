"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ClientSideLinkProps {
  href: string;
  name: string;
  icon: React.ReactNode;
  className?: string;
}

const handleLogout = async() => {
  try {
    const res = await fetch("/api/admin/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      window.location.href = "/admin/login";
    }
  } catch (error) {
    console.log("Error logging out", error);
  }
}

// Client component for handling active states
export default function ClientSideLink({ href, name, icon, className }: ClientSideLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
        "hover:bg-gray-50 hover:text-blue-600",
        isActive ? "bg-blue-50 text-blue-600" : "text-gray-700",
        className
      )}
      onClick={name === "Logout" ? handleLogout : undefined}
    >
      <span className="mr-3">{icon}</span>
      {name}
    </Link>
  );
}
