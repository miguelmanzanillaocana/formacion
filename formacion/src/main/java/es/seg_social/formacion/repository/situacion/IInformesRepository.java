package es.seg_social.formacion.repository.situacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.situacion.Informes;

@Repository
public interface IInformesRepository extends JpaRepository<Informes, Integer>{
	
	@Query(value = "SELECT MAX(Id_Informes) FROM informes_situacion", nativeQuery = true)
	Integer getLastId();

}
