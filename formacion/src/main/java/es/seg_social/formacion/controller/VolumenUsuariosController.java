package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.VolumenUsuarios;
import es.seg_social.formacion.services.VolumenUsuariosService;

@RestController
@RequestMapping("/volumen-usuarios")
public class VolumenUsuariosController {
	@Autowired
	VolumenUsuariosService service;
	
	@CrossOrigin
	@GetMapping("/")
	public ArrayList<VolumenUsuarios> getVolumenesUsuarios(){
		return service.getVolumenUsuarios();
	}
}
