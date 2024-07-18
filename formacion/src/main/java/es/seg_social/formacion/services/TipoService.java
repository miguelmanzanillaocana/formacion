package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import es.seg_social.formacion.model.Tipo;
import es.seg_social.formacion.repository.ITipoRepository;

@Service
public class TipoService {
	@Autowired
	ITipoRepository repository;
	public ArrayList<Tipo> getTipos(){
		return (ArrayList<Tipo>) repository.findAll();
	}
	
	public Tipo getTipoById(Integer id) {
		return repository.findById(id).get();
	}
}
