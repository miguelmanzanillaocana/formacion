package es.seg_social.formacion.authentication.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.authentication.UserModel;
import es.seg_social.formacion.authentication.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository repository;
	
	public ArrayList<UserModel> getAllUsers() {
		return (ArrayList<UserModel>) repository.findAll();
	}

}
