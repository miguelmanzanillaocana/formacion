package es.seg_social.formacion.controller;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.Tipo;
import es.seg_social.formacion.services.TipoService;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/tipo")
public class TipoController {
	
	@Autowired
	TipoService service;
	
	@CrossOrigin
	@GetMapping("/")
	public ArrayList<Tipo>getTipos() {
		return service.getTipos();
	}
	
}
