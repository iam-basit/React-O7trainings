function Student1(props){
    console.log("props is ", props)
    return(
        <div>
            {props.student}
            {props.duration}
        <table border="1px">
            <tr>
                <td>Name</td>
                <td>{props.student}</td>
            </tr>
            <tr>
                <td>Course</td>
                <td>React</td>
            </tr>
            <tr>
                <td>Duration</td>
                <td>{props.duration}</td>
            </tr>
        </table>
          
       </div>
    )
}
export default Student1