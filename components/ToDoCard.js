import Tasks from "../";

export default function ToDo() {
  return (
    <ul>
      {Tasks.map((Task) => (
        <li key={Task.id}>
          <h2></h2>
        </li>
      ))}
      <li key="">
        <h2></h2>
      </li>
    </ul>
  );
}
