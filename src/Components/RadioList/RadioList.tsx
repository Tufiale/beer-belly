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
    <div className="radio-buttons">
      <h2>{label}</h2>
      {options.map((option, index) => {
        const optionLower = option.toLowerCase();
        const optionCapitalized =
          optionLower[0].toUpperCase() + optionLower.slice(1);
        return (
          <div key={"radio-button" + option + index}>
            <div className="radio-button__options">
              <input
                type="radio"
                name="radio-filter"
                id={optionLower}
                value={optionLower}
                checked={optionLower === selected.toLowerCase()}
                onChange={onChange}
              />

              <label className="radio-buttons__label" htmlFor={optionLower}>
                {optionCapitalized}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RadioList;
