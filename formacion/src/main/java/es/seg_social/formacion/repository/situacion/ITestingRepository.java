package es.seg_social.formacion.repository.situacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.situacion.Testing;

@Repository
public interface ITestingRepository extends JpaRepository<Testing, Integer>{
	
	@Query(value = "SELECT MAX(Id_Testing) FROM testing_situacion", nativeQuery = true)
	Integer getLastId();

}
