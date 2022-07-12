import { useState } from "react";
import CompanyIcon from './assets/companyicon.svg';
import GoogleIcon from './assets/googleicon.svg';
import { Pagination } from './components/Pagination';
import validateInfo from './helper-functions/validateInfo';


function App() {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validateInfo(values);
    setErrors(errors);
    let errorAvailable = false;
    let errorKeys = Object.keys(values)
    for (let i = 0; i < errorKeys.length; i++) {
      if (errors[errorKeys[i]]) errorAvailable = true
    }
    if (!errorAvailable) setValues({ email: "", password: "" });
  };
  return (
    <div className="flex flex-col w-auto sm:flex-row h-screen">
      <div className="flex-1 flex-auto sm:w-5/12 flex flex-col bg-blue-500 bg-cover px-4 md:px-12 py-8">
        <h1 className="6xl mt-12 mb-6 sm:mb-0 text-white font-bold">SME Better</h1>
        <form className="my-auto text-white" onSubmit={handleSubmit}>
          <p className="font-medium">Log into your Business Manager</p>
          <div className="my-6">
            <label className="text-white mb-3 text-sm" htmlFor="email">Email Address</label>
            <input className="w-full px-4 py-2 border border-solid border-blue-600 text-gray-700 bg-white-800 rounded-sm" placeholder="someone@gmail.com" type="email" name="email" id="email" value={email} onChange={handleChange} />
            {errors.email && <p className="text-red-300 mx-2 italic text-sm">{errors.email}</p>}
          </div>
          <div className="my-6">
            <label className="text-white mb-3 text-sm" htmlFor="password">Enter Your Password</label>
            <input className="w-full px-4 py-2 text-gray-700 bg-white-800 rounded" placeholder="password" type="password" name="password" id="password" value={password} onChange={handleChange} />
            {errors.password && <p className="text-red-300 mx-2 italic text-sm">{errors.password}</p>}
          </div>
          <div className="mt-4">
            <button type="submit" className="w-full px-4 py-2 border border-solid border-white text-white bg-blue-500 font-bold rounded-sm">SIGN IN</button>
          </div>

          <div className="mt-4 flex justify-center">
            <span className="text-white opacity-50">Don't have an account?</span>
            <a className=" ml-2 text-white font-bold" href="#">Sign Up</a>
          </div>
          <div className="mt-4">
            <p className="font-bold">Forgot password?</p>
            <a className="w-full flex justify-center block mt-2 text-center px-4 py-2 border border-solid text-black-200 border-white bg-white rounded-sm opacity-96 text-sm" href="https://accounts.google.com/"><img className="object-scale-down h-5 w-5 my-auto mr-3" src={GoogleIcon}/>Log in with Google</a>
          </div>
        </form>
      </div>
      <div className="flex-1 flex flex-auto sm:w-7/12 bg-white items-center justify-center flex-col">
        <p className="text-blue-500 mt-5">Organize your customer information</p>
        <div className="flex flex-col">
          <img className="w-80 mt-12" src={CompanyIcon} alt="companyicon"/>
        </div>
        <div className="flex flex-col mt-12">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
