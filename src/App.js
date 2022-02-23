import logo from './logo.svg';
import './App.css';

import "./App.css";
import SignIn from "./extra/sign-in";
import SignUp from "./sign-up";
import Register from "./extra/register";
import Dashboard from "./extra/dashboard";
import Section from "./extra/section"
import dashboard from './extra/dashboard';


export default function App() {
  return( 
  
  
  <div>
    


    {/* <BrowserRouter>

    <Route path='/Login' element={<Login />}></Route>
    <Route path='/Dashboard' element={<Dashboard />}></Route>
  
    
    </BrowserRouter>  */}
    
    {/* <Register/> */}
    <SignIn/>
    <Dashboard />
   

  </div>




  );
}

  // function Login(){
  //   return <button>Login</button>;
  // }

  
  // function Dashboard(){
  //   return <button>Login</button>;
  // }



// function Login(){
//   return <button>Login</button>;
// }

// function Dashboard(){
//   return <button>Login</button>;
// }