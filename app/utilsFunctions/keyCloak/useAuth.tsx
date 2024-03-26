"use client";
import { useSelect } from "@nextui-org/react";
import Keycloak from "keycloak-js";
import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setLogin } from "../Store/Reducers/MainSlice";

const useAuth = () => {
  const useRefs = useRef(false);
  const [token, settoken] = useState<any>("");
  // const disPatch = useDispatch();
  const url = process.env.NEXT_PUBLIC_SECRET_KEY_KEYCLOAK_URL;
  const realm: string | any = process.env.NEXT_PUBLIC_SECRET_KEY_REALM;
  const clientId: string | any = process.env.NEXT_PUBLIC_SECRET_KEY_CLIENT;
  const [keyCloak, setkeycloak] = useState<any>(null);

  useEffect(() => {
    if (useRefs.current) return;
    useRefs.current = true;
    const client = new Keycloak({
      url: url,
      realm: realm,
      clientId: clientId,
    });
    setkeycloak(client);
    client
      .init({
        onLoad: "login-required",
        redirectUri: "http://localhost:3008/Flow",
      })
      .then(() => {
        settoken(client.token);
        // disPatch(setLogin());
      });
  }, []);

  return [keyCloak, token];
};

export default useAuth;
