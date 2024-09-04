package es.seg_social.formacion.authentication.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.authentication.UserModel;
import es.seg_social.formacion.authentication.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService service;
	
	@GetMapping("/")
	public ArrayList<UserModel> getAllUsers() {
		return service.getAllUsers();
	}
	
	@PutMapping("/update")
	public UserModel updateUser(@RequestBody UserModel usuario) {
		return service.updateUser(usuario);
	}

}
