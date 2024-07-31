package es.seg_social.formacion.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.AplicacionString;

@Repository
public interface IAplicacionStringRepository extends JpaRepository<AplicacionString, Integer>{
	
	@Query(value = "SELECT" 
			+ " aplicaciones.ID_Aplicacion," 
			+ " aplicaciones.Codigo_Aplicacion," 
			+ " aplicaciones.Nombre_Aplicacion," 
			+ " area_aplicacion.Area," 
			+ " subarea_aplicacion.Subarea," 
			+ " responsable_aplicacion.Responsable,"
			+ " tecnologia_aplicacion.Tecnologia," 
			//+ " criticidad_aplicacion.Criticidad," 
			+ " volumenevolutivo_aplicacion.Volumen_Evolutivo,"
			+ " volumenusuarios_aplicacion.Volumen_Usuarios,"
			+ " tipo_aplicacion.Tipo,"
			+ " tecnologiainterfaz_aplicacion.Tecnologia_Interfaz"
			+ " FROM"
			+ " aplicaciones"
			+ " INNER JOIN area_aplicacion ON aplicaciones.Area_ID = area_aplicacion.ID_Area"
			+ " INNER JOIN subarea_aplicacion ON aplicaciones.Subarea_ID = subarea_aplicacion.ID_Subarea"
			+ " INNER JOIN responsable_aplicacion ON aplicaciones.Responsable_ID = responsable_aplicacion.ID_Responsable"
			+ " INNER JOIN tecnologia_aplicacion ON aplicaciones.Tecnologia_ID = tecnologia_aplicacion.Id_Tecnologia"
			//+ " INNER JOIN criticidad_aplicacion ON aplicaciones.criticidad_id = criticidad_aplicacion.ID_Criticidad"
			+ " INNER JOIN volumenevolutivo_aplicacion ON aplicaciones.Vol_Evol_ID = volumenevolutivo_aplicacion.ID_Volumen_Evolutivo"
			+ " INNER JOIN volumenusuarios_aplicacion ON aplicaciones.Vol_Usu_ID = volumenusuarios_aplicacion.ID_Volumen_Usuarios"
			+ " INNER JOIN tipo_aplicacion ON aplicaciones.Tipo_ID = tipo_aplicacion.ID_Tipo"
			+ " INNER JOIN tecnologiainterfaz_aplicacion ON aplicaciones.Tecnologia_Interfaz_ID = tecnologiainterfaz_aplicacion.ID_Tecnologia_Interfaz",
			nativeQuery = true)
	ArrayList<AplicacionString> getAllAplicacionString();
	
	@Query(value = "SELECT" 
			+ " aplicaciones.ID_Aplicacion," 
			+ " aplicaciones.Codigo_Aplicacion," 
			+ " aplicaciones.Nombre_Aplicacion," 
			+ " area_aplicacion.Area," 
			+ " subarea_aplicacion.Subarea," 
			+ " responsable_aplicacion.Responsable,"
			+ " tecnologia_aplicacion.Tecnologia," 
			+ " criticidad_aplicacion.Criticidad," 
			+ " volumenevolutivo_aplicacion.Volumen_Evolutivo,"
			+ " volumenusuarios_aplicacion.Volumen_Usuarios,"
			+ " tipo_aplicacion.Tipo,"
			+ " tecnologiainterfaz_aplicacion.Tecnologia_Interfaz"
			+ " FROM"
			+ " aplicaciones"
			+ " INNER JOIN area_aplicacion ON aplicaciones.Area_ID = area_aplicacion.ID_Area"
			+ " INNER JOIN subarea_aplicacion ON aplicaciones.Subarea_ID = subarea_aplicacion.ID_Subarea"
			+ " INNER JOIN responsable_aplicacion ON aplicaciones.Responsable_ID = responsable_aplicacion.ID_Responsable"
			+ " INNER JOIN tecnologia_aplicacion ON aplicaciones.Tecnologia_ID = tecnologia_aplicacion.Id_Tecnologia"
			+ " INNER JOIN criticidad_aplicacion ON aplicaciones.criticidad_id = criticidad_aplicacion.ID_Criticidad"
			+ " INNER JOIN volumenevolutivo_aplicacion ON aplicaciones.Vol_Evol_ID = volumenevolutivo_aplicacion.ID_Volumen_Evolutivo"
			+ " INNER JOIN volumenusuarios_aplicacion ON aplicaciones.Vol_Usu_ID = volumenusuarios_aplicacion.ID_Volumen_Usuarios"
			+ " INNER JOIN tipo_aplicacion ON aplicaciones.Tipo_ID = tipo_aplicacion.ID_Tipo"
			+ " INNER JOIN tecnologiainterfaz_aplicacion ON aplicaciones.Tecnologia_Interfaz_ID = tecnologiainterfaz_aplicacion.ID_Tecnologia_Interfaz"
			+ " WHERE aplicaciones.ID_Aplicacion = ?1"
			, nativeQuery = true)
	AplicacionString getAplicacionStringById(Integer id);

}
