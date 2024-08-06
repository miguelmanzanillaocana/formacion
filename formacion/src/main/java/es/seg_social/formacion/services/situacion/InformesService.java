package es.seg_social.formacion.services.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.situacion.Informes;
import es.seg_social.formacion.repository.situacion.IInformesRepository;

@Service
public class InformesService {
	
	@Autowired
	IInformesRepository repository;
	
	public ArrayList<Informes> getAllInformes() {
		return (ArrayList<Informes>) repository.findAll();
	}
	
	public Informes getInformesById(Integer id) {
		return repository.findById(id).get();
	}
	
	public Informes insertInformes(Informes inf) {
		inf.setId(repository.getLastId() + 1);
		return repository.save(inf);
	}
	
	public Informes updateInformes(Informes inf) {
		return repository.save(inf);
	}

}
