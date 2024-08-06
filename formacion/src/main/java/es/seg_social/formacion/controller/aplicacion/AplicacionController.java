package es.seg_social.formacion.controller.aplicacion;

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

import es.seg_social.formacion.model.aplicacion.Aplicacion;
import es.seg_social.formacion.services.aplicacion.AplicacionService;


@RestController
@RequestMapping("/aplicacion")
public class AplicacionController {
	
	@Autowired
	private AplicacionService service;

	@GetMapping("/")
	public ArrayList<Aplicacion> getAllApplications() {
		return service.getAllApplications();
	}
	
	@GetMapping("/{id}")
	public Aplicacion getApplicationById(@PathVariable("id") Integer id) {
		return service.getApplicationById(id);
	}
	
	@DeleteMapping("/delete/{cod}")
	public boolean deleteById(@PathVariable("cod") String cod) {
		Integer id=service.getAplicacionIdByCod(cod);
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
