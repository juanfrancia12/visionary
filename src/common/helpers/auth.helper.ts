// export const getToken = "token" || false
export const getToken = window.localStorage.getItem("visionaryAPP") || false
export const setToken = (token: string) =>
  localStorage.setItem("visionaryAPP", token)
export const removeToken = () => localStorage.removeItem("visionaryAPP")
