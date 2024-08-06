package es.seg_social.formacion.services.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.situacion.Testing;
import es.seg_social.formacion.repository.situacion.ITestingRepository;

@Service
public class TestingService {
	
	@Autowired
	ITestingRepository repository;
	
	public ArrayList<Testing> getAllTestings() {
		return (ArrayList<Testing>) repository.findAll();
	}
	
	public Testing getTestingById(Integer id) {
		return repository.findById(id).get();
	}
	
	public Testing insertTesting(Testing t) {
		t.setId(repository.getLastId() + 1);
		return repository.save(t);
	}
	
	public Testing updateTesting(Testing t) {
		return repository.save(t);
	}

}
