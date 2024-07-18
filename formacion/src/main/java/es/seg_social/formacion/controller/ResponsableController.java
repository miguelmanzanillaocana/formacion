package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.Responsable;
import es.seg_social.formacion.services.ResponsableService;

@RestController
@RequestMapping("/responsable")
public class ResponsableController {
	
	@Autowired
	ResponsableService service;

	@CrossOrigin
	@GetMapping("/")
	public ArrayList<Responsable> getResponsables() {
		return service.getResponsables();
	}

}
