package es.seg_social.formacion.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.VolumenUsuarios;
import es.seg_social.formacion.repository.IVolumenUsuariosRepository;

@Service
public class VolumenUsuariosService {
	@Autowired
	IVolumenUsuariosRepository repository;
	
	public ArrayList<VolumenUsuarios> getVolumenUsuarios(){
		return (ArrayList<VolumenUsuarios>) repository.findAll();
	}
	public VolumenUsuarios getVolumenUsuariosById(Integer id) {
		return repository.findById(id).get();
	}
}
