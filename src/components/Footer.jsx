import React from "react";

function Footer() {
  return (
    <div className="bg-gray-300 w-full border-t border-gray-500 p-2">
      <p className="font-noto text-sm">
        This webapplication uses{" "}
        <a
          href="https://disease.sh/docs/"
          target="_blank"
          className="underline"
        >
          disease.sh
        </a>{" "}
        API.
      </p>
      <p className="font-noto text-sm">
        Made by{" "}
        <a
          href="https://amini-nasab.vercel.app/about"
          target="_blank"
          className="font-georama font-semibold text-blue-700"
        >
          MAN
        </a>
      </p>
    </div>
  );
}

export default Footer;
