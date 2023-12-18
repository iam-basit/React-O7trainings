export default function SubChild(props){
    console.log("subchild props is ", props)
    // props={
    //     data:{
    //         pass:"abc123"
    //     }
    // }
    return(
        <div>
            <h1>This is subchild</h1>
            {/* <h1>Password is {props.data.pass}</h1> */}
            <h1>Password is {props.data}</h1>
        </div>
    )
}