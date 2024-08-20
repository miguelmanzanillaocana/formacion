package es.seg_social.formacion;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
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
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;

@Configuration
public class RestApiConfig {
	KeyGenerator gen = new KeyGenerator();
	
	RSAPublicKey pubKey = gen.getPublic();
	RSAPrivateKey priKey = gen.getPrivate();

    @Bean
    WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedMethods("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS");
			}
		};
	}

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    	http.authorizeHttpRequests((authorize) -> authorize.anyRequest().authenticated())
    	.csrf((csrf) -> csrf.ignoringRequestMatchers("/auth"))
    	.httpBasic(Customizer.withDefaults())
    	.oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt)
    	.sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
    	.exceptionHandling(
    			(exceptions) -> exceptions
    			.authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())
    			.accessDeniedHandler(new BearerTokenAccessDeniedHandler())
    			);
    	
    	return http.build();
    }
    
    @Bean
    UserDetailsService users() {
    	return new InMemoryUserDetailsManager(User.withUsername("user").password(passwordEncoder().encode("pass")).roles("user").build());
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

}
