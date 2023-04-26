export default function Thought({ thought }) {
  return (
    <li className="font-medium">
      {thought.thought}
      <small className="block space-x-2 italic">
        <span>{thought.author}</span>
        <span>{thought.date}</span>
        <span>{thought.time}</span>
      </small>
    </li>
  );
}
