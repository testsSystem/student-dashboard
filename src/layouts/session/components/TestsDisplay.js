import React, { useEffect, useState } from 'react'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const TestsDisplay = () => {
    const [testData, setTestsData] = useState()

    // dxcdjhjhjh
    // useEffect(() => {

    //         const data = await fetch(`http://localhost:3000/api/v1/tests/getStudentTest/2`);
    //         const json = await data.json();
    //         console.log(testData)
    //     }
    //     fetchData()
    //         .catch(console.error);;
    // }, [])


    useEffect(() => {
        const fetchData = async () => {
            fetch(`http://localhost:3000/api/v1/tests/getStudentTest/2`)
                .then(response => response.json())
                .then(data => setTestsData(data.result.Questions))
                .catch(err => console.error(err));
        }
        fetchData()
    }, [])

    const handleClick = () => {
        console.log(testData)
    }
    return (
        <>
            <DashboardLayout>
                <MDBox p={15} >
                    <Card>
                        <MDBox p={2} mt={0}>
                            <Grid container spacing={5}>
                                {testData && testData.map((questions) => {
                                    return (
                                        <div key={questions.id}>
                                            <Grid item xs={12}>
                                                <MDTypography
                                                    variant="body2"
                                                    fontWeight='regular'
                                                    color='text'
                                                // mt={0}
                                                >
                                                    {questions.questoin}
                                                </MDTypography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl>
                                                    <RadioGroup
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        name="radio-buttons-group"
                                                    >
                                                        {
                                                            questions.Answers_options.map((options) => {
                                                                return (
                                                                    <FormControlLabel key={options.id} value={options.answer} control={<Radio />} label={options.answer} />
                                                                )
                                                            })
                                                        }
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                        </div>
                                    )
                                }
                                )}
                                {/* <Grid item xs={12}>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid> */}
                                <Grid item xs={12}>
                                    <MDButton color='info' variant='contained' onClick={handleClick} >Start now</MDButton>

                                </Grid>
                            </Grid>
                        </MDBox>

                    </Card>
                </MDBox>
            </DashboardLayout>
        </>
    )
}

export default TestsDisplay