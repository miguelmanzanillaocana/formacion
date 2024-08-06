package es.seg_social.formacion.controller.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.claseId.ComentarioSituacionId;
import es.seg_social.formacion.model.situacion.ComentarioSituacion;
import es.seg_social.formacion.services.situacion.ComentarioSituacionService;

@RestController
@RequestMapping("/comentarioSituacion")
public class ComentarioSituacionController {
	
	@Autowired
	ComentarioSituacionService service;
	
	@CrossOrigin
	@GetMapping("/")
	public ArrayList<ComentarioSituacion> getAllComentarioSituacion(){
		return service.getAllComentarioSituacion();
	}
	
	@GetMapping("/{id}")
	public ArrayList<ComentarioSituacion> getComentarioSituacionByIdSit(@PathVariable (value = "id") Integer id){
		return service.getComentarioSituacionByIdSit(id);
	}
	
	@GetMapping("/{idSit}/{idCom}")
	public ComentarioSituacion getComentarioSituacionById(@PathVariable (value = "idSit") Integer idSit, @PathVariable(value="idCom") Integer idCom) {
		ComentarioSituacionId id = new ComentarioSituacionId(idSit, idCom);
		return service.getComentarioSituacionById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteComentarioSituacionByIdSit(@PathVariable(value="id") Integer id) {
		return service.deleteComentarioSituacionByIdSit(id);
	}
	
	@DeleteMapping("/delete/{idSit}/{idCom}")
	public boolean deleteComentarioSituacionById(@PathVariable(value = "idSit") Integer idSit, @PathVariable(value = "idCom") Integer idCom) {
		return service.deleteComentarioSituacionById(new ComentarioSituacionId(idSit, idCom));
	}
	
	@PostMapping("/insert")
	public ComentarioSituacion ComentarioSituacion(@RequestBody ComentarioSituacion comSit) {
		return service.insertComentarioSituacion(comSit);
	}

}
