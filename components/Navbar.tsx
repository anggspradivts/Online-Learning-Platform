import { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, getUser } from "@/app/utils/utils";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const [user, setUser] = useState<string | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      const userEmail = await getUser();
      console.log("useremail from navbar", userEmail);
      setUser(userEmail);
    };
    fetchUser();
  }, []);

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
      <div className="py-2">
        {user === null ? (
          <div className="flex gap-5 items-center">
            <button>
              <Link href="/login">Login</Link>
            </button>
            <div>Categories</div>
          </div>
        ) : (
          <div className="">
            <div
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="h-[40px] w-[40px] bg-gray-600 flex justify-center items-center rounded-full"
            >
              <h1>{user.charAt(0)}</h1>
            </div>
            {isHover && (
              <UserProfile
                user={user}
                signOut={signOut}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
