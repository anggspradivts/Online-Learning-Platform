import { login, signup, signInWithGoogle } from "./action";


export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-5">
        <h1 className="text-4xl font-bold">SignUp</h1>
      </div>
      <form className="">
        <div>
          <div>Email:</div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            className="border-2 border-gray-400 h-10 rounded-md lg:w-[500px] p-2"
            required
          />
        </div>
        <div>
          <div>Password:</div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="*******"
            className="border-2 border-gray-400 h-10 rounded-md lg:w-[500px] p-2"
            required
          />
        </div>
        <div className="my-5">
          <div className="flex justify-center">
            <button
              className="bg-gray-200 mr-4 w-[300px] h-[40px] rounded-md my-3"
              formAction={login}
            >
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gray-200 mr-4 w-[300px] h-[40px] rounded-md my-3"
              formAction={signup}
            >
              SignUp
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gray-200 mr-4 w-[300px] h-[40px] rounded-md my-3"
              formAction={signInWithGoogle}
            >
              Login With Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
