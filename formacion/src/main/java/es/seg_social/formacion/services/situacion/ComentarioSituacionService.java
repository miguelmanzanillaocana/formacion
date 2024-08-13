package es.seg_social.formacion.services.situacion;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.claseId.ComentarioSituacionId;
import es.seg_social.formacion.model.situacion.ComentarioSituacion;
import es.seg_social.formacion.repository.situacion.IComentarioSituacionRepository;

@Service
public class ComentarioSituacionService {
	
	@Autowired
	IComentarioSituacionRepository repository;
	
	@Autowired
	SituacionService sitService;
	
	public ArrayList<ComentarioSituacion> getAllComentarioSituacion(){
		return (ArrayList<ComentarioSituacion>) repository.findAll();
	}
	
	public ComentarioSituacion getComentarioSituacionById(ComentarioSituacionId id) {
		return repository.findById(id).get();
	}
	
	public ArrayList<ComentarioSituacion> getComentarioSituacionByIdSit(Integer id){
		return repository.getComentarioSituacionByIdSit(id);
	}
	
	public boolean deleteComentariSituacioByIdSit(Integer id) {
		for (ComentarioSituacion com : getComentarioSituacionByIdSit(id)) {
			repository.delete(com);
		}
		return true;
	}
	
	public boolean deleteComentarioSituacionById(ComentarioSituacionId comSitId) {
		 boolean respuesta = false;
		 
		 if (!repository.findById(comSitId).get().equals(Optional.empty())) {
			 repository.deleteById(comSitId);
		 }
		 
		 return respuesta;
	}
	
	public boolean deleteComentarioSituacionByIdSit(Integer SituacionId) {
		boolean respuesta = false;
		
		for (ComentarioSituacion comSit : getComentarioSituacionByIdSit(SituacionId)) {
			repository.delete(comSit);
		}
		
		return respuesta;
	}
	
	public ComentarioSituacion insertComentarioSituacion(ComentarioSituacion comSit) {
		comSit.setIdCom(repository.getLastId(comSit.getIdSit()) + 1);
		return repository.save(comSit);
	}

	public ArrayList<ComentarioSituacion> getComentarioSituacionByCodAplic(String cod) {
		return repository.getComentarioSituacionByIdSit(sitService.findIdByCod(cod));
	}

}
