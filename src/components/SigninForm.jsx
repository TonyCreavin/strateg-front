import img from '../assets/register.png';
import { Link } from 'react-router-dom';

export default function SigninForm() {
  return (
    <div className="bg-[#FFFFFF] h-[100vh] flex ">
      <div className=" container m-auto h-[70vh] items-center bg-[#FFFFFF] rounded-sm shadow-sm ">
        <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
          <div className=" h-full p-2 w-full ">
            <div className="bg-[#F6F6F6] rounded-sm text-center items-center">
              <img className=" rounded-md h-full" src={img} alt="login icon" />
            </div>
          </div>
          <div className="h-[60vh]">
            <div className="text-center text-3xl mb-4">
              <h1 className="font-marker ">Sign in</h1>
            </div>
            <div>
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••"
                    required
                  />
                </div>
                <div className="flex-auto lg:space-x-10">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3 "
                  >
                    Submit
                  </button>
                </div>
                <div className="text-center text-3xl mb-4">
                  <h1 className="font-marker my-6 text-xl">
                    Not registered yet ? Sign up !
                  </h1>
                </div>

                <div>
                  <Link to={'/signup'}>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                      Register
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
