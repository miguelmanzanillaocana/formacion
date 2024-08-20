package es.seg_social.formacion;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationEntryPoint;
import org.springframework.security.oauth2.server.resource.web.access.BearerTokenAccessDeniedHandler;
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
	
	//Solo valor para desarrollo
	final String pub = "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0qN7Y5SiXgbPSZhRpvkoS+BK//UBekhwioJHnm2i1UFKv2br1FuyQ2r/vs+sIP+0qPbxZ0VDk499PlqwSVwdplzSgcBnUgCJbAK8o4S1rk2aGfpetbtBQr1KdGNkxCqGlZ8YSQTUkGvotUU2CehLep/iCmPCYQRIqxERhMSdF0KnqD2bXWU2k1+x7+mAaD5uvzA2WyyoGAVaVPNy4RpBcM0A9EmPLwSzOG+lYMW8hAYjJFjeYyfF5Wrof56zUvY6GZ1EWnHLsOnS1wr+fTojvjSDD9QYdL5+Ctd9k/rFIG9VmQ9Zw5HWae2dfZMzUv8r04s0ZARWxcasdXYMSAuNaV0WM+hqLKG7li90EyVsAcmD5HsO94adqePgngITBPnNxCJdflS/0mz8RCbGPzASBsT7hb/Gs5b2OhTcAJU2Niq2rse1htnd5oFXGj+644Hnbfspeoe5qqswWdW4dbigTlCvosSnnAHhUngWxda2/mRCZwmD29dEuu5ud//0+zYhQpe95sl2riguZfQXyu4Odw5qrHFYJ8fuqmxvSidiZ3KOm1J0VANhXY49TcOlglPr2HEe71dmFwHKjEl7LZ17zovIUkKVNGIu+E7UrEYcp/TVljN0toBkREb4YXAxGEVnza2Qmyxd9QJbKY0DQrqIjeR6iJcIQqx+StZTILMvS1MCAwEAAQ==";
	final String pri = "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";
	
	@Value(pub)
	RSAPublicKey pubKey;
	
	@Value(pri)
	RSAPrivateKey priKey;

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
