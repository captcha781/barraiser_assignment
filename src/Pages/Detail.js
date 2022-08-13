import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import { useLocation } from "react-router-dom";
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography } from "@mui/material"

const Detail = () => {

    const {search} = useLocation()
    const params = new URLSearchParams(search);
    let id =  params.get("id")

    const data = useSelector(state => state.data.value)
    const fetcher = useSelector(state => state.data.isFetched)
    const [empData, setEmpData] = useState({})
    
    useEffect(()=> {
        if(fetcher){
            let empVal = data.filter(rec => rec.id === id)
            setEmpData(empVal[0])
        }

    },[id, data, fetcher])
    

    return (
        <>
        <div className="w-full h-screen flex justify-center items-center">
            <TableContainer component={Paper} sx={{maxWidth:320}}>
                <Table sx={{maxWidth: 320}}>
                    <TableHead sx={{backgroundColor: "black", color: "white", fontWeight: "bold"}}>
                        <TableRow>
                            <TableCell><Typography color={"white"}>Field</Typography></TableCell>
                            <TableCell><Typography color={"white"}>Value</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    {fetcher && <TableBody>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>{empData.id}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>{empData.first_name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Last Name</TableCell>
                            <TableCell>{empData.last_name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Date Of Birth</TableCell>
                            <TableCell>{empData.date_of_birth}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Address</TableCell>
                            <TableCell>{empData.address}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Date of Joining</TableCell>
                            <TableCell>{empData.date_of_joining}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Salary</TableCell>
                            <TableCell>{empData.salary}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Designation</TableCell>
                            <TableCell>{empData.designation}</TableCell>
                        </TableRow>
                    </TableBody>}
                </Table>
            </TableContainer>
            </div>
        </>
    )
}

export default Detail