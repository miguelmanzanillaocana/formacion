package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.Aplicacion;
import es.seg_social.formacion.services.AplicacionService;


@RestController
@RequestMapping("/aplicacion")
public class AplicacionController {
	
	@Autowired
	private AplicacionService service;
	
	//TODO: cambiar base de datos para que int null sean 0
	@GetMapping("/all")
	public ArrayList<Aplicacion> getAllApplications() {
		return service.getAllApplications();
	}
	
	@GetMapping("/id/{id}")
	public Aplicacion getApplicationById(@PathVariable("id") Integer id) {
		return service.getApplicationById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteById(@PathVariable("id") Integer id) {
		return service.deleteByID(id);
	}
	
	@PostMapping("/insert")
	public Aplicacion insertApplication(@RequestBody Aplicacion ap) {
		return service.insertAplicacion(ap);
	}
	
	@PutMapping("/update")
	public Aplicacion updateAplicacion(@RequestBody Aplicacion ap) {
		return service.updateAplicacion(ap);
	}

}
