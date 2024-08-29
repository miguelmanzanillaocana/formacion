package es.seg_social.formacion.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
