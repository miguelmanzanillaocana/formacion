package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.services.SituacionService;
import es.seg_social.formacion.model.Situacion;


@RestController
@RequestMapping("/situacion")
public class SituacionController {
	
	@Autowired
	SituacionService service;
	
	@GetMapping("/all")
	public ArrayList<Situacion> getAllSituaciones(){
		return service.getAllSituacion();
	}
	
	@GetMapping("/id/{id}")
	public Situacion getSituacionById(@PathVariable("id") Integer id) {
		return service.getSituacionById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteSituacionById(@PathVariable("id") Integer id) {
		return service.deleteSituacionById(id);
	}

}
