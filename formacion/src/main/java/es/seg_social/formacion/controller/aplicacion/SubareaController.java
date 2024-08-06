package es.seg_social.formacion.controller.aplicacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.aplicacion.Subarea;
import es.seg_social.formacion.services.aplicacion.SubareaService;

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
	
	@PostMapping("/insert")
	public Subarea insertSubarea(@RequestBody Subarea sa) {
		return service.insertSubarea(sa);
	}
	
	public Subarea updateSubarea(@RequestBody Subarea sa) {
		return service.updateSubarea(sa);
	}

}
