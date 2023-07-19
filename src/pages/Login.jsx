import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { CarouselUI } from "components";
import { ToastContainer } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import { ToastMsg } from "Toast/Toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setAdminStatus,
  setLoginStatus,
  setUserEmail,
} from "Redux/Auth/AuthSlice";

const slideImages = [
  "https://cdn.discordapp.com/attachments/1123144974683361401/1123930018435825764/dinner-table-with-fried-meat-dishes-sauces.jpg",
  "https://cdn.discordapp.com/attachments/1123144974683361401/1123929976316629062/closeup-shot-indian-tasty-food-called-marwari-veg-thali-wooden-table.jpg",
  "https://cdn.discordapp.com/attachments/1123144974683361401/1123929927104872569/restaurant-interior.jpg",
  "https://cdn.discordapp.com/attachments/1123144974683361401/1123929908192739348/chicken-pork-beef-meat-skewers-with-vegetables-spicy-potatoes.jpg",
];

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  //navigating to home page
  const navigate = useNavigate();

  // handle login submit
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3030/signin",
        loginForm
      );
      const { error, success } = response.data;

      if (
        loginForm.email === process.env.REACT_APP_ADMIN_EMAIL &&
        loginForm.password === process.env.REACT_APP_ADMIN_PASSWORD
        ) {
          // Set admin status in redux
          dispatch(setAdminStatus(true));

        // storing admin statu in localstorage
          localStorage.setItem("isAdmin", "true");
      }

      if (success) {
        ToastMsg(success, "success");
        // Setting login status, show account menu and email in redux
        dispatch(setLoginStatus(true));
        dispatch(setUserEmail(loginForm.email));

        // Storing login status and user email in localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", loginForm.email);

        setLoginForm({ email: "", password: "" });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        ToastMsg(error, "error");
      }
    } catch (err) {
      const message = err.message;
      ToastMsg(message, "error");
    }
    setLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full lg:w-[95%] mx-auto h-fit flex mt-36 font-primary">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-5 h-[500px] shadow-lg shadow-gray-600">
          <div className="w-full h-[500px] hidden md:block">
            <CarouselUI
              slideImages={slideImages}
              width="640"
              height="500"
              indicator={false}
              status={false}
              arrows={false}
            />
          </div>
          <div className="flex flex-col gap-4 px-5 lg:px-0">
            <form onSubmit={loginSubmitHandler}>
              <h2 className="text-4xl font-bold w-fit my-6 text-black">
                Login in to your account !
              </h2>
              <div className="flex flex-col gap-y-5">
                <TextField
                  className="w-full lg:w-[475px]"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                  }}
                  required
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                />
                <TextField
                  type="Password"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                  }}
                  className="w-full lg:w-[475px]"
                  required
                  label="Password"
                  variant="outlined"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center lg:w-[475px] py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all"
              >
                {loading ? <RotatingLines width="25" /> : <> Login</>}
              </button>
              <p className="w-fit font-bold mx-[230px]">Or</p>
              <button className="flex items-center justify-center gap-5 w-full lg:w-[475px] py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all">
                <BsFacebook size={25} />
                <p>Login with Facebook</p>
              </button>

              <button className="flex items-center justify-center gap-5 w-full  lg:w-[475px] py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all">
                <FcGoogle size={25} />
                <p>Login with Google</p>
              </button>
            </form>
            <p className="text-center">Forgot password?</p>
            <div className="text-center font-bold underline hover:text-primary-700 transition-all">
              <Link to={"/register"}>
                Don't have an account? Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
