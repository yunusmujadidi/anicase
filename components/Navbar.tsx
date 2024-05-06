import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const user = undefined;
  const isAdmin = false;
  return (
    <div className="sticky z-[100] h-14 inset-x-0 top-0 transition-all border-gray-200 border-b w-full bg-white/50 backdrop-blur-lg">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="text-2xl flex z-40 font-semibold">
            <span className="text-orange-600">ani</span>case
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    variant: "ghost",
                  })}
                >
                  Sign Out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/api/auth/logout"
                    className={buttonVariants({
                      variant: "ghost",
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    variant: "ghost",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>

                <Link
                  href="/auth/login"
                  className={buttonVariants({
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    variant: "ghost",
                    className:
                      "hidden sm:flex items-center gap-1 bg-orange-600 text-white hover:bg-orange-700 hover:text-white",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
