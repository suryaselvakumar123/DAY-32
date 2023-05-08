import React from "react";
import { useHistory } from "react-router-dom";

export function NoPage(){
    const history =useHistory()
    return(
        <div>
          <h1>Budy this is Not A LIBRARY Page</h1>
          <p>IF you Need to  join LIBRARY page</p>
          <h6>Click Here </h6> <h1>￬</h1>
          <button
          onClick={()=>history.push("/")}>
            Dashboard
            </button>
        </div>
    )
}