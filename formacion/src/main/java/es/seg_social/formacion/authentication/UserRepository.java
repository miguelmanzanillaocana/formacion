package es.seg_social.formacion.authentication;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Integer>{
	
	Optional<UserModel> findByEmail(String email);

}
