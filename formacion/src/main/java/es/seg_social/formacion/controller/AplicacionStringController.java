package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.services.AplicacionStringService;
import es.seg_social.formacion.model.AplicacionString;

@RestController
@RequestMapping("/aplicacionString")
public class AplicacionStringController {
	
	@Autowired
	AplicacionStringService service;
	
	@GetMapping("/")
	public ArrayList<AplicacionString> getAllAplicacionString(){
		return service.getAllAplicacionString();
	}
	
	@GetMapping("/{id}")
	public AplicacionString getAplicacionStringById(@PathVariable("id") Integer id) {
		return service.getAplicacionStringById(id);
	}

}
