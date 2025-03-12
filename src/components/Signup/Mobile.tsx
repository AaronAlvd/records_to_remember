"use client";

import { useState, useEffect } from "react";
import { BiError } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

export default function Mobile() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string | null>>({
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    dob: null,
    phone: null,
    password: null,
    confirmPassword: null,
  });

  const divInputClass =
    "w-[300px] bg-white h-[50px] mt-[10px] rounded-[5px] mb-[30px]";
  const errorsClass =
    "absolute text-red-600 bg-red-100 text-[13px] rounded-[3px] transform translate-y-[7px] px-[4px] flex items-center";

  const containsNumbers = (str: string): boolean => /\d/.test(str);

  const verify = (): boolean => {
    const obj: Record<string, string | null> = {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      dob: null,
      phone: null,
      password: null,
      confirmPassword: null,
    };

    let retBoolean = true;
    const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;

    if (containsNumbers(firstName)) {
      obj.firstName = "Cannot contain numbers.";
      retBoolean = false;
    } else if (firstName.length < 3) {
      obj.firstName = "Must contain at least 3 letters.";
      retBoolean = false;
    } else if (firstName.length > 64) {
      obj.firstName = "Cannot exceed 64 letters.";
      retBoolean = false;
    }

    if (containsNumbers(lastName)) {
      obj.lastName = "Cannot contain numbers.";
      retBoolean = false;
    } else if (lastName.length < 3) {
      obj.lastName = "Must contain at least 3 letters.";
      retBoolean = false;
    } else if (lastName.length > 64) {
      obj.lastName = "Cannot exceed 64 letters.";
      retBoolean = false;
    }

    if (username.length > 64) {
      obj.username = "Cannot exceed 64 characters.";
      retBoolean = false;
    } else if (username.length < 4) {
      obj.username = "Must contain at least 4 characters.";
      retBoolean = false;
    } else if (!/^[A-Za-z]/.test(username)) {
      obj.username = "Username must start with a letter.";
      retBoolean = false;
    } else if (!/^[0-9a-zA-Z_]+$/.test(username)) {
      obj.username = "Username can only contain letters, numbers, or underscores.";
      retBoolean = false;
    }

    if (email.length > 320) {
      obj.email = "Cannot exceed 320 characters.";
      retBoolean = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      obj.email = "Invalid email format.";
      retBoolean = false;
    }

    if (!dobRegex.test(dob)) {
      obj.dob = "Invalid date format. Use MM/DD/YYYY.";
      retBoolean = false;
    } else {
      const [month, day, year] = dob.split("/").map((num) => parseInt(num, 10));
      const dateObj = new Date(year, month - 1, day);
      const today = new Date();

      if (isNaN(dateObj.getTime()) || dateObj.getMonth() + 1 !== month || dateObj.getDate() !== day) {
        obj.dob = "Invalid date.";
        retBoolean = false;
      } else if (dateObj > today) {
        obj.dob = "Date of birth cannot be in the future.";
        retBoolean = false;
      }
    }

    if (password.length > 64) {
      obj.password = "Cannot exceed 64 characters.";
      retBoolean = false;
    }

    if (confirmPassword.length > 64) {
      obj.confirmPassword = "Cannot exceed 64 characters.";
      retBoolean = false;
    }

    if (password !== confirmPassword) {
      obj.password = "Passwords do not match.";
      obj.confirmPassword = "Passwords do not match.";
      retBoolean = false;
    }

    setErrors(obj);
    return retBoolean;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const proceed = verify();
    if (!proceed) return;

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          dob,
          phone,
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.error && Array.isArray(data.error)) {
          alert(
            data.error
              .map((errObj: Record<string, string>) => {
                const key = Object.keys(errObj)[0];
                return `${key}: ${errObj[key]}`;
              })
              .join("\n")
          );
        } else {
          alert(data.error || "Error creating account");
        }
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };
  return (
    <div className="bg-white overflow-scroll h-[calc(100vh-50px)]">
      <div className="bg-[rgb(38,46,85)] w-[100vw] h-[90px] flex justify-center items-center">
        <p className="text-[30px] font-bold text-white">Sign Up</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[100vw] flex items-center flex-col bg-[rgb(83,96,159)] pb-[50px]"
      >
        <div className={divInputClass + ' mt-[30px]'}>
          <label className="text-black text-[16px] ml-[5px] font-bold">First Name</label>
          <input
            type="text"
            value={firstName}
            placeholder="John"
            onChange={(e) => setFirstName(e.target.value)}
            className="text-black w-[100%] focus:outline-none box-border px-[5px] text-[15px]"
          />
          {errors.firstName && (
            <p className={errorsClass}>
              {errors.firstName}
              <BiError className="ml-[5px]" />
            </p>
          )}
        </div>

        <div className={divInputClass}>
          <label className="text-black text-[16px] ml-[5px] font-bold">Last Name</label>
          <input
            type="text"
            value={lastName}
            placeholder="Smith"
            onChange={(e) => setLastName(e.target.value)}
            className="text-black w-[100%] focus:outline-none box-border px-[5px] text-[15px]"
          />
          {errors.lastName && (
            <p className={errorsClass}>
              {errors.lastName}
              <BiError className="ml-[5px]" />
            </p>
          )}
        </div>

        <div className={divInputClass}>
          <label className="text-black text-[16px] ml-[5px] font-bold">Username</label>
          <input
            type="text"
            value={username}
            placeholder="JohnSmith1778"
            onChange={(e) => setUsername(e.target.value)}
            className="text-black w-[100%] focus:outline-none box-border px-[5px] text-[15px]"
          />
          {errors.username && (
            <p className={errorsClass}>
              {errors.username}
              <BiError className="ml-[5px]" />
            </p>
          )}
        </div>

        <div className={divInputClass}>
          <label className="text-black text-[16px] ml-[5px] font-bold">Email</label>
          <input
            type="text"
            value={email}
            placeholder="JohnSmith1778@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="text-black w-[100%] focus:outline-none box-border px-[5px] text-[15px]"
          />
          {errors.email && (
            <p className={errorsClass}>
              {errors.email}
              <BiError className="ml-[5px]" />
            </p>
          )}
        </div>

        <div className={divInputClass}>
          <label className="text-black text-[16px] ml-[5px] font-bold">Date of Birth</label>
          <input
            type="text"
            value={dob}
            placeholder="01/29/2000"
            onChange={(e) => setDob(e.target.value)}
            className="text-black w-[100%] focus:outline-none box-border px-[5px] text-[15px]"
          />
          {errors.dob && (
            <p className={errorsClass}>
              {errors.dob}
              <BiError className="ml-[5px]" />
            </p>
          )}
        </div>

        <div className={divInputClass}>
          <label className="text-black text-[16px] ml-[5px] font-bold">Phone</label>
          <input
            type="text"
            value={phone}
            placeholder="123 456 7890"
            onChange={(e) => setPhone(e.target.value)}
            className="text-black w-[100%] focus:outline-none box-border px-[5px] text-[15px]"
          />
          {errors.phone && (
            <p className={errorsClass}>
              {errors.phone}
              <BiError className="ml-[5px]" />
            </p>
          )}
        </div>

        <div className={divInputClass}>
          <label className="text-black text-[16px] ml-[5px] font-bold">Password</label>
          <input
            type="password"
            value={password}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            className="text-black w-[100%] focus:outline-none box-border px-[5px] text-[15px]"
          />
          {errors.password && (
            <p className={errorsClass}>
              {errors.password}
              <BiError className="ml-[5px]" />
            </p>
          )}
        </div>

        <div className={divInputClass}>
          <label className="text-black text-[16px] ml-[5px] font-bold">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="********"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="text-black w-[100%] focus:outline-none box-border px-[5px] text-[15px]"
          />
          {errors.confirmPassword && (
            <p className={errorsClass}>
              {errors.confirmPassword}
              <BiError className="ml-[5px]" />
            </p>
          )}
        </div>

        <button
          type="submit"
          className="h-[45px] w-[300px] text-white bg-[rgb(38,46,85)] rounded-[5px] my-[10px] text-[16px]"
        >
          SIGN UP
        </button>

        <button className="w-[300px] h-[45px] flex bg-white items-center justify-center text-[16px] rounded-[5px] my-[10px]">
          <FcGoogle className="mr-[15px] text-[25px]" />
          CONTINUE WITH GOOGLE
        </button>

        <button className="w-[300px] h-[45px] flex bg-black text-white items-center justify-center text-[16px] rounded-[5px] my-[10px]">
          <IoLogoApple className="mr-[15px] text-[25px]" />
          CONTINUE WITH APPLE
        </button>
      </form>
    </div>
  );
};