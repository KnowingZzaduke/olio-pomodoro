//package services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import interfaceService.Ipersonaservice;
import interfaces.Ipersona;
import modelo.persona;

public class personaservice implements Ipersonaservice
{
    @Autowired
	private Ipersona data;
	@Override
	public List<persona> listar() {
		
		return (List<persona>)data.findAll();
	}

	@Override
	public Optional<persona> listarId(int id) {
		// TODO Auto-generated method stub
		return Optional.empty();
	}

	@Override
	public int save(persona p) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}
 
}
