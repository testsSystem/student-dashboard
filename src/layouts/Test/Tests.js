import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from "context/AuthContext";

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
import DataTable from "examples/Tables/DataTable";


const columns = [
    { Header: 'Test Title', accessor: 'title', width: '40%', align: 'left' },
    { Header: 'Starts At', accessor: 'startsAt', width: '20%', align: 'left' },
    { Header: 'Ends At', accessor: 'endsAt', width: '20%', align: 'left' },
    { Header: 'Start Test', accessor: 'startTest', width: '10%', align: 'left' },
]


const Tests = () => {

    const [studentSessions, setStudentSessions] = useState()
    const ctx = useContext(AuthContext);
    const sessionsUrl = 'http://localhost:3000/api/v1/tests'
    const [rows, setRows] = useState([])


    const handleClick = (test_id) => {
        console.log("test_id: " + test_id)

    }
    useEffect(() => {
        const headers = {
            headers: {
                'authorization': 'Bearer ' + ctx.token,
            }
        }
        const fetchSessions = async (err) => {
            const response = await fetch(sessionsUrl, headers)
            const resJson = await response.json()
            setStudentSessions(resJson.result)
            console.log(resJson.result)
            if (err) {
                console.error(err)
            }
        }
        fetchSessions()
    }, [])

    useEffect((err) => {
        const sessionsTable = studentSessions && studentSessions.map((data) => {
            console.log(data, "data");
            return {
                title: data.title,
                // startsAt: data.start_at,
                // endsAt: data.end_at,
                startTest: <MDButton color='info' variant='contained' onClick={() => handleClick(data.id)} >Start now</MDButton>
            }
        })
        if (err) {
            console.error(err)
        }

        setRows(sessionsTable)
        console.log(rows, "rows")
    }, [studentSessions])

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
                            {rows && <DataTable
                                table={{ columns, rows }}
                                // pagination=  {{color: "primary"}}
                                isSorted={false}
                                entriesPerPage={false}
                                showTotalEntries={false}
                                noEndBorder
                            />}
                        </MDBox>
                    </Card>
                </MDBox>
            </DashboardLayout>
        </>
    )
}

export default Tests