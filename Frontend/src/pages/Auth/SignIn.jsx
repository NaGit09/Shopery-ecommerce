import { React, useState } from "react";
import Subcribe from "../../components/MultiComponent/Web/Subcribe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAuthStore } from "../../stores/useAuthStore";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { login, isLoggingIn } = useAuthStore();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    setFormData({ email: "", password: "" });
  };
  return (
    <div className="absolute_center flex-col space-y-10">
      <div className="w-[520px] mt-10 flex min-h-full flex-1 flex-col justify-center lg:px-8 text-gray-600 rounded-xl max-w-lg">
        <div className="shadow sm:mx-auto sm:w-full sm:max-w-sm px-6 py-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-center text-3xl/9 font-bold tracking-tight mb-4 text-gray-900">
              Sign in
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 mt-2 "
          >
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  // handle input value change
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  // handle input value change
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div className="">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="bg-white mr-3"
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div>
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoggingIn}
                className="mt-4 flex w-full justify-center rounded-full bg-Primary px-3 py-1.5 text-sm/6 
                font-semibold text-white shadow-xs hover:bg-Hard-Primary "
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 ">
            Don’t have account?
            <a
              href="#"
              className="ml-2 font-semibold text-gray-900 hover:text-indigo-500"
            >
              Register
            </a>
          </p>
        </div>
      </div>
      <Subcribe />
    </div>
  );
};

export default SignIn;
