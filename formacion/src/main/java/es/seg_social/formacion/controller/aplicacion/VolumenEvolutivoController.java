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
import es.seg_social.formacion.model.aplicacion.VolumenEvolutivo;
import es.seg_social.formacion.services.aplicacion.VolumenEvolutivoService;

@RestController
@RequestMapping("/volumen-evolutivo")
public class VolumenEvolutivoController {
	
	@Autowired
	VolumenEvolutivoService service;

	@CrossOrigin
	@GetMapping("/")
	public ArrayList<VolumenEvolutivo> getVolumenenesEvolutivos() {
		return service.getVolumenesEvolutivos();
	}
	
	@GetMapping("/id/{id}")
	public VolumenEvolutivo getVolumenEvolutivoById(@PathVariable("id") Integer id) {
		return service.getVolumenEvolutivoById(id);
	}
	
	@PostMapping("/insert")
	public VolumenEvolutivo insertVolumenEvolutivo(@RequestBody VolumenEvolutivo vol) {
		return service.insertVolumenEvolutivo(vol);
	}
	
	@PutMapping("/update")
	public VolumenEvolutivo updateVolumenEvolutivo(@RequestBody VolumenEvolutivo vol) {
		return service.updateVolumenEvolutivo(vol);
	}
}
