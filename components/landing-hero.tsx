"use client";

// import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5 h-[80vh]">
      {/* STROKE TEXT */}
      <div className="absolute top-36 left-0 md:top-0 w-full">
        <div className=" uppercase text-[100px] md:text-[300px] h-0 opacity-5 fill-transparent stroke-2">
          AI-RES
        </div>
      </div>

      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool</h1>

        {/* <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div> */}
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400 pt-4">
        Create content using AI 10x faster.
      </div>
      <div className="pt-4">
        {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"}> */}
        <Link href={"/dashboard"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
