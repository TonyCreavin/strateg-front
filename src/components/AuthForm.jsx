import img from '../assets/register.png';
import { Form, Link, useSearchParams } from 'react-router-dom';

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'signin';

  return (
    <div className="bg-[#FFFFFF] h-[100vh] p-4">
      <div className=" container m-auto h-[70vh]  items-center bg-[#FFFFFF] rounded-sm shadow-sm ">
        <div className="flex flex-col-reverse gap-2  mx-2 md:flex-row md:mx-0">
          <div className=" h-[80vh] p-2 flex-1">
            <div className="bg-[#F6F6F6] rounded-sm text-center items-center">
              <img className="w-full rounded-md" src={img} alt="login icon" />
            </div>
          </div>
          <div className="h-[80vh] flex-1">
            <div className="text-center text-3xl mb-2">
              <h1 className="font-marker ">
                {isLogin ? 'Sign in' : 'Create an account'}
              </h1>
            </div>
            <div>
              <Form method="post">
                {!isLogin && (
                  <div className="relative z-0 mb-6 w-full mt-5">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John Doe"
                      required={isLogin}
                    />
                  </div>
                )}

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
                    name="email"
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
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••"
                    required
                  />
                </div>
                {isLogin ? (
                  ''
                ) : (
                  <div className="mb-6">
                    <label
                      htmlFor="passwordConfirm"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="passwordConfirm"
                      name="passwordConfirm"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="•••••••••"
                      required
                    />
                  </div>
                )}
                <div className="flex-auto lg:space-x-10">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3 "
                  >
                    Submit
                  </button>
                </div>
                {isLogin ? (
                  <div className="text-center text-3xl mb-4">
                    <h1 className="font-marker my-6 text-xl">
                      Not registered yet ? Sign up !
                    </h1>
                  </div>
                ) : (
                  <div className="text-center text-3xl mb-4">
                    <h1 className="font-marker my-6 text-xl">
                      OOps! Already registered ?
                    </h1>
                  </div>
                )}

                <div>
                  <Link to={`?mode=${isLogin ? 'signup' : 'signin'}`}>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                      {isLogin ? 'Register ' : 'Sign in'}
                    </button>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
