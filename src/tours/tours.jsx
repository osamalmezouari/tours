import "./tours.css";
import {createContext, useEffect, useState} from "react";
import Tour from "./tour"
import Loading from "./loading.jsx";
import "./tours.css"
import Refresh from "./refresh.jsx";

const url ='https://course-api.com/react-tours-project';
export const ToursContext = createContext()
const Tours = () => {
    const [tours,setTours] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect ( () => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setTours(data)
            }
            catch {
                console.log("Error")
            }
            setLoading(false)
        }
        fetchData()
    },[])
    return (
        <>
            { tours.length ? <h1 className={"title"}>Our <span>Tours</span> </h1> : ""}
            { loading ? <Loading /> :
                <div className={"tours"}>
                    <ToursContext.Provider value={{tours, setTours}}>
                        <Tour />
                    </ToursContext.Provider>
                </div>
            }
            {tours.length === 0 && loading === false ? <Refresh />:""}
        </>
    )
}
export default Tours

