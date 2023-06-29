"use client";

import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = () => {
  const notify = () => {
    toast("Discord: toyroy10", { theme: "dark" });
  };
  return (
    <div className="border-h rounded-md bg-gray-200 py-5 px-10 w-full bg-opacity-50 backdrop-blur-md drop-shadow-lg">
      <div className="flex flex-col items-center gap-2">
        {/* image */}
        <img
          alt="user-image"
          src="https://firebasestorage.googleapis.com/v0/b/img-uploader-45692.appspot.com/o/files%2Froy.jpeg?alt=media&token=98c34677-1b79-4ed0-b765-9c71d379f714"
          className="rounded-full h-28 lg:h-40 w-28 lg:w-40 object-cover object-center my-6"
        />
        {/* name */}
        <p className="min-w-fit text-black text-2xl lg:text-3xl font-bold">
          Aditya Roy
        </p>
        {/* one line about himself */}
        <p className="text-center text-gray-700 text-md font-semibold">
          A student, reader, gamer and melomaniac.
        </p>
        {/* links */}
        <div className="flex w-full justify-around pb-5 pt-2">
          <a
            href="
            https://www.instagram.com/aditya.roy05/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl p-2 border-black border-2 link-btn rounded-full text-pink-700"
          >
            <FaInstagram />
          </a>
          <a
            href="
            https://open.spotify.com/user/15ewr89iy0nma3ptcsjnzmk1b?si=7RDlxkWVQIuxTfCeFF4xXQ&utm_source=copy-link"
            target="_blank"
            rel="noreferrer"
            className="text-2xl p-2 border-black border-2 link-btn rounded-full text-green-700"
          >
            <FaSpotify />
          </a>
          <a
            href="mailto:adityaroy0005@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl p-2 border-black border-2 link-btn rounded-full text-red-700"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.snapchat.com/add/roy_0206?share_id=0rEBPAg9wtE&locale=en-GB"
            target="_blank"
            rel="noreferrer"
            className="text-2xl p-2 border-black border-2 link-btn rounded-full text-amber-600"
          >
            <FaSnapchatGhost />
          </a>
          <div
            onClick={notify}
            className="text-2xl cursor-pointer p-2 border-black border-2 link-btn rounded-full text-blue-600"
          >
            <FaDiscord />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
