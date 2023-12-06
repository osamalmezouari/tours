
import "./tours.css"
import {ToursContext} from "./tours.jsx";
import {useContext, useState} from "react";
const Tour = () => {
    const {tours,setTours} = useContext(ToursContext)
    const [actions,setActions] = useState({})

    const handlerClick = (id) =>{
        setTours(tours.filter ((tour)=>{
            return  id !== tour.id
        }))
    }
    const readMore = (id)=> {
        const matchData = tours.find((tour)=>{
            return tour.id === id
        })
        const targetInfo = document.querySelector(`.info-${id}`)

        if (actions[id] === "showLess"){
            targetInfo.textContent = `${matchData.info.substring(0,200)} ...`
            setActions({...actions,[id]:"readMore"})
        }
        else {
            targetInfo.textContent = matchData.info
            setActions({...actions,[id]:"showLess"})
        }
    }
    return <>
        {
            tours.map((tour,i)=> {
                const {id,image,name,price,info} = tour

                return (
                    <div className={"tour"} key={i} >
                        <div className={"image"} style={{backgroundImage: `url(${image})`}}>
                            <div className={"price"}>${price}</div>
                        </div>
                        <h1 className={"name"}>{name}</h1>
                        <p className={`info-${id} info`}>
                            {info.substring(0,200) +"..."}
                        </p>
                        <p className={`readState readState-${id}`} onClick={()=>readMore(id)}>{actions[id] === "showLess" ? "Show Less":"Read More"}</p>
                        <button className={"remove"} onClick={()=>handlerClick(id)}>Not Interested</button>
                    </div>
                )
            })
        }
    </>
}

export default Tour






