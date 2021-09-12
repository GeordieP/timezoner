import { useState } from "react";

export const useToggle = (defaultEnabled: boolean) => {
  const [enabled, setEnabled] = useState(defaultEnabled);

  return {
    enabled,
    isOn: enabled,
    isOff: !enabled,
    toggle: setEnabled((x) => !x),
    turnOn: setEnabled(true),
    turnOff: setEnabled(false),
  };
};

export default useToggle;
