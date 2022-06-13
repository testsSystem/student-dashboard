import React, { useState,  useContext  } from 'react'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import TestEnterance from "./components/TestEnterance"
import TestsDisplay from "./components/TestsDisplay"
import { SessionsContext } from 'context/SessionsContext';
import { useLocation } from 'react-router-dom'

const Session = () => {
    const [startTest, setStartTest] = useState(true)
    const ctxData = useContext(SessionsContext);
    const {state} = useLocation()
    const test_id = state.testID
    const session_id = state.sessionID
    console.log(startTest, "9999999999999999999")
    console.log(state.sessionID, 444444444444444)
    console.log(state.testID, 44444444444)
    const start = () => {
        // const startSession = async () => {
        //     const fectFun = await fetch(`http://localhost:3000/api/v1/tests/startSession/${}`)
        // }
        setStartTest(false)
        console.log(startTest)
        // ctxData.session(state.sessionID)
        // ctxData.test(state.testID)
        // console.log(state.sessionID, 444444444444444)
        // console.log(state.testID, 44444444444)
    }
    return (
        <>
            {startTest ?
                <TestEnterance start={start} /> :
                <TestsDisplay test_id={test_id} session_id={session_id} /> }
        </>
    )
}

export default Session