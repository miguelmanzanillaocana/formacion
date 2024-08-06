package es.seg_social.formacion.repository.situacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.situacion.Documentacion;

@Repository
public interface IDocumentacionRepository extends JpaRepository<Documentacion, Integer> {
	
	@Query(value = "SELECT MAX(Id_Documentacion) FROM documentacion_situacion", nativeQuery = true)
	public Integer getLastId();

}
