export default function Employee(props){
    console.log("emp prop ", props)
    var x=100
    return(
        <div>
            {/* <!--Comment--> */}
            <h1>Employee Name: {props.name}</h1>
            <p>Department: {props.dept}</p>
            {x}
        </div>
    )
}