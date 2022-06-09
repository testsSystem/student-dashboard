import React from 'react'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import TestEnterance from "./components/TestEnterance"
import TestsDisplay from "./components/TestsDisplay"
const Session = () => {
    return (
        <>
            <TestsDisplay />
            {/* <TestEnterance /> */}
        </>
    )
}

export default Session