import { useState } from "react";
import { Switch } from "../../../../components";

export const SideBar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="dashboard__sidebar">
      <Switch checked={checked} onChange={setChecked} />
    </div>
  );
};
