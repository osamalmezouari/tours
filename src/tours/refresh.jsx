import "./tours.css"

const Refresh = () =>{
    return (
        <div className={"RefreshEle"}>
            <h1>No Tours Left</h1>
            <button onClick={()=> window.location.reload()}>Refresh</button>
        </div>
    )
}
export default Refresh