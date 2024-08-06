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

import es.seg_social.formacion.model.aplicacion.Tecnologia;
import es.seg_social.formacion.services.aplicacion.TecnologiaService;

@RestController
@RequestMapping("/tecnologia")
public class TecnologiaController {
	
	@Autowired
	TecnologiaService service;
	
	@CrossOrigin
	@GetMapping("/")
	public ArrayList<Tecnologia> getTecnologias(){
		return service.getTecnologias();
	}
	
	@GetMapping("/id/{id}")
	public Tecnologia getTecnologiaById(@PathVariable("id") Integer id) {
		return service.getTecnologiaById(id);
	}
	
	@PostMapping("/insert")
	public Tecnologia insertTecnologia(@RequestBody Tecnologia tec) {
		return service.insertTecnologia(tec);
	}
	
	@PutMapping("/update")
	public Tecnologia updateTecnologia(@RequestBody Tecnologia tec) {
		return service.updateTecnologia(tec);
	}
}
