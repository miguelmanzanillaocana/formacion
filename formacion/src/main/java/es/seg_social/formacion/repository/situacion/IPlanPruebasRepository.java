package es.seg_social.formacion.repository.situacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.situacion.PlanPruebas;

@Repository
public interface IPlanPruebasRepository extends JpaRepository<PlanPruebas, Integer>{
	
	@Query(value = "SELECT MAX(Id_Plan_Pruebas) FROM planpruebas_situacion", nativeQuery = true)
	Integer getLastId();

}
