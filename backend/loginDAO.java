
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


public class loginDAO 
{
    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    conexion cn = new conexion();
    
    
    public login log(String nombre, String pass)
    {
        login l = new login();
        String sql = "SELECT * FROM usuarios WHERE nombre = ? AND pass = ?";
        try
        {
            con = cn.getConnection();
            ps = con.prepareStatement(sql);
            ps.setString(1, nombre);
            ps.setString(2, pass);
            rs = ps.executeQuery();
            if(rs.next())
            {
                l.setId(rs.getInt("id"));
                l.setNombre(rs.getString("nombre"));
                l.setPass(rs.getString("pass"));
                
            }

        }catch(SQLException e){System.out.println(e.toString());}
        return l;
    }
}
