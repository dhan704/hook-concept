import React, { useState, useEffect } from "react";

function useFetch() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setResponse(data));
  }, []);

  return response;
}

export default useFetch;
