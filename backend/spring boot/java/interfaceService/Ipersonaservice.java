//package interfaceService;

import java.util.List;
import java.util.Optional;

import modelo.persona;

public interface Ipersonaservice 
{
  public List<persona>listar();
  public Optional<persona>listarId(int id);
  public int save(persona p);
  public void delete(int id);
}
