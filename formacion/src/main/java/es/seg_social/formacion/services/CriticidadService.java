package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import es.seg_social.formacion.model.Criticidad;
import es.seg_social.formacion.repository.ICriticidadRepository;

@Service
public class CriticidadService {
	
	@Autowired
	ICriticidadRepository repository;
	
	public ArrayList<Criticidad> getCriticidades(){
		return (ArrayList<Criticidad>) repository.findAll();
	}
	
	public Criticidad getCriticidadById(Integer id) {
		return repository.findById(id).get();
	}
	
	public Criticidad updateCriticidad(Criticidad cr) {
		return repository.save(cr);
	}
	
	public Criticidad insertCriticidad(Criticidad cr) {
		cr.setId(repository.getLastId() + 1);
		Criticidad requirement = repository.save(cr);
		return requirement;
	}
}
