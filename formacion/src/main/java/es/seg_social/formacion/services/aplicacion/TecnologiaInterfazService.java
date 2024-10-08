package es.seg_social.formacion.services.aplicacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.aplicacion.TecnologiaInterfaz;
import es.seg_social.formacion.repository.aplicacion.ITecnologiaInterfazRepository;

@Service
public class TecnologiaInterfazService {

	@Autowired
	ITecnologiaInterfazRepository repository;

	public ArrayList<TecnologiaInterfaz> getTecnologiasInterfaz() {
		return (ArrayList<TecnologiaInterfaz>) repository.findAll();
	}

	public TecnologiaInterfaz getTecnologiaInterfazById(Integer id) {
		return repository.findById(id).get();
	}
	
	// ACCIONES

	public TecnologiaInterfaz updateTecnologiaInterfaz(TecnologiaInterfaz tecInt) {
		return repository.save(tecInt);
	}

	public TecnologiaInterfaz insertTecnologiaInterfaz(TecnologiaInterfaz tecInt) {
		tecInt.setId(repository.getLastId() + 1);
		TecnologiaInterfaz requirement = repository.save(tecInt);
		return requirement;
	}
}
