import * as React from "react";
import Switch from "@mui/material/Switch";

export default function SwitchColor({checked,handleChange}) {
  
  return (
    <Switch checked={checked} onChange={handleChange} label="" size="small" />
  );
}
