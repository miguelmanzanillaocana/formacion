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

import es.seg_social.formacion.model.situacion.ServiciosTerceros;
import es.seg_social.formacion.services.situacion.ServiciosTercerosService;

@RestController
@RequestMapping("/serviciosTerceros")
public class ServiciosTercerosController {
	
	@Autowired
	ServiciosTercerosService service;
	
	@GetMapping("/")
	public ArrayList<ServiciosTerceros> getAllServiciosTerceros() {
		return service.getAllServiciosTerceros();
	}
	
	@GetMapping("/{id}")
	public ServiciosTerceros getServicioTerceroById(@PathVariable("id") Integer id) {
		return service.getServicioTerceroById(id);
	}
	
	@PostMapping("/insert")
	public ServiciosTerceros insertServicioTerceros(@RequestBody ServiciosTerceros srte) {
		return service.insertServicioTerceros(srte);
	}
	
	@PutMapping("/update")
	public ServiciosTerceros updateServiciosTerceros(@RequestBody ServiciosTerceros srte) {
		return service.updateServicioTerceros(srte);
	}

}
