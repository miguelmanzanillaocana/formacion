package es.seg_social.formacion.authentication.controller;

import java.time.Instant;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.seg_social.formacion.authentication.Token;
import es.seg_social.formacion.authentication.UserModel;
import es.seg_social.formacion.authentication.dto.LoginUserDto;
import es.seg_social.formacion.authentication.dto.RegisterUserDto;
import es.seg_social.formacion.authentication.services.AuthService;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AuthController {

	private final JwtEncoder encoder;

	@Autowired
	AuthService service;

	public AuthController(JwtEncoder encoder) {
		this.encoder = encoder;
	}

	@PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Token> auth(@RequestBody LoginUserDto loginUserDTO) {
		Instant now = Instant.now();
		long expiry = 36000L;


		UserModel usuario = service.authenticate(loginUserDTO);
		
		String scope = usuario.getAuthorities().stream()
				.map(GrantedAuthority::getAuthority)
				.collect(Collectors.joining(","));

		JwtClaimsSet claims = JwtClaimsSet.builder().issuer(usuario.getEmail()).issuedAt(now).expiresAt(now.plusSeconds(expiry))
				.subject(usuario.getFullName())
				.claim("scope", scope)
				.build();

		Token token = new Token(this.encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue());
		return new ResponseEntity<>(token, HttpStatus.OK);
	}

	@PostMapping("/signup")
	public UserModel register(@RequestBody RegisterUserDto registerUserDto) {
		UserModel user=service.signup(registerUserDto);
		return user;
	}
}
