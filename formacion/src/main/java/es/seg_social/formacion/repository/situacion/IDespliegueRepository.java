package es.seg_social.formacion.repository.situacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.situacion.Despliegue;

@Repository
public interface IDespliegueRepository extends JpaRepository<Despliegue, Integer> {
	
	@Query(value = "SELECT MAX(Id_Despliegue) FROM despliegue_situacion", nativeQuery = true)
	Integer getLastId();

}
