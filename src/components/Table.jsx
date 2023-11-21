import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
function TableData() {
  const [data, setData] = useState(null);
  const [showModalNotResults, setShowModalNotResults] = useState(false);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(data?.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data ? data.slice(start, end) : [];
  }, [page, data]);
  return (
    <div
      className="flex flex-col justify-center relative"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      {showModalNotResults === false ? (
        <>
          <h1 className="py-3 font-semibold" style={{ fontSize: "30px" }}>
            Tabla de registros
          </h1>
          <Table
            aria-label="Example table with client side pagination"
            bottomContent={
              pages > 0 ? (
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              ) : null
            }
            classNames={{
              wrapper: "min-h-[222px]",
            }}
          >
            <TableHeader>
              <TableColumn key="fecha_hora-actual">FECHA Y HORA</TableColumn>
              <TableColumn key="numero">PRODUCTOS</TableColumn>
              <TableColumn key="saldo">PRECIOS PRODUCTOS</TableColumn>
              <TableColumn key="dias_vencidos">TOTAL VENTA</TableColumn>
              <TableColumn key="fecha">TIPO DE PAGO</TableColumn>
              <TableColumn key="comentario">PRECIO FINAL</TableColumn>
            </TableHeader>
            <TableBody items={items}>
              {(item) => (
                <TableRow key={item.numero} style={{ color: "black" }}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TableData;
