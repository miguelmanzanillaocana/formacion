package es.seg_social.formacion.services.aplicacion;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.aplicacion.Aplicacion;
import es.seg_social.formacion.model.situacion.Situacion;
import es.seg_social.formacion.repository.aplicacion.IAplicacionRepository;
import es.seg_social.formacion.services.situacion.SituacionService;

@Service
public class AplicacionService {
	
	@Autowired
	IAplicacionRepository repository;
	
	@Autowired
	SituacionService situacionService;
	
	public ArrayList<Aplicacion> getAllApplications(){
		return (ArrayList<Aplicacion>) repository.findAll();
	}
	
	public Aplicacion getApplicationById(Integer id) {
		return repository.findById(id).get();
	}
	
	public boolean deleteByID(Integer id) {
		boolean respuesta = false;
		
		if (!repository.findById(id).get().equals(Optional.empty())) {
			situacionService.deleteSituacionById(id);
			repository.deleteById(id);
			respuesta = true;
		}
		
		return respuesta;
	}
	
	public Integer getAplicacionIdByCod(String cod) {
		return repository.getIdAplicacionByCod(cod);
	}
	
	public Aplicacion insertAplicacion(Aplicacion ap) {
		ap.setId(repository.getLastId() + 1);
		Aplicacion requirement = repository.save(ap);
		situacionService.insertSituacion(new Situacion(ap.getId(), ap.getCodAplic()));
		return requirement;
	}
	
	public Aplicacion updateAplicacion(Aplicacion ap) {
		return repository.save(ap);
	}

}
