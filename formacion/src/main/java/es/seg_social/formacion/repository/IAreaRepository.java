package es.seg_social.formacion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.Area;

@Repository
public interface IAreaRepository extends JpaRepository<Area, Integer>{
	
	@Query(value = "SELECT MAX(ID_Aplicacion) FROM aplicaciones", nativeQuery = true)
	Integer getLastId();

}
