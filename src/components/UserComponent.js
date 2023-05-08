
import { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../core/Base";



export default function UserComponent({user, setUser}) {
 const history =useHistory();

  const deleteUser =(idx)=>{
    const alterList = user.filter((per,id) => per . id !==idx);
    setUser(alterList);
  }



    return(
        <BaseApp
        title="Books">
            <div className="user-content">
               
                
            {user.map((person,idx)=>(
            <div key={idx} className="user-card">
                
                <h1>{person.bookname}</h1>
                <p>author : {person.author}</p>
                <p>Email : {person.email}</p>
                <p>publishdate   : {person.publishdate}</p>
                
               

                <div className="btn-group">
                    <button 
                    onClick={()=>history.push(`/edit/${person.id}`)}
                    
                    className = "btn edit-btn"> 📝</button>

                    <button className = "btn view-btn"
                    
                    onClick={()=>history.push(`/user/${idx}`)}
                
                    >📖</button>

                    <button className= "btn del-btn"
                    onClick={()=>deleteUser(person.id)}
                    >🚮</button>


            </div>
            </div>
            
            
            ))}

            </div>
        
        </BaseApp>
    )
}