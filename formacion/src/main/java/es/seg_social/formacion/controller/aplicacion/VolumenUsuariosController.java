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

import es.seg_social.formacion.model.aplicacion.VolumenUsuarios;
import es.seg_social.formacion.services.aplicacion.VolumenUsuariosService;

@RestController
@RequestMapping("/volumenUsuarios")
public class VolumenUsuariosController {
	
	@Autowired
	VolumenUsuariosService service;
	
	@CrossOrigin
	@GetMapping("/")
	public ArrayList<VolumenUsuarios> getVolumenesUsuarios(){
		return service.getVolumenUsuarios();
	}
	
	@GetMapping("/id/{id}")
	public VolumenUsuarios getVolumenUsuariosById(@PathVariable("id") Integer id) {
		return service.getVolumenUsuariosById(id);
	}
	
	@PostMapping("/insert")
	public VolumenUsuarios insertVolumenUsuarios(@RequestBody VolumenUsuarios vol) {
		return service.insertVolumenUsuarios(vol);
	}
	
	@PutMapping("/update")
	public VolumenUsuarios updateVolumenUsuarios(@RequestBody VolumenUsuarios vol) {
		return service.updateVolumenUsuarios(vol);
	}
}
