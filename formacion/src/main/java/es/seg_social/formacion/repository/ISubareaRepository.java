package es.seg_social.formacion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import es.seg_social.formacion.model.Subarea;

public interface ISubareaRepository extends JpaRepository<Subarea, Integer>{
	
	@Query(value = "SELECT MAX(ID_Subarea) FROM subarea_aplicacion", nativeQuery = true)
	Integer getLastId();

}
