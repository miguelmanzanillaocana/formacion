package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.Area;
import es.seg_social.formacion.repository.IAreaRepository;

@Service
public class AreaService {
	
	@Autowired
	IAreaRepository repository;
	
	public ArrayList<Area> getAllAreas(){
		return (ArrayList<Area>) repository.findAll();
	}
	
	public Area getAreaById(Integer id) {
		return repository.findById(id).get();
	}
	
	public Area insertArea(Area a) {
		a.setId_Area(repository.getLastId());
		return repository.save(a);
	}
	
	public Area updateArea(Area a) {
		return repository.save(a);
	}

}
