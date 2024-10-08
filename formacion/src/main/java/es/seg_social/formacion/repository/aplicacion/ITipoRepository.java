package es.seg_social.formacion.repository.aplicacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.aplicacion.Tipo;

@Repository
public interface ITipoRepository extends JpaRepository<Tipo, Integer>{
	@Query(value = "SELECT MAX(ID_Tipo) FROM tipo_aplicacion", nativeQuery = true)
	Integer getLastId();
}
