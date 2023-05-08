
import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { NoPage } from './components/NoPage';
import UserComponent from './components/UserComponent';
import { UserDetails } from './components/UserDetails';
import BaseApp from './core/Base';
import { data } from './data/data';
import AddTeacherUser from './components/TeacherUser';

function App() {
  const [user,setUser] = useState(data)
  return (
    <div className="App">

    <Switch>
    <Route exact path="/">
    <UserComponent
    user={user}
    setUser={setUser}/>
    </Route>
    <Route path="/add/user">
    <AddUser
     user={user}
     setUser={setUser}/>
    
    </Route>

    

    <Route path="/edit/:id">
      
    <EditUser
    user={user}
     setUser={setUser}
     />
     </Route>
     
     <Route path = "/user/:id">
      <UserDetails user={user}/>


     </Route>

     <Route path="/professor">
      <Redirect path ="/"/>
     </Route>



    <Route path ="**/**">
      <NoPage/>
    </Route>



    </Switch>
    
   
    </div>
  );
}

export default App;