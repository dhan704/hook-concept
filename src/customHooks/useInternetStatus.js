import React, { useEffect, useState } from "react";

function useInternetStatus() {
    
  const [status, setStatus] = useState(true);
  useEffect(() => {
    function setOnline() {
      setStatus(true);
    }
    function setOffline() {
      setStatus(false);
    }
    //"online" and "offline" are built-in event names in the browser that trigger when the network connection changes.
    //They are case-sensitive.
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  return status;
}

export default useInternetStatus;
