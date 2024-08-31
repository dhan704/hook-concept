import React from "react";
import useInternetStatus from "../customHooks/useInternetStatus";

function UserStatus() {
  const status = useInternetStatus();

  return <div>{status ? "Connected ..." : "Something went wrong!!!"}</div>;
}

export default UserStatus;
