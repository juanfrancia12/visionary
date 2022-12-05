import { URL_API_PUBLIC } from "@constants/global.constant"
import { Albumns } from "@interfaces/albumns.interface"
import axios from "axios"

export const getAlbumns = async (): Promise<Albumns[]> => {
  const { data } = await axios.get(`${URL_API_PUBLIC as string}/albumns`)

  return data
}
