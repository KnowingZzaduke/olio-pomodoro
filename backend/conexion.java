
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
            String myBD = "jdbc:mysql://localhost:8080";
            con = DriverManager.getConnection(myBD, "root", "");
            return con;
        }catch(Exception e){System.out.println(e.toString());}
        return null;
        
    }
    
}
