import { useState } from "react"
import { toast } from "react-toastify"

const FormRegister = (): JSX.Element => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): unknown => {
    e.preventDefault()

    if (email === "" || password === "")
      return toast.error("Ingrese sus datos ...")
  }

  return (
    <form
      className="w-full md:w-3/6 p-14 flex flex-col gap-8"
      onSubmit={(e) => handleSubmit(e)}
    >
      <span className="text-3xl font-semibold text-blue-800/80">
        Registrarme
      </span>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Ingrese su nombre"
          className="input"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese sus apellidos"
          className="input"
          autoComplete="off"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese su e-mail"
          className="input"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          className="input"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <label htmlFor="accept" className="cursor-pointer">
        <input type="checkbox" name="accept" id="accept" />
        <span className="ml-2 text-blue-800/80 underline">
          Acepto los términos y condiciones
        </span>
      </label>
      <button type="submit" className="button font-semibold">
        REGISTRARME
      </button>
      <span className="w-max m-auto text-blue-800/80 cursor-pointer">
        Olvidé mi contraseña
      </span>
    </form>
  )
}

export default FormRegister
