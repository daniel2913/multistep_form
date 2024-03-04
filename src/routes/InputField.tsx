import { JSX } from "preact/jsx-runtime";
import { InputProps } from "./Page1";

export function InputField(props: InputProps) {

  function inputHandler(e: JSX.TargetedInputEvent<HTMLInputElement>) {
    if (e.currentTarget.checkValidity() && e.currentTarget.value.length > 0) props.value.value = e.currentTarget.value;
    else props.value.value = "";
  }
  function blurHandler(e: JSX.TargetedFocusEvent<HTMLInputElement>) {
    if (e.currentTarget.checkValidity()) return;
    if (props.invalidMessage)
      e.currentTarget.setCustomValidity(props.invalidMessage);
    e.currentTarget.reportValidity();
  }

  return (
    <label className="flex flex-col">
      <span
        className="text-xl text-p-blue-marine font-semibold"
      >
        {props.label}
      </span>
      <input
        defaultValue={props.value}
        required
        onBlur={blurHandler}
        type={props.type}
        className="px-2 py-1 text-2xl border-n-gray-cool border rounded-lg"
        onInput={inputHandler}
        placeholder={props.placeholder} />
    </label>
  );
}

