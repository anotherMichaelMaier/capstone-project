import Tasks from "../db.json";

export default function Cards() {
  return (
    <ul>
      {TasksList.map((Task) => (
        <li key={Task.id}>
          <h2>{Task.task}</h2>
        </li>
      ))}
    </ul>
  );
}
