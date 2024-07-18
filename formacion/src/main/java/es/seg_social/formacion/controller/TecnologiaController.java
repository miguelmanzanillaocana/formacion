package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.Tecnologia;
import es.seg_social.formacion.services.TecnologiaService;

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
	
}
