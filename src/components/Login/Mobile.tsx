"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiError } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

export default function Mobile() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const divInputClass =
    "w-[300px] bg-white h-[50px] mt-[10px] rounded-[5px] mb-[30px]";
  const errorsClass =
    "absolute text-red-600 bg-red-100 text-[13px] rounded-[3px] transform translate-y-[7px] px-[4px] flex items-center";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.error("Login failed.");
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white overflow-hidden h-[calc(100vh-50px)]">
      <div className="bg-[rgb(38,46,85)] h-[90px] flex justify-center items-center">
        <p className="text-[30px] font-bold text-white">Login</p>
      </div>

      <div className="flex items-center flex-col bg-[rgb(83,96,159)] h-full">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className={divInputClass + ' mt-[40px]'}>
            <label className="text-black text-[16px] ml-[5px] font-bold">
              Email
            </label>
            <input
              type="text"
              value={email}
              placeholder="JohnSmith1778@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="text-black w-full focus:outline-none box-border px-[5px] text-[15px]"
              required
            />
          </div>

          <div className={divInputClass}>
            <label className="text-black text-[16px] ml-[5px] font-bold">
              Password
            </label>
            <input
              type="password"
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              className="text-black w-full focus:outline-none box-border px-[5px] text-[15px]"
              required
            />
          </div>

          <button
            type="submit"
            className="h-[45px] w-[300px] text-white bg-[rgb(38,46,85)] rounded-[5px] my-[10px] text-[16px]"
          >
            LOGIN
          </button>
        </form>

        <button className="w-[300px] h-[45px] flex bg-white items-center justify-center text-[16px] rounded-[5px] my-[10px]">
          <FcGoogle className="mr-[15px] text-[25px]" />
          LOGIN WITH GOOGLE
        </button>

        <button className="w-[300px] h-[45px] flex bg-black text-white items-center justify-center text-[16px] rounded-[5px] my-[10px]">
          <IoLogoApple className="mr-[15px] text-[25px]" />
          LOGIN WITH APPLE
        </button>
      </div>
    </div>
  );
}
