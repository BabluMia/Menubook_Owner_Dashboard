import { Box } from "@material-ui/core";
import { TabContext, TabPanel } from "@mui/lab";
import React from "react";
import { useState } from "react";
import "./Client.css";
import Details1 from "./Details1";
import Details2 from "./Details2";
import Details3 from "./Details3";

export const AddClients = () => {
  const step = ["1", "2", "3"];
  const [value, setValue] = React.useState("1");
  const [activeStep, setActiveStep] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }} className="mt-2">
      
      <TabContext value={value}>
        <TabPanel value="1">
          <Details1 value={setValue} />
        </TabPanel>
        <TabPanel value="2">
          <Details2 value={setValue} />
        </TabPanel>
        <TabPanel value="3">
          <Details3 value={setValue} />
        </TabPanel>
      </TabContext>
      
    </Box>
  );
};
