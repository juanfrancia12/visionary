export const getToken = "token"
// export const getToken = localStorage.getItem("visionaryAPP")
export const setToken = (token: string): void =>
  localStorage.setItem("visionaryAPP", token)
export const removeToken = (): void => localStorage.removeItem("visionaryAPP")
