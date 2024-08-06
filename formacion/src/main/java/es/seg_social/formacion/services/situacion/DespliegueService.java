package es.seg_social.formacion.services.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.situacion.Despliegue;
import es.seg_social.formacion.repository.situacion.IDespliegueRepository;

@Service
public class DespliegueService {
	
	@Autowired
	IDespliegueRepository repository;
	
	public ArrayList<Despliegue> getAllDespliegues() {
		return (ArrayList<Despliegue>) repository.findAll();
	}
	
	public Despliegue getDespliegueById(Integer id) {
		return repository.findById(id).get();
	}
	
	public Despliegue insertDespliegue(Despliegue desp) {
		desp.setId(repository.getLastId() + 1);
		return repository.save(desp);
	}
	
	public Despliegue updateDespliegue(Despliegue desp) {
		return repository.save(desp);
	}

}
