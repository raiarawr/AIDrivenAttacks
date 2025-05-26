import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 text-white bg-black overflow-hidden relative" id="home">
      <div id="circuit-animation" className="absolute top-0 left-0 w-full h-full" />

      <div className="relative z-10 w-full max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400">
          <span className="typing-container inline-block">Welcome to AI-Driven Attacks</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-green-200">
          Hackers are using AI like never before — copying voices, faking websites, even tricking your grandma online.
          <br /><br />
          Learn how to outsmart the digital threats in a world where tech is both weapon and shield.
        </p>

        <Link to="/discussion">
          <button className="mt-10 sm:mt-12 px-5 sm:px-6 py-2 sm:py-3 techy-button font-mono text-sm sm:text-base">
            Join the Discussion
          </button>
        </Link>
      </div>
    </section>
  );
}
