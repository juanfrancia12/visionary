import { Albumns } from "@interfaces/albumns.interface"
import { getAlbumns } from "@services/albumns.service"
import classNames from "classnames"
import { useState } from "react"
import { useQuery } from "react-query"

const TableAlbumns = (): JSX.Element => {
  const { data, error, isLoading } = useQuery(["getAlbumns"], getAlbumns)
  const [currentPage, setCurrentPage] = useState(0)
  const [textSearch, setTextSearch] = useState("")

  if (isLoading) return <div>CARGANDO ...</div>
  if (!isLoading && Boolean(error)) return <div>ERROR ...</div>
  if (!isLoading && data == null) return <div>NO hay datos ...</div>

  const NUM_DATA_VIEW = 4

  const filteredFactOrden = (): Albumns[] => {
    if (textSearch === "")
      return data.slice(currentPage, currentPage + NUM_DATA_VIEW)

    const filtered = data.filter(
      (albumn) =>
        albumn.TITLE.toLowerCase().includes(textSearch.toLowerCase()) ||
        albumn.PHOTO_TITLE.toLowerCase().includes(textSearch.toLowerCase()) ||
        albumn.USER_NAME.toLowerCase().includes(textSearch.toLowerCase())
    )
    return filtered.slice(currentPage, currentPage + NUM_DATA_VIEW)
  }

  const nextPage = (): void => {
    if (
      data.filter(
        (albumn) =>
          albumn.TITLE.toLowerCase().includes(textSearch.toLowerCase()) ||
          albumn.PHOTO_TITLE.toLowerCase().includes(textSearch.toLowerCase()) ||
          albumn.USER_NAME.toLowerCase().includes(textSearch.toLowerCase())
      ).length >
      currentPage + NUM_DATA_VIEW
    )
      setCurrentPage(currentPage + NUM_DATA_VIEW)
  }

  const previusPage = (): void => {
    if (currentPage > 0) setCurrentPage(currentPage - NUM_DATA_VIEW)
  }

  const onsearchChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentPage(0)
    setTextSearch(target.value)
  }

  const TOTAL = `${
    data.length === 0 ? filteredFactOrden().length : currentPage + NUM_DATA_VIEW
  }/${data.length}`
  // const TOTAL = `${currentPage + NUM_DATA_VIEW}/${data.length}`

  return (
    <div className="p-4 flex flex-col gap-6">
      <h3 className="text-2xl font-bold">ALBUMNS</h3>
      <div className="flex justify-between gap-4">
        <span className="text-lg font-semibold">{`Total: ${TOTAL}`}</span>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Escribe para buscar ..."
          className="min-w-[20rem] rounded-md py-1.5 px-3 border border-gray-200 focus:border-gray-300"
          autoComplete="off"
          value={textSearch}
          onChange={onsearchChange}
        />
      </div>
      <table className="table-auto m-auto rounded-md overflow-hidden">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="px-2 py-4 text-center">Titulo</th>
            <th className="px-2 py-4 text-center">TituloFoto</th>
            <th className="px-2 py-4 text-center">URL</th>
            <th className="px-2 py-4 text-center">ThumbnailURL</th>
            <th className="px-2 py-4 text-center">NombreUsuario</th>
            <th className="px-2 py-4 text-center">FechaActualizacion</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {filteredFactOrden().length === 0 && (
            <tr className="border border-gray-200/50">
              <td colSpan={6} className="p-2">
                No existen registros
              </td>
            </tr>
          )}
          {filteredFactOrden()?.map((albumn: Albumns) => {
            return (
              <tr
                key={albumn.ID}
                className="border border-gray-200/50 hover:bg-gray-200/50"
              >
                <td className="p-2 text-center">{albumn.TITLE}</td>
                <td className="p-2 text-center">{albumn.PHOTO_TITLE}</td>
                <td className="p-2 text-center">
                  <img
                    src={albumn.URL}
                    alt=""
                    className="w-20 rounded m-auto"
                  />
                </td>
                <td className="p-2 text-center">
                  <img
                    src={albumn.THUMBNAIL_URL}
                    alt=""
                    className="w-20 rounded m-auto"
                  />
                </td>
                <td className="p-2 text-center">{albumn.USER_NAME}</td>
                <td className="p-2 text-center">{albumn.DATE_UPDATE}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex justify-end gap-4">
        <button
          onClick={previusPage}
          className={classNames(
            {
              "bg-gray-300 text-gray-400": data.length === 0,
            },
            "px-4 py-3 rounded-md min-w-[7rem] bg-red-400 text-white"
          )}
          disabled={data.length === 0}
        >
          PREVIUS
        </button>
        <button
          onClick={nextPage}
          className={classNames(
            {
              "bg-gray-300 text-gray-400": data.length === 0,
            },
            "px-4 py-3 rounded-md min-w-[7rem] bg-blue-400 text-white"
          )}
          disabled={data.length === 0}
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default TableAlbumns
