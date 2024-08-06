package es.seg_social.formacion.controller.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.situacion.Despliegue;
import es.seg_social.formacion.services.situacion.DespliegueService;

@RestController
@RequestMapping("/despliegue")
public class DespliegueController {
	
	@Autowired
	DespliegueService service;
	
	@GetMapping("/")
	public ArrayList<Despliegue> getAllDespliegues() {
		return service.getAllDespliegues();
	}
	
	@GetMapping("/{id}")
	public Despliegue getDespliegueById(@PathVariable("id") Integer id) {
		return service.getDespliegueById(id);
	}
	
	@PostMapping("/insert")
	public Despliegue insertDespliegue(@RequestBody Despliegue desp) {
		return service.insertDespliegue(desp);
	}
	
	@PutMapping("/update")
	public Despliegue updateDespliegue(@RequestBody Despliegue desp) {
		return service.updateDespliegue(desp);
	}

}
