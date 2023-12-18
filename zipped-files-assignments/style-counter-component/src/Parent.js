import Child from "./Child"

export default function Parent(){
    var pass="abc123"
    return(
        <div>
            <h1>This is parent</h1>
            <Child pass={pass}/>
        </div>
    )
}