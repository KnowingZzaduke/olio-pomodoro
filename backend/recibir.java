import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Recibir {
    public static void main(String[] args) {
        String jdbcUrl = "jdbc:mysql://localhost:3306/sistemaventas";
        String usuario = "usuario";
        String contraseña = "contraseña";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, usuario, contraseña)) {
            String sql = "SELECT * FROM nombre_de_la_tabla";
            try (PreparedStatement statement = connection.prepareStatement(sql);
                 ResultSet resultSet = statement.executeQuery()) {

                // Procesar los resultados
                while (resultSet.next()) {
                    String columna1 = resultSet.getString("columna1");
                    int columna2 = resultSet.getInt("columna2");

                    // Realizar acciones con los datos obtenidos
                    System.out.println("Columna1: " + columna1 + ", Columna2: " + columna2);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
