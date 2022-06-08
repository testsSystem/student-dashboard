import React, { useContext, useEffect, useState } from 'react'
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
import { AuthContext } from 'context/AuthContext';

const TestsDisplay = () => {
    const [testData, setTestsData] = useState()
    const ctx = useContext(AuthContext);
    const url = `http://localhost:3000/api/v1/tests/getStudentTest/2`
    const [result, setResult] = useState({})
    const [selectedAnsArr, setSelectedAnsArr] = useState([
        // {
        //     questoin_id: "",
        //     ans_id: ""
        // },
        // {
        //     questoin_id: "",
        //     ans_id: ""
        // },{
        //     questoin_id: "",
        //     ans_id: ""
        // },
    ])
    

    useEffect(() => {
        const headers = {
            headers: {
                'authorization': 'Bearer ' + ctx.token,
            }
        }
        const fetchData = async (err) => {

            const response = await fetch(url, headers)
            const resJson = await response.json()
            setTestsData(resJson.result)
            console.log(resJson.result)
            if (err) {
                console.error(err)
            }

        }
        fetchData()
    }, [])

    useEffect(() => {
        console.log('11111111')
        const resultObject = testData &&
        {
            test_id: testData.id,
            session_id: "session_id",
            selectedAnsArr: selectedAnsArr
        }


        setResult(resultObject)
        console.log("9999999")
    }, [testData])


    const handleClick = () => {
        setResult(result => ({
            ...result,
            ...selectedAnsArr
        }));
        // setSelectedAnsArr([...selectedAnsArr, {"question_id": "questions.id" }])

        console.log(result)
        console.log(testData)

        console.log(selectedAnsArr)

    }

    const handleChange = (j, i) => {

        // setSelectedAns([...selectedAns, e.target.value])
        console.log(j, i)
    }
    const handleChange2 = (e) => {

        // setSelectedAns([...selectedAns, e.target.value])
        console.log("5454454")
    }
    // const addSelectedAns = (i) => {
        
    // }

    const setdata = (q_id, ans_id) => {
        setSelectedAnsArr([...selectedAnsArr, {"question_id": q_id, selectedAns_id: ans_id }])
    }
    return (
        <>
            <DashboardLayout>
                <MDBox p={15} >
                    <Card>
                        <MDBox p={2} mt={0}>
                            <Grid container spacing={1}>
                                {testData && testData.Questions.map((questions, i) => {
                                    // setSelectedAnsArr([...selectedAnsArr, {"question_id": questions.id }])
                                    // () => {setdata(questions.id)}
                                    return (
                                        <Grid item xs={12} m={3} key={i} className="1111111">
                                            <MDBox>
                                                <Card>
                                                    <Grid container p={4}>
                                                        <Grid item xs={12}>
                                                            <MDTypography
                                                                variant="body1"
                                                                fontWeight='medium'
                                                                color='dark'
                                                            >
                                                                {questions.questoin}
                                                            </MDTypography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <FormControl>
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radio-buttons-group"
                                                                    // onChange={() => {setdata(questions.id, event.target.value)}}
                                                                >
                                                                    {
                                                                        questions.Answers_options.map((options, j) => {
                                                                            return (
                                                                                <FormControlLabel onChange={() => handleChange(j, i)} key={j} value={options.id} control={<Radio />} label={options.answer} />
                                                                            )
                                                                        })
                                                                    }
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>
                                                </Card>
                                            </MDBox>
                                        </Grid>
                                    )
                                }
                                )}
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