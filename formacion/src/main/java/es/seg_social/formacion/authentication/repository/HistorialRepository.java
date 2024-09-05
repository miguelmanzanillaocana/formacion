package es.seg_social.formacion.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.authentication.Historial;

@Repository
public interface HistorialRepository  extends JpaRepository<Historial, Integer>{

	//Query que devuelve el ultimo id
		@Query(value = "SELECT MAX(id) FROM historial", nativeQuery = true)
		Integer getLastId();
}
