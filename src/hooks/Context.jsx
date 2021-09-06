import React, { createContext, useContext, useState } from "react";

const UserDetailsContext = createContext([
  {
    firstName: "Bob",
    lastName: "Bobberson",
    suffix: 1,
    email: "bobbobberson@example.com",
  },
  () => {},
]);

const UserDetailsComponent = () => {
  const [userDetail, setUserDetails] = useContext(UserDetailsContext);

  const incrementSuffixInUserDetails = () => {
    const updatedUserDetails = Object.assign(
      { ...userDetail },
      { suffix: userDetail.suffix + 1 }
    );
    setUserDetails(updatedUserDetails);
  };

  return (
    <div>
      <p>
        {`${userDetail.firstName} ${userDetail.lastName} the ${userDetail.suffix} born`}
      </p>
      <button onClick={() => incrementSuffixInUserDetails()}>Increment</button>
    </div>
  );
};

const Level4 = () => {
  return (
    <div>
      <h4>Fourth Level</h4>
      <UserDetailsComponent />
    </div>
  );
};

const Level3 = () => {
  return (
    <div>
      <h3>Third Level</h3>
      <Level4 />
    </div>
  );
};

const Level2 = () => {
  return (
    <div>
      <h2>Second Level</h2>
      <Level3 />
    </div>
  );
};

export const Context = () => {
  const userState = useState({
    firstName: "James",
    lastName: "Jameson",
    suffix: 1,
    email: "jamesjameson@example.com",
  });
  return (
    <UserDetailsContext.Provider value={userState}>
      <h1>First Level</h1>
      <Level2 />
    </UserDetailsContext.Provider>
  );
};
