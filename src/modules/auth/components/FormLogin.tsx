// import { LoginService } from "@services/auth.service"
import { useState } from "react"
// import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const FormLogin = (): JSX.Element => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): unknown => {
    e.preventDefault()

    if (email === "" || password === "")
      return toast.error("Ingrese sus datos ...")

    // const ver = await LoginService(email, password)

    // navigate("/")
  }

  return (
    <form
      className="w-full md:w-3/6 p-14 flex flex-col gap-8"
      onSubmit={(e) => handleSubmit(e)}
    >
      <span className="text-3xl font-semibold text-blue-800/80">
        Iniciar sesión
      </span>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Ingrese su e-mail"
          className="input"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          className="input"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <label htmlFor="remember" className="cursor-pointer">
        <input type="checkbox" name="remember" id="remember" />
        <span className="ml-2">Recordar contraseña</span>
      </label>
      <button type="submit" className="button font-semibold">
        INGRESAR
      </button>
      <span className="w-max m-auto text-blue-800/80 cursor-pointer">
        Olvidé mi contraseña
      </span>
    </form>
  )
}

export default FormLogin
