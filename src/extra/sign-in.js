import { LockClosedIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Routes, Route, Link } from 'react-router-dom';


export default function SignIn() {

  
  // library for hooks form
  const [correct, setCorrect] = useState([]);
  const [save, setSave] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    setSave(data);
    console.log(data);
    //console.log(JSON.parse(localStorage.getItem("login")));
    //const credentials = JSON.parse(localStorage.getItem("login"))[0];
    const credentials = {
      email: 'testcert609@gmail.com', password: '12345'
    }
    debugger;
    
    if (data.email == credentials.email && data.password == credentials.password) 
    {


      
      console.log("login success");
      
      
      
      
    } 
    
    else {
      console.log("Not login success please use the right credentails");
    }    
  };


  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("login"));
  //   setCorrect(data ? data : []);
  // }, []);

  //debugger;
  // if (correct == save) {
  //   console.log("login success");
  // } else {
  //   console.log("Not login success");
  // }

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                 </span> 
                {/* <a href="http://localhost:3000/dashboard"> Submit </a> */} 
                Submit
              </button>
            </div>
          </form>
        </div>

        </div>
    </>
  );
}




        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}  > </Route>
          <Route path="login" element={<Login />}  > </Route>
        </Routes>
 */}



 
