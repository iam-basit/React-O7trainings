import React from "react";
import SubChild from "./SubChild";

export default function Child(props){
    console.log("props is ", props)
    // props={
    //     pass:"abc123"
    // }
    return(
        <>
            <h1>This is child component</h1>
            <SubChild data={props.pass}/>
        </>
    )
}