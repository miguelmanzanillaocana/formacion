package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import es.seg_social.formacion.model.Responsable;
import es.seg_social.formacion.repository.IResponsableRepository;

@Service
public class ResponsableService {

	@Autowired
	IResponsableRepository repository;

	public ArrayList<Responsable> getResponsables() {
		return (ArrayList<Responsable>) repository.findAll();
	}

	public Responsable getResponsableById(Integer id) {
		return repository.findById(id).get();
	}
	// ACCIONES

	public Responsable updateResponsable(Responsable re) {
		return repository.save(re);
	}

	public Responsable insertResponsable(Responsable re) {
		re.setId(repository.getLastId() + 1);
		Responsable requirement = repository.save(re);
		return requirement;
	}
}
