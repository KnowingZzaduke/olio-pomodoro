//package modelo;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GeneratedType;



@Entity
@Table(name = "persona")

public class persona 
{
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private int id;
 private String nombre;
 private String telefono;
 
public persona() {
	
}

public persona(int id, String nombre, String telefono) {
	super();
	this.id = id;
	this.nombre = nombre;
	this.telefono = telefono;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getNombre() {
	return nombre;
}

public void setNombre(String nombre) {
	this.nombre = nombre;
}

public String getTelefono() {
	return telefono;
}

public void setTelefono(String telefono) {
	this.telefono = telefono;
}
 
 
}
