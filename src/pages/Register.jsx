import { ToastMsg } from "Toast/Toast";
import axios from "axios";
import { InputTextField } from "components";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { ToastContainer } from 'react-toastify'

const Register = () => {
  // usestate
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPass: "",
    address: "",
  });
  const [loading, setLoading] =useState(false)

  // navigating to login page
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post(
        "http://localhost:3030/createUser",
        userForm
      );
      const { message, error } = response.data;
      if (message) {
        ToastMsg(message, "success");
        setUserForm({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPass: "",
          address: "",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        ToastMsg(error, "error");
      }
    } catch (err) {
      ToastMsg(err.message, 'error')
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full mt-36 font-primary">
        <div className="w-full lg:w-[50%] mx-auto bg-slate-50 shadow-lg rounded-md px-4 py-1">
          <p className="font-bold text-4xl my-10">Signup Here !!</p>
          <form onSubmit={handleSubmitForm}>
            <div className="w-full flex flex-wrap lg:flex-nowrap  gap-5">
              <InputTextField
                type={"text"}
                name={"Name"}
                value={userForm.name}
                changeValue={(e) =>
                  setUserForm({ ...userForm, name: e.target.value })
                }
              />
              <InputTextField
                type={"number"}
                name={"Phone"}
                value={userForm.phone}
                changeValue={(e) =>
                  setUserForm({ ...userForm, phone: e.target.value })
                }
              />
              <InputTextField
                type={"email"}
                name={"Email"}
                value={userForm.email}
                changeValue={(e) =>
                  setUserForm({ ...userForm, email: e.target.value })
                }
              />
            </div>
            <div className="w-full flex flex-wrap lg:flex-nowrap gap-5 my-5">
              <InputTextField
                type={"password"}
                name={"Password"}
                value={userForm.password}
                changeValue={(e) =>
                  setUserForm({ ...userForm, password: e.target.value })
                }
              />

              <InputTextField
                type={"password"}
                name={"Confirm Password"}
                value={userForm.confirmPass}
                changeValue={(e) =>
                  setUserForm({ ...userForm, confirmPass: e.target.value })
                }
              />
              <InputTextField
                type={"text"}
                name={"Address"}
                value={userForm.address}
                changeValue={(e) =>
                  setUserForm({ ...userForm, address: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center font-bold py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all"
            >
              {loading ? <RotatingLines width="25" /> : <> Sign Up</>}
            </button>
          </form>
          <p className="w-fit mx-auto my-4">Or</p>

          <button className="flex items-center justify-center gap-5 w-full py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all">
            <BsFacebook size={25} />
            <p>Signup with Facebook</p>
          </button>

          <button className="flex items-center justify-center gap-5 w-full py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all">
            <FcGoogle size={25} />
            <p>Signup with Google</p>
          </button>

          <p className="w-fit mx-auto text-2xl font-bold py-5">
            Already have an account ? <Link to={"/login"}>Sign In</Link>{" "}
          </p>
        </div>
      </div>
    </>

  );
};

export default Register;
