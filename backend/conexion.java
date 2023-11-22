import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    Connection con;

    public Connection getConnection() {
        try {
         
            String myBD = "jdbc:mysql://localhost:3306/sistemaventas?serverTimezone=UTC";
            con = DriverManager.getConnection(myBD, "root", "tu_contraseña");
            System.out.println("Conexión exitosa");
            return con;
        } catch (SQLException e) {
            // Maneja la excepción(puedes lanzarla o imprimir el mensaje)
            e.printStackTrace();
            // Devuelve null o maneja la excepción según sea necesario
            return null;
        }
    }
    //metodo usado para cerrar la conexion con un mensaje que lo indica
    public void closeConnection() {
        if (con != null) {
            try {
                con.close();
                System.out.println("Conexión cerrada");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}

//Otra forma de hacer
// // import java.sql.Connection;
// // import java.sql.DriverManager;
// // import java.sql.SQLException;

// // public class Conexion {
// //     Connection con;

// //     public Connection getConnection() {
// //         try {
// //             // Cambia los valores según tu configuración de base de datos
// //             String host = "localhost";
// //             String dbName = "diasam_cobros";
// //             String username = "root";
// //             String password = "";

// //             String myBD = "jdbc:mysql://" + host + "/" + dbName + "?serverTimezone=UTC";
// //             con = DriverManager.getConnection(myBD, username, password);
// //             return con;
// //         } catch (SQLException e) {
// //             e.printStackTrace();
// //         }
// //         return null;
// //     }
