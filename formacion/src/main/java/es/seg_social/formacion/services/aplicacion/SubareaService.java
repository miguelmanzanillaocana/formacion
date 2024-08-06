package es.seg_social.formacion.services.aplicacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.aplicacion.Subarea;
import es.seg_social.formacion.repository.aplicacion.ISubareaRepository;

@Service
public class SubareaService {
	
	@Autowired
	ISubareaRepository repository;
	
	public ArrayList<Subarea> getAllSubarea(){
		return (ArrayList<Subarea>) repository.findAll();
	}
	
	public Subarea getSubareaById(Integer id) {
		return repository.findById(id).get();
	}
	
	public Subarea insertSubarea(Subarea sa) {
		sa.setId(repository.getLastId() + 1);
		return repository.save(sa);
	}
	
	public Subarea updateSubarea(Subarea sa) {
		return repository.save(sa);
	}

}
