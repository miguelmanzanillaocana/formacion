package es.seg_social.formacion.controller.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.situacion.Situacion;
import es.seg_social.formacion.services.situacion.SituacionService;


@RestController
@RequestMapping("/situacion")
public class SituacionController {
	
	@Autowired
	SituacionService service;
	
	@GetMapping("/")
	public ArrayList<Situacion> getAllSituaciones(){
		return service.getAllSituacion();
	}
	
	@GetMapping("/{id}")
	public Situacion getSituacionById(@PathVariable("id") Integer id) {
		return service.getSituacionById(id);
	}
	
	@GetMapping("/cod/{cod}")
	public Situacion getSituacionByCod(@PathVariable("cod") String cod) {
		return service.getSituacionByCod(cod);
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteSituacionById(@PathVariable("id") Integer id) {
		return service.deleteSituacionById(id);
	}

	@PostMapping("/insert")
	public Situacion insertSituacion(@RequestBody Situacion situ) {
		return service.insertSituacion(situ);
	}
}
