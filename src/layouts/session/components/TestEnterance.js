import React from 'react'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";

const TestEnterance = ({start}) => {
    
    return (
        <>
            <DashboardLayout>
                <MDBox pt={6} pb={3}>
                    <Card>
                        {/* card header (test title) */}
                        {/* <MDBox
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
                                Test Title
                            </MDTypography>
                        </MDBox> */}

                        {/* Test details and instruction */}
                        <MDBox p={2} mt={0}>
                            <Grid  container spacing={5}>
                        <Grid item xs={12}>
                                <MDTypography
                                    variant="body2"
                                    fontWeight='regular'
                                    color='text'
                                // mt={0}
                                >
                                    instructions: <br></br><br></br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at quam nunc. Aliquam erat volutpat. Sed pellentesque pellentesque massa vitae lobortis. Quisque rutrum dolor et odio viverra, vitae aliquet dui tincidunt. Mauris vitae varius arcu. Maecenas finibus consectetur purus, volutpat rutrum nisl accumsan non. Donec eget odio velit. Cras congue accumsan tristique. Duis magna tortor, pulvinar sed ex at, porttitor vehicula neque. Vivamus elementum sit amet diam vel cursus. In ante nisl, viverra in libero interdum, fermentum ultricies augue.
                                    <br></br> <br></br>Suspendisse potenti. Nam non aliquet lacus. Sed efficitur, enim vitae finibus facilisis, quam nibh mattis lectus, vel consectetur tellus odio ut ex. Integer faucibus nibh sit amet luctus aliquet. Praesent sit amet ligula dolor. Mauris lacinia quis nibh id condimentum. Mauris eros mauris, tincidunt non ex eu, placerat venenatis dui. Nullam consectetur gravida ex, a varius orci dictum non. Aenean vel purus eget lectus dapibus egestas.
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
                                    You have to answer 60% of this test to pass
                                </MDTypography>
                            </Grid>
                            <Grid item xs={12} container  justifyContent="space-between">
                            <MDButton color='secondary' variant='contained' >Cancel</MDButton>
                            <MDButton color='info' variant='contained' onClick={() => start()}>Start now</MDButton>
                            </Grid>
                            </Grid>
                        </MDBox>
                    </Card>
                </MDBox>
            </DashboardLayout>
        </>
    )
}

export default TestEnterance