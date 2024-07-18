package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import es.seg_social.formacion.model.TecnologiaInterfaz;
import es.seg_social.formacion.repository.ITecnologiaInterfazRepository;

@Service
public class TecnologiaInterfazService {
	
	@Autowired
	ITecnologiaInterfazRepository repository;
	
	public ArrayList<TecnologiaInterfaz> getTecnologiasInterfaz(){
		return (ArrayList<TecnologiaInterfaz>) repository.findAll();
	}
	
	public TecnologiaInterfaz getTecnologiaInterfazById(Integer id) {
		return repository.findById(id).get();
	}
	
}
