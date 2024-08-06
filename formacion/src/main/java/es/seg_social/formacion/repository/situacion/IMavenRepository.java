package es.seg_social.formacion.repository.situacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.situacion.Maven;

@Repository
public interface IMavenRepository extends JpaRepository<Maven, Integer>{
	
	@Query(value = "SELECT MAX(Id_Maven) FROM maven_situacion", nativeQuery = true)
	Integer getLastId();

}
