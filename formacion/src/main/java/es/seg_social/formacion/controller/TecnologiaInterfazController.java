package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.TecnologiaInterfaz;
import es.seg_social.formacion.services.TecnologiaInterfazService;

@RestController
@RequestMapping("tecnologia-interfaz")
public class TecnologiaInterfazController {
	@Autowired
	TecnologiaInterfazService service;

	@CrossOrigin
	@GetMapping("/")
	public ArrayList<TecnologiaInterfaz> getTecnologiasInterfaz() {
		return service.getTecnologiasInterfaz();
	}
}
