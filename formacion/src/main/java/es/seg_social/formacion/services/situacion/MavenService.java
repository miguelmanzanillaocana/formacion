package es.seg_social.formacion.services.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.situacion.Maven;
import es.seg_social.formacion.repository.situacion.IMavenRepository;

@Service
public class MavenService {
	
	@Autowired
	IMavenRepository repository;
	
	public ArrayList<Maven> getAllMavens() {
		return (ArrayList<Maven>) repository.findAll();
	}
	
	public Maven getMavenById(Integer id) {
		return repository.findById(id).get();
	}
	
	public Maven insertMaven(Maven mvn) {
		mvn.setId(repository.getLastId() + 1);
		return repository.save(mvn);
	}
	
	public Maven updateMaven(Maven mvn) {
		return repository.save(mvn);
	}

}
