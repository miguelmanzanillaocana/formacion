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

import es.seg_social.formacion.model.situacion.Informes;
import es.seg_social.formacion.services.situacion.InformesService;

@RestController
@RequestMapping("/informes")
public class InformesController {
	
	@Autowired
	InformesService service;
	
	@GetMapping("/")
	public ArrayList<Informes> getAllInformes() {
		return service.getAllInformes();
	}
	
	@GetMapping("/{id}")
	public Informes getInformesById(@PathVariable("id") Integer id) {
		return service.getInformesById(id);
	}
	
	@PostMapping("/insert")
	public Informes insertInformes(@RequestBody Informes inf) {
		return service.insertInformes(inf);
	}
	
	@PutMapping("/update")
	public Informes updateInformes(@RequestBody Informes inf) {
		return service.updateInformes(inf);
	}

}
