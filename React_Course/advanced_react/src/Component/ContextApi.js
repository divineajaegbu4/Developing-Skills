import React from "react";
import { useUser} from "./UserContext";

const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello <span className="username">{user.name}</span>
    </p>
  );
};

export const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const ContextApi = () => {
  const {user} = useUser();

  return (
    <div>
      <h2>What is Lorem ipsum</h2>
      <p>
        Eiusmod est cupidatat duis sunt eiusmod sit veniam sunt et non
        exercitation esse velit proident. Voluptate fugiat eiusmod amet qui
        officia reprehenderit occaecat consectetur excepteur est officia. Amet
        commodo irure aliquip est eiusmod fugiat ut veniam excepteur. Eiusmod
        aliqua amet laborum esse dolor nostrud in irure elit pariatur id et. Ut
        ipsum proident incididunt dolore. Veniam qui duis sunt sunt irure non
        velit exercitation. Ullamco consequat proident minim tempor ullamco
        laborum tempor occaecat magna eiusmod irure.
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};

export default ContextApi;
