'use server'
import { deleteSession, setSession } from "@/lib/session";
import { responseApi } from "@/utils/types/common";
import { loginUserReq, loginUserRes, registerUserReq, registerUserRes } from "@/utils/types/user";
import { redirect } from "next/navigation";

export const registerUser = async (userData:registerUserReq) => {
  try {
    const response = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });
    const data :registerUserRes= await response.json();
    return data
  } catch (err) {
    console.error("Error register user:", err);
    return null
  }
};
export const logIn = async (userData:loginUserReq) => {
  try {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });
    const resData = await response.json()
    if(response.status === 200){
      await setSession(resData?.token ?? "")
    }
    const data: responseApi<loginUserRes> ={
      message: resData.message ?? response.statusText,
      status: response.status,
      data: response.status === 200 ? resData : ""
    }
    return data
  } catch (err) {
    console.error("Error Login user:", err);
    return null
  }
};

export const logOutAction = async () => {
    await deleteSession()
    redirect("/login")
};
