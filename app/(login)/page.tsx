"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { MdKey } from "react-icons/md";
import useAuth from "../utilsFunctions/keyCloak/useAuth";

const SignInButton = () => {
  // Add logic to handle sign-in action
  const handleKeycloakSignIn = () => {
    const [keyCloak, token] = useAuth();
    console.log("Sign in button clicked");
    [];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className=" w-96 h-70 bg-gray-400">
        <div className="">
          <Button
            onClick={handleKeycloakSignIn}
            className="bg-black gap-3 ml-20 my-10  text-white w-64 h-20 rounded-lg flex items-center justify-center text-sm  font-bold"
            startContent={<MdKey size={27} />}
          >
            KeyCloak Authentication
          </Button>
        </div>
        <div className="">
          <Button
            className="bg-black gap-3 ml-20 my-24 mt-12 text-white w-64 h-20 rounded-lg flex items-center justify-center text-sm font-bold"
            startContent={<MdKey size={27} />}
          >
            NextAuth Authentication
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInButton;
