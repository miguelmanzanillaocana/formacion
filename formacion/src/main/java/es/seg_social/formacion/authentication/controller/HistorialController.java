package es.seg_social.formacion.authentication.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.authentication.Historial;
import es.seg_social.formacion.authentication.services.HistorialService;

@RestController
@RequestMapping("/historial")
public class HistorialController {
	
	@Autowired
	HistorialService service;
	
	@GetMapping("/")
	public ArrayList<Historial> getAllHistoriales() {
		return service.getAllHistoriales();
	}
	
	@PostMapping("/insert")
	public Historial insertHistorial(@RequestBody Historial hi) {
		return service.insertHistorial(hi);
	}
}
