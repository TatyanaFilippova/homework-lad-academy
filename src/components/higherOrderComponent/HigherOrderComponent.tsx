import "./styles.css";
import UserCard from "../userCard/UserCard.tsx";

const HigherOrderComponent = () => {
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
  return (
    <table>
      <thead>
        <tr>
          <td>Имя</td>
          <td>Возраст</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        <UserCard users={users} />
      </tbody>
    </table>
  );
};

export default HigherOrderComponent;
