
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class pedir {
    public static void main(String[] args) {
        String jdbcUrl = "jdbc:mysql:http://localhost:8080/sistemaventas";
        String usuario = "usuario";
        String contraseña = "contraseña";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, usuario, contraseña)) {
            String sql = "INSERT INTO nombre_de_la_tabla (columna1, columna2) VALUES (?, ?)";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                // Establecer los valores para la inserción
                statement.setString(1, "Valor1");
                statement.setInt(2, 123);

                // Ejecutar la inserción
                statement.executeUpdate();
                System.out.println("Datos insertados correctamente.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

