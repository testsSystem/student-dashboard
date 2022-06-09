// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";
// import { useEffect, useState } from "react";
// import { requestApi } from "../../../helpers";
// import API_URLS from "../../api";
// import MDButton from "components/MDButton";
// import Icon from "@mui/material/Icon";

// const columns = [
//     { Header: "title", accessor: "title", width: "50%", align: "center" },
//     //   { Header: "category", accessor: "category", align: "left" },
//     //   { Header: "location", accessor: "location", align: "center" },
//     { Header: "enroll", accessor: "enroll", width: "50%", align: "center" },
// ];


// function TestsTable(props) {
//     const [rows, setRows] = useState([]);
//     const [tests, setTests] = useState([]);
//     const [loading, setLoading] = useState(false);

//     //

//     const fetchTests = async () => {
//         let data = {
//             url: API_URLS().TESTS.ALL_TESTS,
//         };
//         let res = await requestApi(data);
//         setTests(res.data.result);
//         console.log(res.data.result);
//     };

//     useEffect(() => {
//         fetchTests();
//     }, []);

//     useEffect(() => {
//         const allTests = tests?.map((test, i) => {
//             //   return (
//             //     <div key={i}>
//             //       {test.id}
//             //       {test.title}
//             //       {test.discriptoin}
//             //     </div>
//             //   );
//             return {
//                 title: (
//                     <div key={i}>
//                         {test.id}
//                         {test.title}
//                         {test.descriptoin}
//                     </div>
//                 ),
//                 enroll: (
//                     <>
//                         <MDButton variant="text" color="info">
//                             <Icon>add</Icon>&nbsp; Enroll
//                         </MDButton>
//                     </>
//                 ),
//             };
//         });

//         setRows(allTests);
//     }, [tests]);

//     return (
//         <DashboardLayout>
//             <DashboardNavbar />
//             <MDBox pt={6} pb={3}>
//                 <Grid container spacing={6}>
//                     <Grid item xs={12}>
//                         <Card>
//                             <MDBox
//                                 mx={2}
//                                 mt={-3}
//                                 py={3}
//                                 px={2}
//                                 variant="gradient"
//                                 bgColor="info"
//                                 borderRadius="lg"
//                                 coloredShadow="info"
//                             >
//                                 <Grid
//                                     container
//                                     direction="row"
//                                     justifyContent="space-between"
//                                     alignItems="center"
//                                 >
//                                     <MDTypography
//                                         variant="h6"
//                                         color="white"
//                                         justifyContent="center"
//                                     >
//                                         Session Info
//                                     </MDTypography>
//                                 </Grid>
//                             </MDBox>
//                             <MDBox pt={3}>
//                                 <DataTable
//                                     table={{ columns, rows }}
//                                     isSorted={false}
//                                     entriesPerPage={false}
//                                     showTotalEntries={false}
//                                     noEndBorder
//                                 />
//                             </MDBox>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </MDBox>
//             <Footer />
//         </DashboardLayout>
//     );
// }
// export default TestsTable;