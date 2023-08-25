import { ChangeEventHandler } from "react";
import "../RadioList/RadioList.scss";

type RadioButtonProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  selected: string;
  options: string[];
  label: string;
};

const RadioList = ({
  onChange,
  selected,
  options,
  label,
}: RadioButtonProps) => {
  return (
    <div className="radio-button">
      <p>{label}</p>
      {options.map((option) => (
        <>
          <label>{option}</label>
          <input
            type="radio"
            name="radio-list"
            id="radio-list"
            onChange={onChange}
            checked={selected === option}
            value={option}
          />
        </>
      ))}
    </div>
  );
};

export default RadioList;
