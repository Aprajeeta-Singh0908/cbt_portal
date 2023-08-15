import React from 'react';
import { Button, FormGroup } from '@mui/material';
import Navbar from '../components/Navbar';
import { TextField, FormControl } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const getStatus = (startDateTime, endDateTime) => {

}

const EXAMS = [{ exam_name: "Exam ABC", start_date_time: "12/04/2023 09:00AM", end_date_time: "12/04/2023 12:00PM" }, { name: "Exam ABC", start_date_time: "12/04/2023 09:00AM", end_date_time: "12/04/2023 12:00PM" }, { name: "Exam ABC", start_date_time: "12/04/2023 09:00AM", end_date_time: "12/04/2023 12:00PM" }]

const Dashboard = () => {

    return (
        <div>
            <Navbar />
            <div >
                <h1>Create Exam</h1>
                <FormControl style={{ width: "60%" }}>
                    <TextField type="text" variant='outlined' label="Exam Name" />
                    <FormGroup style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DemoContainer components={['TimePicker']} >
                                <DateTimePicker label="Set Start Date & Time" />
                            </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs} style={{ width: "100%" }}>
                            <DemoContainer components={['TimePicker']}>
                                <DateTimePicker label="Set End Date & Time" fullWidth />
                            </DemoContainer>
                        </LocalizationProvider>
                    </FormGroup>
                    <Button variant="contained" style={{ marginTop: "0.8rem" }}>Create Exam</Button>
                </FormControl>
            </div>
            <div>
                <h1>Created Exam</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Exam Name</TableCell>
                                <TableCell align="right">Start Date & Time</TableCell>
                                <TableCell align="right">End Date & Time</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right"> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {EXAMS.map(({ exam_name, start_date_time, end_date_time }) => (
                                <div>

                                </div>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </div>

        </div>
    )
}

export default Dashboard