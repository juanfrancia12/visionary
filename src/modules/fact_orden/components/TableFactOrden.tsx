import { FactOrden } from "@interfaces/fact_orden.interface"
import { getFactOrden } from "@services/fact_orden.service"
import { useQuery } from "react-query"

const TableFactOrden = (): JSX.Element => {
  const { data, error, isLoading } = useQuery(["getFactOrden"], getFactOrden)

  if (isLoading) return <div>CARGANDO ...</div>
  if (!isLoading && Boolean(error)) return <div>ERROR ...</div>

  return (
    <div className="p-4">
      <table className="table-auto m-auto rounded-md overflow-hidden">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="px-2 py-4 text-center">IdOrden</th>
            <th className="px-2 py-4 text-center">NombreEmpleado</th>
            <th className="px-2 py-4 text-center">NombreProducto</th>
            <th className="px-2 py-4 text-center">FechaOrden</th>
            <th className="px-2 py-4 text-center">PrecioUnidad</th>
            <th className="px-2 py-4 text-center">Cantidad</th>
            <th className="px-2 py-4 text-center">Descuento</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data?.map((fact: FactOrden) => {
            return (
              <tr
                key={fact.ID}
                className="border border-gray-200/50 hover:bg-gray-200/50"
              >
                <td className="p-2 text-center">{fact.CLAVEALTERNAORDEN}</td>
                <td className="p-2 text-center">{fact.NOMBREEMPLEADO}</td>
                <td className="p-2 text-center">{fact.NOMBREPRODUCTO}</td>
                <td className="p-2 text-center">{fact.CLAVEFECHAORDEN}</td>
                <td className="p-2 text-center">{fact.PRECIOUNITARIO}</td>
                <td className="p-2 text-center">{fact.CANTIDAD}</td>
                <td className="p-2 text-center">{fact.DESCUENTO}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableFactOrden
