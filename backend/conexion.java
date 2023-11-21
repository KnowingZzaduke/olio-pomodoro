
import java.sql.Connection;
import java.sql.DriverManager;
//import java.sql.SQLException;
public class conexion 
{
    Connection con;
    public Connection getConnection()
    {
        try
        {
            String myBD = "jdbc:mysql://localhost:8080/sistemaventas?serverTimezone=UTC";
            con = DriverManager.getConnection(myBD, "root", "");
            return con;
        }catch(Exception e){System.out.println(e.toString());}
        return null;
        
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
