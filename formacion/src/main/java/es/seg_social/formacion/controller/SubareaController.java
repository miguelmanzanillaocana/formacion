package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.Subarea;
import es.seg_social.formacion.services.SubareaService;

@RestController
@RequestMapping("/subarea")
public class SubareaController {
	
	@Autowired
	SubareaService service;
	
	@GetMapping("/")
	public ArrayList<Subarea> getAllSubarea() {
		return service.getAllSubarea();
	}
	
	@GetMapping("/{id}")
	public Subarea getSubareaById(@PathVariable("id") Integer id) {
		return service.getSubareaById(id);
	}

}
