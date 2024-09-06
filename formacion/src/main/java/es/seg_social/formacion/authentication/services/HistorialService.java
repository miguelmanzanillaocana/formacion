package es.seg_social.formacion.authentication.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.authentication.Historial;
import es.seg_social.formacion.authentication.repository.HistorialRepository;
import es.seg_social.formacion.authentication.repository.UserRepository;

@Service
public class HistorialService {
	
	@Autowired
	HistorialRepository repository;
	
	@Autowired
	UserRepository userRepository;
	
	public ArrayList<Historial> getAllHistoriales(){
		return(ArrayList<Historial>) repository.findAll();
	}

	public Historial insertHistorial(Historial historial) {
		historial.setUsuario(userRepository.findByEmail(historial.getUsuario().getEmail()).get());
		historial.setId_cambio(repository.getLastId()+1);
		return repository.save(historial);
	}
}
