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

import es.seg_social.formacion.model.situacion.Documentacion;
import es.seg_social.formacion.services.situacion.DocumentacionService;

@RestController
@RequestMapping("/documentacion")
public class DocumentacionController {
	
	@Autowired
	DocumentacionService service;
	
	@GetMapping("/")
	public ArrayList<Documentacion> getAllDocumentaciones() {
		return service.getAllDocumentaciones();
	}
	
	@GetMapping("/{id}")
	public Documentacion getDocumentacionById(@PathVariable("id") Integer id) {
		return service.getDocumentacionById(id);
	}
	
	@PostMapping("/insert")
	public Documentacion insertDocumentacion(@RequestBody Documentacion doc) {
		return service.insertDocumentacion(doc);
	}
	
	@PutMapping("/update")
	public Documentacion updateDocumentacion(@RequestBody Documentacion doc) {
		return service.updateDocumentacion(doc);
	}

}
