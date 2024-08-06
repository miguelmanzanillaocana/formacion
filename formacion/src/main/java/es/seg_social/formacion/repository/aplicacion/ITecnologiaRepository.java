package es.seg_social.formacion.repository.aplicacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import es.seg_social.formacion.model.aplicacion.Tecnologia;

public interface ITecnologiaRepository extends JpaRepository<Tecnologia, Integer>{
	@Query(value = "SELECT MAX(Id_Tecnologia) FROM tecnologia_aplicacion", nativeQuery = true)
	Integer getLastId();
}
