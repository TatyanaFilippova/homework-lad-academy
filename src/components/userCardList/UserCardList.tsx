export interface UsersProps {
  users: {
    id: string;
    name: string;
    email: string;
    age: number;
  }[];
}

const UserCardList = ({ users }: UsersProps) => {
  return (
    <>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </>
  );
};

export default UserCardList;
