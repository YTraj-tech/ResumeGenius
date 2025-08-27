"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export function Nav() {
  const { isSignedIn, user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleCloseAllMenus = () => {
    setShowProfileDropdown(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative w-full"

    >
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <NavbarButton variant="secondary">Sign In</NavbarButton>
              </SignInButton>
            ) : (
              <div className="relative">
                <button
                  onClick={handleProfileClick}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold"
                >
                  {user.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    user.firstName?.charAt(0).toUpperCase() || "U"
                  )}
                </button>

                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-blue-500 border rounded-md shadow-lg z-50">
                    <div className="px-4 py-2 border-b text-gray-700">
                      {user.fullName || "User"}
                    </div>
                    <SignOutButton>
                      <button
                        className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-100"
                        onClick={handleCloseAllMenus}
                      >
                        Sign Out
                      </button>
                    </SignOutButton>
                  </div>
                )}
              </div>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}

            <div className="flex w-full flex-col gap-4">
              {!isSignedIn ? (
                <SignInButton mode="modal">
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                  >
                    Sign In
                  </NavbarButton>
                </SignInButton>
              ) : (
                <>
                  <div className="px-4 py-2 text-gray-700 border-b">
                    Signed in as {user.fullName || "User"}
                  </div>
                  <SignOutButton>
                    <NavbarButton
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                      className="w-full"
                    >
                      Sign Out
                    </NavbarButton>
                  </SignOutButton>
                </>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}