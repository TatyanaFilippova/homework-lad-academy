import "./styles.css";
import UserCard from "../userCard/UserCard.tsx";
import withData from "../../HOC/withData.tsx";

const HigherOrderComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>Имя</td>
          <td>Возраст</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>{withData(UserCard)}</tbody>
    </table>
  );
};

export default HigherOrderComponent;
