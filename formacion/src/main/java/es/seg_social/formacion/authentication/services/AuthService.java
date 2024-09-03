package es.seg_social.formacion.authentication.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.authentication.UserModel;
import es.seg_social.formacion.authentication.dto.LoginUserDto;
import es.seg_social.formacion.authentication.dto.RegisterUserDto;
import es.seg_social.formacion.authentication.repository.UserRepository;

@Service
public class AuthService {
	
	@Autowired
	UserRepository userRepository;
	
	private final PasswordEncoder passwordEncoder;
	
	private final AuthenticationManager authenticationManager;

	
	public AuthService(PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
		this.passwordEncoder = passwordEncoder;
		this.authenticationManager = authenticationManager;
	}
	
	public UserModel signup(RegisterUserDto input) {
		UserModel user = new UserModel()
				.setFullName(input.getFullName())
				.setEmail(input.getEmail())
				.setPassword(passwordEncoder.encode(input.getPassword()))
				.setRole(input.getRole())
				.setAceptado(false);
	
		return userRepository.save(user);
	}
	
	public UserModel authenticate(LoginUserDto input) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(input.getEmail(), input.getPassword())
		);
		
		return userRepository.findByEmail(input.getEmail()).orElseThrow();
	}
	
}
