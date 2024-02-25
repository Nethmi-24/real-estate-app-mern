import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value, //whatever changes, take it value and set to respective id
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault(); //prevent refreshin page
    try {
      setLoading(true);
      const res = await fetch(
        "/api/auth/signup",
        //now use {} to send an object
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold p-3"> Signup</h1>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        {" "}
        {/*flex-col:To add elements on form on top of each other*/}
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 
        text-white p-3 rounded-lg hover:opacity-90"
        >
          {loading ? "loading.." : "signup"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an Account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-800">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-300 mt-3">{error.message}</p>}
     </div>
  );
}
