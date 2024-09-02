package es.seg_social.formacion.authentication;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	@PostMapping(
			value = "/login",
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	public ResponseEntity<Map<String, Object>> auth(@RequestBody LoginUserDto loginUserDTO) {
		Instant now = Instant.now();
		long expiry = 36000L;
		
//		String scope = authentication.getAuthorities().stream()
//				.map(GrantedAuthority::getAuthority)
//				.collect(Collectors.joining(","));
		
		UserModel usuario = service.authenticate(loginUserDTO);
		
		JwtClaimsSet claims = JwtClaimsSet.builder()
				.issuer("self")
				.issuedAt(now)
				.expiresAt(now.plusSeconds(expiry))
				.subject(usuario.getFullName())
//				.claim("scope", scope)
				.build();
		
		String token = this.encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
		Map<String, Object> response = new HashMap<>();
	    response.put("token", token);
	    response.put("role", usuario.getRole());
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	@PostMapping("/signup")
	public UserModel register(@RequestBody RegisterUserDto registerUserDto) {
		UserModel user=service.signup(registerUserDto);
		return user;
	}
}
