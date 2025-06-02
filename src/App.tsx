import "./App.css";
import withData from "./HOC/withData.tsx";
import UserCardList from "./components/userCardList/UserCardList.tsx";

function App() {
  return (
    <table>
      <thead>
        <tr>
          <td>Имя</td>
          <td>Возраст</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>{withData(UserCardList)}</tbody>
    </table>
  );
}

export default App;
