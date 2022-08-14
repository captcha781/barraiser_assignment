import {Link, useLocation} from "react-router-dom"
import {useState, useEffect} from "react"

const AppBar = () => {
    const [path, setPath] = useState("")
    const location = useLocation()

    useEffect(() => {
        setPath(location.pathname)
    },[path, location.pathname])

    return (
        <div className="bg-slate-600 text-white p-3 text-md font-medium flex justify-between items-center">
            <div>BarRaiser Assignment</div>
            {path === "/hierarchy" ? <Link to={"/"}>Home</Link> : <Link to={"/hierarchy"} >Hierarchy</Link>}
            </div>
    )
}
export default AppBar