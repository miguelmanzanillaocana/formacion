package es.seg_social.formacion.repository.aplicacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.aplicacion.Criticidad;

@Repository
public interface ICriticidadRepository extends JpaRepository<Criticidad, Integer> {
	
		//Query que devuelve el ultimo id
		@Query(value = "SELECT MAX(ID_Criticidad) FROM criticidad_aplicacion", nativeQuery = true)
		Integer getLastId();
		
}
