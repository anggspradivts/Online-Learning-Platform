import { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, getUser } from "@/app/utils/utils";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userEmail = await getUser()
      setUser(userEmail);
    }
    fetchUser()
  }, [])

  return (
    <div className="bg-gray-400 p-3 text-white">
      <div className="nav-container grid grid-cols-2">
        <div className="logo flex items-center gap-7">
          <Link href="/">
            <h1 className=" text-2xl font-bold text-white">Online Learning</h1>
          </Link>
          <Link href="/create/course">
            <h1 className="font-bold text-white">Teach</h1>
          </Link>
          <Link href="/my-courses">
            <h1 className="font-bold text-white">My Learning</h1>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <input
            className="rounded-2xl p-2"
            type="search"
            name=""
            id=""
            placeholder="search courses..."
          />
        </div>
      </div>
      <div className="">
        {user === null ? (
          <div className="flex gap-5 items-center">
            <button>
              <Link href="/login">Login</Link>
            </button>
            <button>SignUp</button>
            <div>Categories</div>
            <button onClick={() => (window.location.href = "private")}>
              Go to Private Page
            </button>
          </div>
        ) : (
          <div className="flex gap-5 items-center">
            <h1>welcome {user}</h1>
            <button
              className="bg-gray-500 p-1 rounded-xl"
              onClick={signOut}
            >
              SignOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
