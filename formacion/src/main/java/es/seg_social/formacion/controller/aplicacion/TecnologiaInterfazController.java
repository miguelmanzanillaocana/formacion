package es.seg_social.formacion.controller.aplicacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.aplicacion.TecnologiaInterfaz;
import es.seg_social.formacion.services.aplicacion.TecnologiaInterfazService;

@RestController
@RequestMapping("tecnologiaInterfaz")
public class TecnologiaInterfazController {
	
	@Autowired
	TecnologiaInterfazService service;

	@CrossOrigin
	@GetMapping("/")
	public ArrayList<TecnologiaInterfaz> getTecnologiasInterfaz() {
		return service.getTecnologiasInterfaz();
	}

	@GetMapping("/id/{id}")
	public TecnologiaInterfaz getTecnologiaInterfazById(@PathVariable("id") Integer id) {
		return service.getTecnologiaInterfazById(id);
	}
	
	@PostMapping("/insert")
	public TecnologiaInterfaz insertTecnologia(@RequestBody TecnologiaInterfaz tec) {
		return service.insertTecnologiaInterfaz(tec);
	}
	
	@PutMapping("/update")
	public TecnologiaInterfaz updateTecnologia(@RequestBody TecnologiaInterfaz tec) {
		return service.updateTecnologiaInterfaz(tec);
	}
}
