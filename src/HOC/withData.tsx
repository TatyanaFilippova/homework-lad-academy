import * as React from "react";

export interface UsersProps {
  users: {
    id: string;
    name: string;
    email: string;
    age: number;
  }[];
}

const withData = (Component: React.ComponentType<UsersProps>) => {
  const users = [
    {
      id: "1",
      name: "John",
      age: 25,
      email: "john@gmail.com",
    },
    {
      id: "2",
      name: "Alex",
      age: 20,
      email: "alex@gmail.com",
    },
    {
      id: "3",
      name: "Bob",
      age: 30,
      email: "bob@gmail.com",
    },
  ];
  return <Component users={users} />;
};

export default withData;
