import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../core/Base";


export function UserDetails({user}){
    const {id} =useParams();
    const person = user[id];
    return(
        <BaseApp
        title={"Book and Author Details"}
        >
           <div className="user-content">
  <div className="user-card">
    <h1 className="text-3xl font-bold mb-4">{person.bookname}</h1>
    <div className="flex flex-col md:flex-row justify-between mb-4">
      <div className="flex-1">
        <p className="text-gray-600 font-medium">Author:</p>
        <p className="font-semibold">{person.author}</p>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 font-medium">Publish Date:</p>
        <p className="font-semibold">{person.publishdate}</p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex-1">
        <p className="text-gray-600 font-medium">Email:</p>
        <p className="font-semibold">{person.email}</p>
      </div>
    </div>
  </div>
</div>


        </BaseApp>
    )
}