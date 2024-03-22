"use client";
import Keycloak from "keycloak-js";
import React, { useEffect, useRef, useState } from "react";

const useAuth = () => {
  const useRefs = useRef(false);
  const [token, settoken] = useState<any>("");

  const [isLogin, setLogin] = useState(false);
  const url = process.env.NEXT_PUBLIC_SECRET_KEY_KEYCLOAK_URL;
  const realm: string | any = process.env.NEXT_PUBLIC_SECRET_KEY_REALM;
  const clientId: string | any = process.env.NEXT_PUBLIC_SECRET_KEY_CLIENT;

  useEffect(() => {
    if (useRefs.current) return;
    useRefs.current = true;
    const client = new Keycloak({
      url: url,
      realm: realm,
      clientId: clientId,
    });
    client
      .init({ onLoad: "login-required", redirectUri: "http://localhost:3008" })
      .then((res) => {
        settoken(client.token);
        setLogin(res);
      });
  }, []);

  return [isLogin, token];
};

export default useAuth;
