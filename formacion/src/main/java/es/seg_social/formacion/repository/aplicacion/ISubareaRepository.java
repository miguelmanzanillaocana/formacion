package es.seg_social.formacion.repository.aplicacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import es.seg_social.formacion.model.aplicacion.Subarea;

public interface ISubareaRepository extends JpaRepository<Subarea, Integer>{
	
	@Query(value = "SELECT MAX(ID_Subarea) FROM subarea_aplicacion", nativeQuery = true)
	Integer getLastId();

}
