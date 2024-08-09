package es.seg_social.formacion.repository.situacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.situacion.Situacion;

@Repository
public interface ISituacionRepository extends JpaRepository<Situacion, Integer>{
	@Query(value="SELECT MAX(ID_Situacion) from situacion_aplicaciones",nativeQuery = true)
	Integer getLastId();
	

		@Query(value = "SELECT ID_Situacion FROM situacion_aplicaciones WHERE Codigo_Aplicacion = ?1",nativeQuery = true)
		Integer getIdSituacionByCod(String codApp);
}
