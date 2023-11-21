
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class conexion 
{
    Connection con;
    public Connection getConnection()
    {
        try
        {
           
            String myBD = "jdbc:mysql://localhost:8080/sistemaventas?serverTimezone=UTC";
            con = DriverManager.getConnection(myBD, "root", " ");
            System.out.println("conexion exitosa");
            return con;
        }catch(SQLException e){System.out.println(e.toString());}
        return null;
        
    }
    
}
