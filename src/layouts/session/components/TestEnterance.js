import React from 'react'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";

const TestEnterance = ({ start }) => {

    return (
        <>
                <MDBox pt={6} pb={3} sx={{display: "flex" }} className="aaaaaaaaaa" justifyContent="center" >
                    <Card sx={{ maxWidth: '60%' }} >

                        {/* Test details and instruction */}
                        <MDBox  mt={0}>
                            <Grid container p={6} spacing={5}>
                                <Grid item xs={12}>
                                    <MDTypography
                                        variant="h4"
                                        fontWeight='regular'
                                        color='text'
                                    // mt={0}
                                    >
                                        instructions:
                                    </MDTypography>

                                </Grid>
                                <Grid item xs={12}>
                                    <MDTypography
                                        variant="body2"
                                        fontWeight='regular'
                                        color='text'
                                    // mt={0}
                                    >
                                        - Don't refresh the Page
                                    </MDTypography>
                                </Grid>
                                <Grid item xs={12}>
                                    <MDTypography
                                        variant="body2"
                                        fontWeight='regular'
                                        // fontWeight="medium"
                                        color='text'
                                    // mt={0}
                                    >
                                        - You have to answer 60% of this test to pass
                                    </MDTypography>
                                </Grid>
                                <Grid item xs={12} container justifyContent="end">
                                    <MDButton color='info' variant='contained' onClick={() => start()}>Start now</MDButton>
                                </Grid>
                            </Grid>
                        </MDBox>
                    </Card>
                </MDBox>
        </>
    )
}

export default TestEnterance