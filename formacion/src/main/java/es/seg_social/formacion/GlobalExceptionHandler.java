package es.seg_social.formacion;

import java.security.SignatureException;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(Exception.class)
	public ProblemDetail handleSecurityException(Exception e) {
		ProblemDetail errorDetail = null;
		
		e.printStackTrace();
		
		if (e instanceof BadCredentialsException) {
			errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(401), e.getMessage());
			errorDetail.setProperty("description", "The username or password is incorrect");
			
			return errorDetail;
		}
		
		if (e instanceof AccountStatusException) {
            errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), e.getMessage());
            errorDetail.setProperty("description", "The account is locked");
        }

        if (e instanceof AccessDeniedException) {
            errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), e.getMessage());
            errorDetail.setProperty("description", "You are not authorized to access this resource");
        }

        if (e instanceof SignatureException) {
            errorDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), e.getMessage());
            errorDetail.setProperty("description", "The JWT signature is invalid");
        }

        return errorDetail;
	}

}
