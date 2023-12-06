import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useMemo, useState, useCallback, useEffect } from "react";
import { request } from "../data/request";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function TableData() {
  const [data, setData] = useState(null);
  const [showModalNotResults, setShowModalNotResults] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [reverseData, setReverseData] = useState(false);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(data?.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data ? data.slice(start, end) : [];
  }, [page, data]);
  const loadData = useCallback(async () => {
    try {
      const SESSION = Cookies.get("dyzam-app");
      const SESSIONDECRYPT = await request.decryptdata(SESSION);
      if (SESSIONDECRYPT.salida === "exito") {
        const response = await request.loaddata(SESSIONDECRYPT.data.idusuario);
        if (response) {
          setData(response.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (
      data === "No se encontraron registros en la tabla nombre-tabla" ||
      data === null
    ) {
      setShowModalNotResults(true);
      onOpen();
    } else {
      setShowModalNotResults(false);
    }
  }, [data]);

  return (
    <div
      className="flex flex-col justify-center relative"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      <div>
        {showModalNotResults === false ? (
          <div className="p-4">
            <h1 className="py-3 font-semibold" style={{ fontSize: "30px" }}>
              Tabla de facturas
            </h1>
            <Button
              color="warning"
              onClick={() => {
                setReverseData(!reverseData);
                setData(data.slice().reverse());
              }}
              style={{margin: "1rem 0"}}
            >
              {reverseData === false ? (
                <p>Mostrar los últmos registros</p>
              ) : (
                <p>Mostrar los primeros registros</p>
              )}
            </Button>
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
                <TableColumn key="fechafactura">
                  FECHA DE LA FACTURA
                </TableColumn>
                <TableColumn key="horafactura">HORA DE LA FACTURA</TableColumn>
                <TableColumn key="categoriaproducto">CATEGORIA</TableColumn>
                <TableColumn key="nombreproducto">
                  NOMBRE DEL PRODUCTO
                </TableColumn>
                <TableColumn key="totalventa">VENTA</TableColumn>
                <TableColumn key="tipopago">TIPO DE PAGO</TableColumn>
                <TableColumn key="total">TOTAL</TableColumn>
              </TableHeader>
              <TableBody items={items}>
                {(item) => (
                  <TableRow key={item.idfacturas} style={{ color: "black" }}>
                    {(columnKey) => (
                      <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div
            className="content_welcome flex flex-col items-center justify-center"
            style={{ minHeight: "100vh" }}
          >
            <h1 style={{ fontSize: "2rem" }}>¡Mensaje!</h1>
            <p className="mt-4 text-center">
              Debes agregar datos de las facturas en el formulario <br /> para
              poder visualizar registros en la tabla
            </p>
            <div>
              <Link to="/dashboard/formulario">
                <Button
                  color="danger"
                  className="p-4"
                  style={{ marginTop: "2rem" }}
                >
                  <p>Registrar facturas</p>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {showModalNotResults && (
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                Alerta!
              </ModalHeader>
              <ModalBody>
                <p className="text-black">
                  No se han guardado datos en la tabla!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="success" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default TableData;
