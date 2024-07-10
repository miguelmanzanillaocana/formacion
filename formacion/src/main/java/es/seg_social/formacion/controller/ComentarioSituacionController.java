package es.seg_social.formacion.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.claseId.ComentarioSituacionId;
import es.seg_social.formacion.model.ComentarioSituacion;
import es.seg_social.formacion.services.ComentarioSituacionService;

@RestController
@RequestMapping("/comentarioSituacion")
public class ComentarioSituacionController {
	
	@Autowired
	ComentarioSituacionService service;
	
	@GetMapping("/all")
	public ArrayList<ComentarioSituacion> getAllComentarioSituacion(){
		return service.getAllComentarioSituacion();
	}
	
	@GetMapping("id/{id}")
	public ArrayList<ComentarioSituacion> getComentarioSituacionByIdSit(@PathVariable (value = "id") Integer id){
		return service.getComentarioSituacionByIdSit(id);
	}
	
	@GetMapping("/id/{idSit}/{idCom}")
	public ComentarioSituacion getComentarioSituacionById(@PathVariable (value = "idSit") Integer idSit, @PathVariable(value="idCom") Integer idCom) {
		ComentarioSituacionId id = new ComentarioSituacionId(idSit, idCom);
		return service.getComentarioSituacionById(id);
	}

}
