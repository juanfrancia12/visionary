import { URL_API_PUBLIC } from "@constants/global.constant"
import { FactOrden } from "@interfaces/fact_orden.interface"
import axios from "axios"

export const getFactOrden = async (): Promise<FactOrden[]> => {
  const { data } = await axios.get(`${URL_API_PUBLIC as string}/factorden`)

  return data
}
