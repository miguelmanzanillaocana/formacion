package es.seg_social.formacion.repository.aplicacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.aplicacion.Responsable;

@Repository
public interface IResponsableRepository extends JpaRepository<Responsable, Integer>{
	//Query que devuelve el ultimo id
			@Query(value = "SELECT MAX(ID_Responsable) FROM responsable_aplicacion", nativeQuery = true)
			Integer getLastId();
}
