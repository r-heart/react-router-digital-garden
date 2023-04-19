import camelCase from "lodash.camelcase";
import capitalize from "lodash.capitalize";

export default function TextArea({ id, label, minLength = 140, placeholder }) {
  return (
    <div>
      <label className="sr-only" htmlFor={id}>
        {label || placeholder || capitalize(id)}
      </label>
      <textarea
        id={id}
        name={camelCase(id)}
        placeholder={placeholder || id}
        minLength={minLength}
      />
    </div>
  );
}
