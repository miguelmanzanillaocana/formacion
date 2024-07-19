package es.seg_social.formacion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.VolumenEvolutivo;

@Repository
public interface IVolumenEvolutivoRepository extends JpaRepository<VolumenEvolutivo, Integer>{
	@Query(value = "SELECT MAX(ID_Volumen_Evolutivo) FROM volumenevolutivo_aplicacion", nativeQuery = true)
	Integer getLastId();
}
