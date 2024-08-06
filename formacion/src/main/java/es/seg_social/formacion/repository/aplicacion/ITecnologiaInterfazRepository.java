package es.seg_social.formacion.repository.aplicacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.aplicacion.TecnologiaInterfaz;

@Repository
public interface ITecnologiaInterfazRepository extends JpaRepository<TecnologiaInterfaz, Integer> {
	// Query que devuelve el ultimo id
	@Query(value = "SELECT MAX(ID_Tecnologia_Interfaz) FROM tecnologiainterfaz_aplicacion", nativeQuery = true)
	Integer getLastId();
}
