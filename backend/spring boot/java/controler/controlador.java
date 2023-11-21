//package controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import interfaceService.Ipersonaservice;
import modelo.persona;

@Controller
@RequestMapping
public class controlador 
{
    @Autowired
  private Ipersonaservice service;
    @GetMapping("/listar")
  public String listar(Model model) 
  {
	List<persona>personas = service.listar();
	model.addAttribute("personas", personas);
	  return "index";  
  }
}
