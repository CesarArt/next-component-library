import { responseApi } from "@/utils/types/common";
import { loginUserReq, loginUserRes, registerUserReq, registerUserRes } from "@/utils/types/user";
import { redirect } from "next/navigation";

export const registerUser = async (userData: registerUserReq) => {
  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });
    const data: registerUserRes = await response.json();
    return data
  } catch (err) {
    console.error("Error register user:", err);
    return null
  }
};
export const logIn = async (userData:loginUserReq) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
       credentials: "include"
    });
    const resData = await response.json()
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
  await fetch("/api/auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  // redirect("/")
  window.location.href = "/";
};
