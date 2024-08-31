import React from "react";
import useFetch from "../customHooks/useFetch";

function Users() {
  const users = useFetch();

  return (
    <div>
      {users.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
}

export default Users;
