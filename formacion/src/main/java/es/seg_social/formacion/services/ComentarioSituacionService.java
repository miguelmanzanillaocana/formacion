package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.claseId.ComentarioSituacionId;
import es.seg_social.formacion.model.ComentarioSituacion;
import es.seg_social.formacion.repository.IComentarioSituacionRepository;

@Service
public class ComentarioSituacionService {
	
	@Autowired
	IComentarioSituacionRepository repository;
	
	public ArrayList<ComentarioSituacion> getAllComentarioSituacion(){
		return (ArrayList<ComentarioSituacion>) repository.findAll();
	}
	
	public ComentarioSituacion getComentarioSituacionById(ComentarioSituacionId id) {
		return repository.findById(id).get();
	}
	
	public ArrayList<ComentarioSituacion> getComentarioSituacionByIdSit(Integer id){
		return repository.getComentarioSituacionByIdSit(id);
	}
	
	public boolean deleteComentarioSituacion(Integer SituacionId) {
		boolean respuesta = false;
		
		
		
		return respuesta;
	}

}
