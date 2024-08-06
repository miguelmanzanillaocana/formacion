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

import es.seg_social.formacion.model.situacion.Testing;
import es.seg_social.formacion.services.situacion.TestingService;

@RestController
@RequestMapping("/testing")
public class TestingController {
	
	@Autowired
	TestingService service;
	
	@GetMapping("/")
	public ArrayList<Testing> getAllTestings() {
		return service.getAllTestings();
	}
	
	@GetMapping("/{id}")
	public Testing getTestingById(@PathVariable("id") Integer id) {
		return service.getTestingById(id);
	}
	
	@PostMapping("/insert")
	public Testing insertTesting(@RequestBody Testing t) {
		return service.insertTesting(t);
	}
	
	@PutMapping("/update")
	public Testing updateTesting(@RequestBody Testing t) {
		return service.updateTesting(t);
	}

}
