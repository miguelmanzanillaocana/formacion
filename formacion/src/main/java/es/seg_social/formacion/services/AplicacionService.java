package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.Aplicacion;
import es.seg_social.formacion.repository.IAplicacionRepository;

@Service
public class AplicacionService {
	
	@Autowired
	IAplicacionRepository repository;
	
	public ArrayList<Aplicacion> getAllApplications(){
		return (ArrayList<Aplicacion>) repository.findAll();
	}
	
	public Aplicacion getApplicationById(Integer id) {
		return repository.findById(id).get();
	}

}
