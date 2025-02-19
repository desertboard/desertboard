"use client";

import Link from "next/link";



interface UspsProps {
  pagelabel: string;
  url?: string;
}

export default function BacktoListing({pagelabel, url = "/" }: UspsProps) {
  return (
    <>
       <section className="bg-secondary  relative z-[1]">
       <div className="container flex justify-between m-auto">
       <Link href={url}>
            <div className="flex items-center flex-row-reverse gap-3   py-6 md:py-10 group  justify-end">
              <p className="mb-0 nuber-next-bold text-font28    text-white nuber-next-heavy cursor-pointer">
                {pagelabel}
              </p>
              <div className="transition-all duration-300 group-hover:translate-x-1 rotate-180">
                <svg
                  width="20"
                  height="30"
                  viewBox="0 0 25 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link href={"/downloads"}>
            <div className="flex items-center gap-3   py-6 md:py-10 group  justify-end">
              <p className="mb-0 nuber-next-bold text-font28    text-white nuber-next-heavy cursor-pointer">
                Downloads
              </p>
              <div className="transition-all duration-300 group-hover:translate-x-1">
                <svg
                  width="20"
                  height="30"
                  viewBox="0 0 25 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
          </div>
      </section>
    </>
  );
};

