package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import es.seg_social.formacion.model.Criticidad;
import es.seg_social.formacion.services.CriticidadService;

@RestController
@RequestMapping("/criticidad")
public class CriticidadController {
	
	@Autowired
	CriticidadService service;

	@CrossOrigin
	@GetMapping("/")
	public ArrayList<Criticidad> getCriticidades() {
		return service.getCriticidades();
	}
	
	@GetMapping("/id/{id}")
	public Criticidad getCriticidadById(@PathVariable("id") Integer id) {
		return service.getCriticidadById(id);
	}

	@PostMapping("/insert")
	public Criticidad insertCriticidad(@RequestBody Criticidad cr) {
		return service.insertCriticidad(cr);
	}
	
	@PutMapping("/update")
	public Criticidad updateAplicacion(@RequestBody Criticidad cr) {
		return service.updateCriticidad(cr);
	}
}
