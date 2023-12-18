export default function Emp_details(props){
    console.log(props)
    return(
        <div>
            <table border="1px">
                <tr>
                    <td>Employee Name</td>
                    <td>{props.ename}</td>
                </tr>
                <tr>
                    <td>Designation</td>
                    <td>web Developer</td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>{props.dept}</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>july </td>
                </tr>
            </table>
        </div>
    )
}