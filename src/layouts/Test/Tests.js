import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import React, { useEffect, useState } from 'react'
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import TestsTable from './componentsShared/TestsTable'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MDButton from "components/MDButton";
import Button from '@mui/material/Button';

// Table functions
function createData(testTitle, startsAt, endsAt) {
    return { testTitle, startsAt, endsAt };
}

const rows = [
    createData('Math 101', '2022/09/11 9:00 pm', '2022/09/11 10:00 pm'),
]



const Tests = () => {

    const [studentSessions, setStudentSessions] = useState()
    const [testsData, setTestsData] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/tests/sessionStudent')
            .then(response => response.json())
            .then(data => setStudentSessions(data))
            .catch(err => console.error(err));
        console.log(studentSessions)

        // fetch(`http://localhost:3000/api/v1/tests/getStudentTest/${data.result}`)
        // .then(response => response.json())
        // .then(data => setTestsData(data))
        // .catch(err => console.error(err));
        // console.log(studentSessions)
    }, [])


    //     fetch(`http://localhost:3000/api/v1/tests/sessionStudent`)
    //         .then((response) => {
    //             console.log(response, "llllllllllllllllllll");
    //             response.json().then((loggedIn) => {
    //                 console.log(loggedIn);
    //                 if (loggedIn.success) {
    //                     console.log(loggedIn);
    //                     ctx.login(loggedIn.token);
    //                     navigate("/dashboard");
    //                 }
    //             });
    //         })
    //         .catch((e) => e);
    // };

    return (
        <>
            <DashboardLayout>
                <MDBox pt={6} pb={3}>
                    <Card>
                        {/* Header */}
                        <MDBox
                            variant="gradient"
                            bgColor="info"
                            borderRadius="lg"
                            coloredShadow="success"
                            mx={2}
                            mt={-3}
                            p={1}
                            //   mb={1}
                            textAlign="center"
                        >
                            <MDTypography
                                variant="h4"
                                fontWeight="medium"
                                color="white"
                            // mt={0}
                            >
                                Your Tests
                            </MDTypography>
                        </MDBox>

                        {/*  Body */}
                        <MDBox p={2} mt={0}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow
                                        sx={{ minWidth: 650 }}
                                        >
                                            <TableCell>Test Title</TableCell>
                                            <TableCell align="right">Starts At</TableCell>
                                            <TableCell align="right">Ends At</TableCell>
                                            <TableCell align="right">Discription</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.testTitle}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.testTitle}
                                                </TableCell>
                                                <TableCell align="right">{row.startsAt || "starts at"}</TableCell>
                                                <TableCell align="right">{row.endsAt || "ends at"}</TableCell>
                                                <TableCell align="right">{row.discription || "discription"}</TableCell>
                                                <TableCell align="right"><MDButton color='info' variant='contained' >Start now</MDButton></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </MDBox>
                    </Card>
                </MDBox>
            </DashboardLayout>
        </>
    )
}

export default Tests