package es.seg_social.formacion.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.Situacion;
import es.seg_social.formacion.repository.ISituacionRepository;

@Service
public class SituacionService {
	
	@Autowired
	ISituacionRepository repository;
	
	@Autowired
	ComentarioSituacionService comSitService;
	
	public ArrayList<Situacion> getAllSituacion() {
		return (ArrayList<Situacion>) repository.findAll();
	}
	
	public Situacion getSituacionById(Integer id) {
		return repository.findById(id).get();
	}
	
	public boolean deleteSituacionById(Integer id) {
		boolean respuesta = false;
		
		if (!repository.findById(id).get().equals(Optional.empty())) {
			comSitService.deleteComentarioSituacionByIdSit(id);
			repository.deleteById(id);
			respuesta = true;
		}
		
		return respuesta;
	}

}
