import camelCase from "lodash.camelcase";
import capitalize from "lodash.capitalize";
import startCase from "lodash.startcase";

export default function TextArea({ id, label, minLength = 140, placeholder }) {
  return (
    <div>
      <label className="sr-only" htmlFor={id}>
        {label || placeholder || capitalize(id)}
      </label>
      <textarea
        id={id}
        name={camelCase(id)}
        placeholder={placeholder || label || startCase(id)}
        minLength={minLength}
      />
    </div>
  );
}
