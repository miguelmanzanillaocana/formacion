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

import es.seg_social.formacion.model.situacion.Maven;
import es.seg_social.formacion.services.situacion.MavenService;

@RestController
@RequestMapping("/maven")
public class MavenController {
	
	@Autowired
	MavenService service;
	
	@GetMapping("/")
	public ArrayList<Maven> getAllMavens() {
		return service.getAllMavens();
	}
	
	@GetMapping("/{id}")
	public Maven getMavenById(@PathVariable("id") Integer id) {
		return service.getMavenById(id);
	}
	
	@PostMapping("/insert")
	public Maven insertMaven(@RequestBody Maven mvn) {
		return service.insertMaven(mvn);
	}
	
	@PutMapping("/update")
	public Maven updateMaven(@RequestBody Maven mvn) {
		return service.updateMaven(mvn);
	}

}
