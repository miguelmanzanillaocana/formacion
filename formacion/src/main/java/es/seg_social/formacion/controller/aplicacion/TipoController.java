package es.seg_social.formacion.controller.aplicacion;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.aplicacion.TecnologiaInterfaz;
import es.seg_social.formacion.model.aplicacion.Tipo;
import es.seg_social.formacion.services.aplicacion.TipoService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



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
	
	@GetMapping("/id/{id}")
	public Tipo getTipoById(@PathVariable("id") Integer id) {
		return service.getTipoById(id);
	}
	
	@PostMapping("/insert")
	public Tipo insertTipo(@RequestBody Tipo tip) {
		return service.insertTipo(tip);
	}
	
	@PutMapping("/update")
	public Tipo updateTipo(@RequestBody Tipo tip) {
		return service.updateTipo(tip);
	}
}
