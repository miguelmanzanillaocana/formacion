package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.Subarea;
import es.seg_social.formacion.repository.ISubareaRepository;

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

}
