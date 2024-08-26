package es.seg_social.formacion.authentication;

import java.time.Instant;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
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
	public String auth(@RequestBody LoginUserDto loginUserDto) {
		Instant now = Instant.now();
		long expiry = 36000L;
		
		UserModel user=service.authenticate(loginUserDto);
		
//		String scope = authentication.getAuthorities().stream()
//				.map(GrantedAuthority::getAuthority)
//				.collect(Collectors.joining(","));
		
		JwtClaimsSet claims = JwtClaimsSet.builder()
				.issuer("self")
				.issuedAt(now)
				.expiresAt(now.plusSeconds(expiry))
				.subject(user.getFullName())
//				.claim("scope", scope)
				.build();
		
		return this.encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
	}
	
	@PostMapping("/signup")
	public UserModel register(@RequestBody RegisterUserDto registerUserDto) {
		UserModel user=service.signup(registerUserDto);
		return user;
	}
}
