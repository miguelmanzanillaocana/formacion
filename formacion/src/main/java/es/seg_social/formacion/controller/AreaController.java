package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.Area;
import es.seg_social.formacion.services.AreaService;

@RestController
@RequestMapping("/area")
public class AreaController {
	
	@Autowired
	AreaService service;
	
	@GetMapping("/")
	public ArrayList<Area> getAllArea() {
		return service.getAllAreas();
	}
	
	@GetMapping("/{id}")
	public Area getAreaById(@PathVariable("id") Integer id) {
		return service.getAreaById(id);
	}
	
	@PostMapping("/insert")
	public Area insertArea(@RequestBody Area a) {
		return service.insertArea(a);
	}
}
