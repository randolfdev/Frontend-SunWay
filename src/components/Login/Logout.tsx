import React, { MouseEventHandler } from "react";

interface logoutProps {
  logout: MouseEventHandler
}

export default function Logout(props: logoutProps) {
  return (
    <button onClick={props.logout}>
      Sair
    </button>
  );
}
