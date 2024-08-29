package es.seg_social.formacion;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationManagerResolver;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationEntryPoint;
import org.springframework.security.oauth2.server.resource.web.access.BearerTokenAccessDeniedHandler;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;

import es.seg_social.formacion.authentication.UserRepository;

@Configuration
public class RestApiConfig {
	private final UserRepository userRepository;
	
	KeyGenerator gen = new KeyGenerator();
	
	RSAPublicKey pubKey = gen.getPublic();
	RSAPrivateKey priKey = gen.getPrivate();

	
    public RestApiConfig(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Bean
    CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
		config.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS", "HEAD"));
		
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", config);
		return source;
	}

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
                .cors(cors -> cors.configurationSource(corsConfigurationSource())).csrf(csrf -> csrf.disable())
                .httpBasic(Customizer.withDefaults())
                .oauth2ResourceServer(oauth -> oauth.jwt(Customizer.withDefaults()))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .exceptionHandling(exceptions -> exceptions
                                .accessDeniedHandler(new BearerTokenAccessDeniedHandler())
                                .authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())
                );
    	
//    	http.authorizeHttpRequests((authorize) -> authorize.anyRequest().authenticated())
//    	.csrf((csrf) -> csrf.ignoringRequestMatchers("/auth/**"))
//    	.httpBasic(Customizer.withDefaults())
//    	.oauth2ResourceServer((oauth) -> oauth.jwt(Customizer.withDefaults()))
//    	.sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//    	.exceptionHandling(
//    			(exceptions) -> exceptions
//    			.authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())
//    			.accessDeniedHandler(new BearerTokenAccessDeniedHandler())
//    			);
    	
    	return http.build();
    }
    
    @Bean
    UserDetailsService users() {
    	return username -> userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
    
    @Bean
    PasswordEncoder passwordEncoder() {
    	return new BCryptPasswordEncoder();
    }
    
    @Bean
    JwtDecoder decoder() {
    	return NimbusJwtDecoder.withPublicKey(this.pubKey).build();
    }
    
    @Bean
    JwtEncoder encoder() {
    	JWK jwk = new RSAKey.Builder(this.pubKey).privateKey(this.priKey).build();
    	JWKSource<SecurityContext> jwks = new ImmutableJWKSet<>(new JWKSet(jwk));
    	return new NimbusJwtEncoder(jwks);
    }
    
    @Bean
    JwtAuthenticationConverter jwtAuthenticationConverter() {
    	JwtGrantedAuthoritiesConverter grantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
    	grantedAuthoritiesConverter.setAuthorityPrefix("");
    	
    	JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
    	jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(grantedAuthoritiesConverter);
    	return jwtAuthenticationConverter;
    }

    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
    	return config.getAuthenticationManager();
    }
}
