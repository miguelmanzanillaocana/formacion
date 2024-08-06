package es.seg_social.formacion.controller.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.model.situacion.PlanPruebas;
import es.seg_social.formacion.services.situacion.PlanPruebasService;

@RestController
@RequestMapping("/planPruebas")
public class PlanPruebasController {
	
	@Autowired
	PlanPruebasService service;
	
	@GetMapping("/")
	public ArrayList<PlanPruebas> getAllPlanesPruebas() {
		return service.getAllPlanesPrueba();
	}
	
	@GetMapping("/{id}")
	public PlanPruebas getPlanPruebasById(@PathVariable("id") Integer id) {
		return service.getPlanPruebasById(id);
	}
	
	@PostMapping("/insert")
	public PlanPruebas insertPlanPruebas(@RequestBody PlanPruebas plpr) {
		return service.insertPlanPruebas(plpr);
	}
	
	@PutMapping("/update")
	public PlanPruebas updatePlanPruebas(@RequestBody PlanPruebas plpr) {
		return service.updatePlanPruebas(plpr);
	}

}
