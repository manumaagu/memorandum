import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-8 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row flex-wrap md:space-x-4 space-y-2 md:space-y-0">
        <a href="#">Home</a>
        <a
          href="#"
          className=" md:pl-4 pl-0 md:border-l border-t md:border-t-0 pt-2 md:pt-0"
        >
          Terms and Conditions
        </a>
        <a
          href="#"
          className="md:pl-4 pl-0 md:border-l border-t md:border-t-0 pt-2 md:pt-0"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="md:pl-4 pl-0 md:border-l border-t md:border-t-0 pt-2 md:pt-0"
        >
          Collection Statement
        </a>
        <a
          href="#"
          className="md:pl-4 pl-0 md:border-l border-t md:border-t-0 pt-2 md:pt-0"
        >
          Help
        </a>
        <a
          href="#"
          className="md:pl-4 pl-0 md:border-l border-t md:border-t-0 pt-2 md:pt-0"
        >
          Manage Account
        </a>
      </div>
      <p className="mt-4 text-sm text-center md:text-left">
        Copyright © 2016 DEMO Streaming. All Rights Reserved.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center my-6 space-y-4 md:space-y-0">
        <div className="flex gap-4 flex-wrap">
          <img
            src="/assets/social/facebook-white.svg"
            alt="Facebook"
            className="w-8 h-8 cursor-pointer"
          />
          <img
            src="/assets/social/twitter-white.svg"
            alt="Twitter"
            className="w-8 h-8 cursor-pointer"
          />
          <img
            src="/assets/social/instagram-white.svg"
            alt="Instagram"
            className="w-8 h-8 cursor-pointer"
          />
        </div>
        <div className="flex gap-4 flex-wrap">
          <img
            src="/assets/store/app-store.svg"
            alt="App Store"
            className="w-25 h-8 cursor-pointer"
          />
          <img
            src="/assets/store/play-store.svg"
            alt="Google Play"
            className="w-25 h-8 cursor-pointer"
          />
          <img
            src="/assets/store/windows-store.svg"
            alt="Microsoft Store"
            className="w-25 h-8 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
