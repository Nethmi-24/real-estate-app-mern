import {Link} from 'react-router-dom'
export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold p-3"> Signup</h1>
      <form className="flex flex-col gap-4"> {/*flex-col:To add elements on form on top of each other*/}
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-90">
          Sign Up
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an Account?</p>
        <Link to={'/sign-in'}></Link>
        <span className='text-blue-800'>Sign in</span>
      </div>
    </div>
  );
}
