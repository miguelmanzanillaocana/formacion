package es.seg_social.formacion.services.aplicacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.aplicacion.Tecnologia;
import es.seg_social.formacion.model.aplicacion.VolumenEvolutivo;
import es.seg_social.formacion.repository.aplicacion.IVolumenEvolutivoRepository;

@Service
public class VolumenEvolutivoService {

	@Autowired
	IVolumenEvolutivoRepository repository;

	public ArrayList<VolumenEvolutivo> getVolumenesEvolutivos() {
		return (ArrayList<VolumenEvolutivo>) repository.findAll();
	}

	public VolumenEvolutivo getVolumenEvolutivoById(Integer id) {
		return repository.findById(id).get();
	}

	// ACCIONES

	public VolumenEvolutivo updateVolumenEvolutivo(VolumenEvolutivo volEvol) {
		return repository.save(volEvol);
	}

	public VolumenEvolutivo insertVolumenEvolutivo(VolumenEvolutivo volEvol) {
		volEvol.setId(repository.getLastId() + 1);
		VolumenEvolutivo requirement = repository.save(volEvol);
		return requirement;
	}
}
