package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.VolumenEvolutivo;
import es.seg_social.formacion.repository.IVolumenEvolutivoRepository;

@Service
public class VolumenEvolutivoService {
	
	@Autowired
	IVolumenEvolutivoRepository repository;
	public ArrayList<VolumenEvolutivo> getVolumenesEvolutivos(){
		return (ArrayList<VolumenEvolutivo>) repository.findAll();
	}
	
	public VolumenEvolutivo getTioById(Integer id) {
		return repository.findById(id).get();
	}
	
}
