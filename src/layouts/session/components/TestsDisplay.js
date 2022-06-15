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
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { sizing } from '@mui/system';

const TestsDisplay = ({ test_id, session_id }) => {
    const [testData, setTestsData] = useState()
    const ctx = useContext(AuthContext);
    // const ctxData = useContext(SessionsContext);
    const navigate = useNavigate()


    const testId = test_id
    const url = `http://localhost:3000/api/v1/tests/getStudentTest/${testId}`
    const [result, setResult] = useState({})
    const [selectedAnsArr, setSelectedAnsArr] = useState([])
    // let [searchParams, setSearchParams] = useSearchParams();
    const sessionId = session_id
    // var date_time = new Date().toLocaleString();
    // console.log(date_time, "aaaaaaaaaaa");
    // console.log(searchParams.get("session_id"), "111111111111111111")

    console.log(testId)

    const handleChange = (e, i, j) => {


        if (selectedAnsArr.some((ans) => ans.questionId === testData.Questions[i].id)) {
            console.log("", "first")
            let quIndex = selectedAnsArr.findIndex((ans) => testData.Questions[i].id === ans.questionId)
            selectedAnsArr[quIndex].selectedAnswer = +e.target.value
            console.log(selectedAnsArr)
        } else {
            console.log(testData.Questions[i].Answers_options[j], "sec")
            setSelectedAnsArr(old => [...old, { selectedAnswer: testData.Questions[i].Answers_options[j].id, questionId: testData.Questions[i].Answers_options[j].question_id }])
        }
    }
    console.log(selectedAnsArr)


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

    // //////////////////////////////////////////////////////////////////////////////////

    const handleClick = async () => {
        const headers = {
            method: "PUT",
            body: JSON.stringify({
                answerOptions: selectedAnsArr,
            }),
            headers: {
                "Content-Type": "application/json",
                'authorization': 'Bearer ' + ctx.token,
            },

        }
        const fetching = async (err) => {
            const response = await fetch(`http://localhost:3000/api/v1/tests/endSession/${sessionId}`, headers)
            const resJson = await response.json()
            console.log(resJson, "222222")
            if (err) {
                console.error(err)
            }
            if (resJson.result.result >= 60) {
                Swal.fire({
                    title: 'Congrats!',
                    text: `You passed the test with a result of ${resJson.result.result}/100`,
                    icon: 'success',
                    confirmButtonText: 'Cool',
                    confirmButtonColor: '#1a73e8',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(`/dashboard`)
                    } else {
                        navigate(`/dashboard`)
                    }
                })
            } else {
                Swal.fire({
                    title: 'Unfortunatly!',
                    text: `You Failed the test with a result of ${resJson.result.result}/100`,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                    confirmButtonColor: '#1a73e8',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(`/dashboard`)
                    } else {
                        navigate(`/dashboard`)
                    }
                })
            }
            console.log("submit done")
            // navigate(`/dashboard`)

        }
        // Swal.fire({
        //     title: 'You Faild!',
        //     text: 'Do you want to continue',
        //     icon: 'error',
        //     confirmButtonText: 'Cool'
        //   })
        // Swal.fire({
        //     title: 'Congrats!',
        //     text: 'You passed the test with a result of 60/100',
        //     icon: 'success',
        //     confirmButtonText: 'Cool'
        // })
        fetching()
        console.log(selectedAnsArr)
    }
    // //////////////////////////////////////////////////////////////////////////////////


    return (
        <>
            <MDBox p={15} sx={{display: "flex" }} justifyContent="center">
                <Card   sx={{ maxWidth: '60%' }}>
                    <MDBox p={2} mt={0} >
                        <Grid container spacing={1}  justifyContent="center">
                            {testData && testData.Questions.map((questions, i) => {
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
                                                            >
                                                                {
                                                                    questions.Answers_options.map((options, j) => {
                                                                        return (
                                                                            <FormControlLabel onChange={(e) => handleChange(e, i, j)} key={j} value={options.id} control={<Radio />} label={options.answer} />
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
                            <Grid item  m={3} mt={0} xs={3}>
                                <MDButton color='info' variant='contained' onClick={handleClick} >Submit</MDButton>

                            </Grid>
                        </Grid>
                    </MDBox>

                </Card>
            </MDBox>
        </>
    )
}

export default TestsDisplay