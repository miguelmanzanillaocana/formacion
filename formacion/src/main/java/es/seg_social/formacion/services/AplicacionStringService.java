package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.repository.IAplicacionStringRepository;
import es.seg_social.formacion.model.AplicacionString;

@Service
public class AplicacionStringService {
	
	@Autowired
	IAplicacionStringRepository repository;
	
	public ArrayList<AplicacionString> getAllAplicacionString(){
		return repository.getAllAplicacionString();
	}
	
	public AplicacionString getAplicacionStringById(Integer id) {
		return repository.getAplicacionStringById(id);
	}

}
