import * as React from "react";

export const useInput = (defaultValue = "") => {
  const [value, setValue] = React.useState(defaultValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

export default useInput;
