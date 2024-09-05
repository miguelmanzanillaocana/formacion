package es.seg_social.formacion.authentication.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.authentication.Historial;
import es.seg_social.formacion.authentication.repository.HistorialRepository;
import es.seg_social.formacion.model.aplicacion.Aplicacion;
@Service
public class HistorialService {
	
	@Autowired
	HistorialRepository repository;
	
	public ArrayList<Historial> getAllHistoriales(){
		return(ArrayList<Historial>) repository.findAll();
	}

	public Historial insertHistorial(Historial hi) {
		hi.setId_cambio(repository.getLastId() + 1);
		Historial requirement = repository.save(hi);
		return requirement;
	}
}
