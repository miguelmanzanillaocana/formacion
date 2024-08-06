package es.seg_social.formacion.repository.aplicacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.aplicacion.Aplicacion;

@Repository
public interface IAplicacionRepository extends JpaRepository<Aplicacion, Integer>{

	//Query que devuelva el id con el codigo de la aplicacion
	@Query(value = "SELECT ID_Aplicacion FROM aplicaciones WHERE Codigo_Aplicacion = ?1",nativeQuery = true)
	Integer getIdAplicacionByCod(String codApp);
	
	//Query que devuelve el ultimo id
	@Query(value = "SELECT MAX(ID_Aplicacion) FROM aplicaciones", nativeQuery = true)
	Integer getLastId();
	
}
