package es.seg_social.formacion.services.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.situacion.Situacion;
import es.seg_social.formacion.repository.situacion.ISituacionRepository;

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
		
		if (!repository.findById(id).get().equals(null)) {
			comSitService.deleteComentarioSituacionByIdSit(id);
			repository.deleteById(id);
			respuesta = true;
		}
		
		return respuesta;
	}
	
	public Situacion insertSituacion(Situacion sit) {
		sit.setId(repository.getLastId()+1);
		return repository.save(sit);
	}

	public Situacion getSituacionByCod(String cod) {
		return repository.findById(findIdByCod(cod)).get();
	}
	
	public Integer findIdByCod(String cod) {
		return repository.getIdSituacionByCod(cod);
	}

	public Situacion updateSituacion(Situacion situ) {
		situ.setId(findIdByCod(situ.getCodApli()));
		return repository.save(situ);
	}

}
