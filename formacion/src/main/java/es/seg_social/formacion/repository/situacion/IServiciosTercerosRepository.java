package es.seg_social.formacion.repository.situacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.situacion.ServiciosTerceros;

@Repository
public interface IServiciosTercerosRepository extends JpaRepository<ServiciosTerceros, Integer> {
	
	@Query(value = "SELECT MAX(Id_Servicios_Terceros) FROM serviciosterceros_situacion", nativeQuery = true)
	Integer getLastId();

}
