import Typed from "typed.js";
import "../../compile-css/output.css";
import { useRef, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
function Welcome() {
  const name1 = useRef(null);
  const name2 = useRef(null);
  useEffect(() => {
    const typed = new Typed(name1.current, {
      strings: ["<h1>Bienvenido/a 👋</h1>"],
      typeSpeed: 50,
    });
    setTimeout(() => {
      const typed2 = new Typed(name2.current, {
        strings: ["<p>Aquí podrás guardar el registro de tus facturas!</p>"],
        typeSpeed: 30,
      });
      return () => {
        typed2.destroy();
      };
    }, 3000);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      className="content_welcome flex flex-col items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <h1 ref={name1} style={{ fontSize: "2rem" }}></h1>
      <p ref={name2} className="mt-4"></p>
      <div>
        <Link to="/dashboard/formulario-enviar-facturas">
          <p
            style={{
              backgroundColor: "red",
              padding: "8px",
              borderRadius: "10px",
              color: "white",
              marginTop: "10px",
            }}
          >
            Registrar facturas
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
