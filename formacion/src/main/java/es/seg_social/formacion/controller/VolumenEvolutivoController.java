package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.VolumenEvolutivo;
import es.seg_social.formacion.services.VolumenEvolutivoService;

@RestController
@RequestMapping("/volumen-evolutivo")
public class VolumenEvolutivoController {
	
	@Autowired
	VolumenEvolutivoService service;

	@CrossOrigin
	@GetMapping("/")
	public ArrayList<VolumenEvolutivo> getVolumenenesEvolutivos() {
		return service.getVolumenesEvolutivos();
	}
	
}
