import React from "react";

interface DropdownProps {
  info: any;
  updateNumber: any;
  name: any;
}

const DropDown: React.FC<DropdownProps> = ({ info, updateNumber, name }) => {
  return (
    <div className="w-full">
      <select
        className="w-full border-2 border-gray-400 focus:ring-blue-500 focus:border-blue-500 p-1 h-11"
        name="dropdown"
        id="name"
        onChange={(e) => updateNumber(e.target.value)}
      >
        {[...Array(info).keys()].map((x) => (
          <option value={x + 1}>
            {name} - {x + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
