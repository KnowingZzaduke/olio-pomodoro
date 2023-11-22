import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class pedir {
    public static void main(String[] args) {
        String jdbcUrl = "jdbc:mysql://localhost:3306/sistemaventas";
        String usuario = "usuario";
        String contraseña = "contraseña";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, usuario, contraseña)) {
            String sql = "INSERT INTO nombre_de_la_tabla (columna1, columna2) VALUES (?, ?)";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                // Establecer los valores para la inserción
                statement.setString(1, "Valor1");
                statement.setInt(2, 123);

                // Ejecutar la inserción
                int filasAfectadas = statement.executeUpdate();
                
                if (filasAfectadas > 0) {
                    System.out.println("Datos insertados correctamente.");
                } else {
                    System.out.println("No se insertaron datos.");
                }
            }
        } catch (SQLException e) {
            handleSQLException(e);
        }
    }

    private static void handleSQLException(SQLException e) {
        System.out.println("Error al interactuar con la base de datos:");
        while (e != null) {
            System.out.println("SQL State: " + e.getSQLState());
            System.out.println("Error Code: " + e.getErrorCode());
            System.out.println("Message: " + e.getMessage());
            System.out.println("-----------");
            e = e.getNextException();
        }
        e.printStackTrace();
    }
}