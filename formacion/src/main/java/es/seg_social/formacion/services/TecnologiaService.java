package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.Tecnologia;
import es.seg_social.formacion.repository.ITecnologiaRepository;

@Service
public class TecnologiaService {

	@Autowired
	ITecnologiaRepository repository;

	public ArrayList<Tecnologia> getTecnologias() {
		return (ArrayList<Tecnologia>) repository.findAll();
	}

	public Tecnologia getTecnologiaById(Integer id) {
		return repository.findById(id).get();
	}

	// ACCIONES
	public Tecnologia updateTecnologia(Tecnologia tec) {
		return repository.save(tec);
	}

	public Tecnologia insertTecnologia(Tecnologia tec) {
		tec.setId(repository.getLastId() + 1);
		Tecnologia requirement = repository.save(tec);
		return requirement;
	}
}
