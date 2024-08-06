package es.seg_social.formacion.controller.aplicacion;

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

import es.seg_social.formacion.model.aplicacion.Responsable;
import es.seg_social.formacion.services.aplicacion.ResponsableService;

@RestController
@RequestMapping("/responsable")
public class ResponsableController {
	
	@Autowired
	ResponsableService service;

	@CrossOrigin
	@GetMapping("/")
	public ArrayList<Responsable> getResponsables() {
		return service.getResponsables();
	}
	
	@GetMapping("/id/{id}")
	public Responsable getResponsableById(@PathVariable("id") Integer id) {
		return service.getResponsableById(id);
	}
	
	@PostMapping("/insert")
	public Responsable insertResponsable(@RequestBody Responsable re) {
		return service.insertResponsable(re);
	}
	
	@PutMapping("/update")
	public Responsable updateResponsable(@RequestBody Responsable re) {
		return service.updateResponsable(re);
	}
}
