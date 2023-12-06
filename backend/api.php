<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
require("db/MysqliDb.php");

if (!isset($_GET["action"])) {
    if (isset($_GET["file"])) {
        $db->where("code", $_GET["file"]);
        $code = $db->getValue("archivos", "file");
        $mime = explode(":", explode(";", $code)[0])[1];
        $code =  explode(",", explode(";", $code)[1])[1];
        header("Content-Type: " . $mime);
        echo base64_decode($code);
        exit;
    }
    http_response_code(403);
    exit(json_encode(["salida" => "error", "data" => "Permission denied"]));
}

switch ($_GET["action"]) {
    case 'login':
        $db->where("usuario", $_POST["usuario"]);
        $db->where("contrasena", md5($_POST["contrasena"]));
        $usuario = $db->getOne("usuarios");
        if (is_null($usuario) || empty($usuario)) {
            echo json_encode(["salida" => "error", "data" => "Usuario o Contraseña incorrecta"]);
        } else {
            echo json_encode(["salida" => "exito", "data" => $usuario]);
        }
        break;
    case "signup":
        $db->where("email", $_POST["email"]);
        $user = $db->getOne("user");
        if (!is_null($user) || !empty($user)) {
            echo json_encode(["salida" => "error", "data" => "El correo ya se encuentra resgistrado"]);
        } else {
            $_POST["level"] = 1;
            $_POST["password"] = md5($_POST["password"]);
            $db->insert("user", $_POST);
            echo json_encode(["salida" => "exito", "data" => "El usuario se creo correctamente"]);
        }
        break;
    case "deleteReport":
        $db->where("code", $_POST["code"]);
        $db->delete("archivos");
        echo json_encode(["salida" => "exito", "data" => "El reporte fue eliminado correctamente"]);
        break;
    case 'savedata':
        $fecha = $_POST["fecha"];
        $hora = $_POST["hora"];
        $categoria = $_POST["categoria"];
        $productos = $_POST["productos"];
        $totalVentas = $_POST["totalVentas"];
        $tipoPago = $_POST["tipoPago"];
        $finalPago = $_POST["total"];
        $idUsuario = $_POST["idUsuario"];

        // Realiza las operaciones necesarias con los datos, por ejemplo, inserta en la base de datos
        // Aquí debes adaptar el código según la estructura de tu base de datos y tus necesidades
        $data = [
            "fechafactura" => $fecha,
            "horafactura" => $hora,
            "categoriaproducto" => $categoria,
            "nombreproducto" => $productos,
            "totalventa" => $totalVentas,
            "tipopago" => $tipoPago,
            "total" => $finalPago,
            "idusuario" => $idUsuario
        ];

        // Inserta los datos en la base de datos usando tu objeto $db
        $insert = $db->insert("facturas", $data);

        // Verifica si la inserción fue exitosa
        if ($insert) {
            echo json_encode(["salida" => "exito", "data" => "Datos guardados correctamente"]);
        } else {
            echo json_encode(["salida" => "error", "data" => "Error al guardar los datos"]);
        }
        break;
    case 'loaddata':
        $idUsuario = $_POST["idusuario"];
        $db->where("idusuario", $idUsuario);
        $datosUsuario = $db->get("facturas");
        if ($datosUsuario) {
            echo json_encode(["salida" => "exito", "data" => $datosUsuario]);
        } else {
            echo json_encode(["salida" => "error", "data" => "No se encontraron datos para el usuario"]);
        }
        break;
}
exit;
