import {useEffect} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Detail from "./Pages/Detail"
import AppBar from "./Components/AppBar";
import { Container } from "@mui/material";
import { useDispatch} from "react-redux"
import axios from "axios"
import {setValue, setFetch} from "./features/data"


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees")
    .then(response => {
      dispatch(setValue(response.data))
      dispatch(setFetch(true))
    });
  },[dispatch])
    


  
  return (
    <>
      <AppBar />
      <Container maxWidth={"100%"} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
