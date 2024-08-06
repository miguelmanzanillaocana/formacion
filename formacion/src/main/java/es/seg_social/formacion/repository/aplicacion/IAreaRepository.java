package es.seg_social.formacion.repository.aplicacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.aplicacion.Area;

@Repository
public interface IAreaRepository extends JpaRepository<Area, Integer>{
	
	@Query(value = "SELECT MAX(ID_Area) FROM area_aplicacion", nativeQuery = true)
	Integer getLastId();

}
