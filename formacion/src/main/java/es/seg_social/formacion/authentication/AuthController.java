package es.seg_social.formacion.authentication;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	private final JwtEncoder encoder;
	
	@Autowired
	AuthService service;
	
	
	public AuthController(JwtEncoder encoder) {
		this.encoder = encoder;
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> auth(Authentication authentication) {
		Instant now = Instant.now();
		long expiry = 36000L;
		
//		String scope = authentication.getAuthorities().stream()
//				.map(GrantedAuthority::getAuthority)
//				.collect(Collectors.joining(","));
		
		JwtClaimsSet claims = JwtClaimsSet.builder()
				.issuer("self")
				.issuedAt(now)
				.expiresAt(now.plusSeconds(expiry))
				.subject(authentication.getName())
//				.claim("scope", scope)
				.build();
		
		String token = this.encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
		return new ResponseEntity<>(token, HttpStatus.OK);
	}
	
	@PostMapping("/signup")
	public UserModel register(@RequestBody RegisterUserDto registerUserDto) {
		UserModel user=service.signup(registerUserDto);
		return user;
	}
}
