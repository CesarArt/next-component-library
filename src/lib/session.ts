import { cookies } from "next/headers"

//Set Session cookie
export const setSession = async (token: string) => {
    (await cookies()).set("session", JSON.stringify(token), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    });
}
//Get Session cookie
export const getSession = async () => {
    const session = (await cookies()).get("session")?.value
    if(!session) return null
    const user = JSON.parse(session)
    return user 
}
//Delete Session cookie
export const deleteSession = async () => {
    const cookieStore = await cookies()
    cookieStore.delete("session")
}
