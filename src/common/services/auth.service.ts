// import { URL_API_AUTH } from "@constants/global.constant" // token
import axios from "axios"

// const headers = {
//   Authorization: `Bearer ${token as string}`,
//   // "My-Custom-Header": "foobar",
// }

export const LoginService = async (
  email: string,
  password: string
): Promise<unknown> => {
  const user = { email, password }
  const data = await axios.post(
    `http://localhost:5000/auth/signin`,
    user
    // JSON.stringify({ user })
  )

  return data
}
