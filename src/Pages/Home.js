import Search from "../Components/Search"
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Home = () => {

    let rows = useSelector(state => state.data.value)
    let fetch = useSelector(state => state.data.isFetched)
    const navigate = useNavigate()
    const [searchVal, setSearchVal] = useState("")
    const searchHandler = (e) => {
        setSearchVal(e.target.value)
    }

    if (searchVal.length > 0) {
        rows = rows.filter(item => item.first_name.includes(searchVal) || item.last_name.includes(searchVal) || item.first_name.toLowerCase().includes(searchVal) || item.last_name.toLowerCase().includes(searchVal) || item.id.toLowerCase().includes(searchVal) || item.id.includes(searchVal))
    }


    return (<>
        <Search searchHandler={searchHandler} />
        <TableContainer component={Paper} className={"mt-10"}>
            <Table stickyHeader sx={{ minWidth: 800 }} className={"overflow-auto"}>
                <TableHead >
                    <TableRow >
                        <TableCell sx={{ backgroundColor: "black" }} align="center"><Typography color={"white"}>ID</Typography></TableCell>
                        <TableCell sx={{ backgroundColor: "black" }} align="center"><Typography color={"white"}>First Name</Typography></TableCell>
                        <TableCell sx={{ backgroundColor: "black" }} align="center"><Typography color={"white"}>Last Name</Typography></TableCell>
                        <TableCell sx={{ backgroundColor: "black" }} align="center"><Typography color={"white"}>Date of Birth</Typography></TableCell>
                        <TableCell sx={{ backgroundColor: "black" }} align="center"><Typography color={"white"}>Address</Typography></TableCell>
                        <TableCell sx={{ backgroundColor: "black" }} align="center"><Typography color={"white"}>Date of joining</Typography></TableCell>
                        <TableCell sx={{ backgroundColor: "black" }} align="center"><Typography color={"white"}>Salary</Typography></TableCell>
                        <TableCell sx={{ backgroundColor: "black" }} align="center"><Typography color={"white"}>Designation</Typography></TableCell>
                    </TableRow>
                </TableHead>
                {fetch && <TableBody>


                    {rows.map((row) => (

                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer", ":nth-of-type(2n)": { backgroundColor: "lightgray" } }}
                            onClick={() => {
                                navigate(`/detail?id=${row.id}`)
                            }}
                        >
                            <TableCell component="th" scope="row" align="center">{row.id}</TableCell>
                            <TableCell align="center">{row.first_name}</TableCell>
                            <TableCell align="center">{row.last_name}</TableCell>
                            <TableCell align="center">{row.date_of_birth}</TableCell>
                            <TableCell align="center">{row.address}</TableCell>
                            <TableCell align="center">{row.date_of_joining}</TableCell>
                            <TableCell align="center">{row.salary}</TableCell>
                            <TableCell align="center">{row.designation}</TableCell>
                        </TableRow>

                    ))}
                </TableBody>}

            </Table>
        </TableContainer>
    </>
    )
}

export default Home