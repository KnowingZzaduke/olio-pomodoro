import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import modelo.persona;

@RestController
@RequestMapping("/api")
public class PersonaController {

    @Autowired
    private PersonaService personaService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String action, @ModelAttribute Persona persona) {
        if ("login".equals(action)) {
            System.out.println("Datos recibidos en login: " + persona.toString());
            return ResponseEntity.ok("{'salida': 'Éxito', 'mensaje': 'Inicio de sesión exitoso'}");
        } else {
            return ResponseEntity.badRequest().body("{'salida': 'Error!', 'mensaje': 'Acción no válida'}");
        }
    }

    @PostMapping("/savedata")
    public ResponseEntity<String> saveData(@RequestParam String action, @ModelAttribute Persona persona) {
        if ("savedata".equals(action)) {
            System.out.println("Datos recibidos en savedata: " + persona.toString());
            personaService.save(persona);
            return ResponseEntity.ok("{'salida': 'Éxito', 'mensaje': 'Los datos fueron enviados y guardados correctamente.'}");
        } else {
            return ResponseEntity.badRequest().body("{'salida': 'Error!', 'mensaje': 'Acción no válida'}");
        }
    }

    @GetMapping("/loaddata")
    public ResponseEntity<List<persona>> loadData(@RequestParam String action) {
        if ("loaddata".equals(action)) {
            List<persona> personas = personaService.listar();
            System.out.println("Datos enviados a frontend: " + personas.toString());
            return ResponseEntity.ok().body(personas);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
