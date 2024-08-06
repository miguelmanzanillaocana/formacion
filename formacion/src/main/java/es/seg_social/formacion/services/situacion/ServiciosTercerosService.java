package es.seg_social.formacion.services.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.situacion.ServiciosTerceros;
import es.seg_social.formacion.repository.situacion.IServiciosTercerosRepository;

@Service
public class ServiciosTercerosService {
	
	@Autowired
	IServiciosTercerosRepository repository;
	
	public ArrayList<ServiciosTerceros> getAllServiciosTerceros() {
		return (ArrayList<ServiciosTerceros>) repository.findAll();
	}
	
	public ServiciosTerceros getServicioTerceroById(Integer id) {
		return repository.findById(id).get();
	}
	
	public ServiciosTerceros insertServicioTerceros(ServiciosTerceros srte) {
		srte.setId(repository.getLastId() + 1);
		return repository.save(srte);
	}
	
	public ServiciosTerceros updateServicioTerceros(ServiciosTerceros srte) {
		return repository.save(srte);
	}

}
