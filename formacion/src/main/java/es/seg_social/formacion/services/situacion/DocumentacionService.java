package es.seg_social.formacion.services.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.situacion.Documentacion;
import es.seg_social.formacion.repository.situacion.IDocumentacionRepository;

@Service
public class DocumentacionService {
	
	@Autowired
	IDocumentacionRepository repository;
	
	public ArrayList<Documentacion> getAllDocumentaciones() {
		return (ArrayList<Documentacion>) repository.findAll();
	}
	
	public Documentacion getDocumentacionById(Integer id) {
		return repository.findById(id).get();
	}
	
	public Documentacion insertDocumentacion(Documentacion doc) {
		doc.setId(repository.getLastId() + 1);
		return repository.save(doc);
	}
	
	public Documentacion updateDocumentacion(Documentacion doc) {
		return repository.save(doc);
	}

}
