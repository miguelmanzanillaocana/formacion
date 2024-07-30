package es.seg_social.formacion.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.AplicacionString;

@Repository
public interface IAplicacionStringRepository extends JpaRepository<AplicacionString, Integer>{
	
	@Query(value = "SELECT" 
			+ " a.ID_Aplicacion," 
			+ " a.Codigo_Aplicacion," 
			+ " a.Nombre_Aplicacion," 
			+ " aa.Area," 
			+ " sa.Subarea," 
			+ " ra.Responsable,"
			+ " ta.Tecnologia," 
			+ " ca.Criticidad," 
			+ " vea.Volumen_Evolutivo,"
			+ " vua.Volumen_Usuarios,"
			+ " tipa.Tipo,"
			+ " tia.Tecnologia_Interfaz"
			+ " FROM"
			+ " aplicaciones a"
			+ " INNER JOIN area_aplicacion aa ON a.Area_ID = aa.ID_Area"
			+ " INNER JOIN subarea_aplicacion sa ON a.Subarea_ID = sa.ID_Subarea"
			+ " INNER JOIN responsable_aplicacion ra ON a.Responsable_ID = ra.ID_Responsable"
			+ " INNER JOIN tecnologia_aplicacion ta ON a.Tecnologia_ID = ta.Id_Tecnologia"
			+ " INNER JOIN criticidad_aplicacion ca ON a.criticidad_id = ca.ID_Criticidad"
			+ " INNER JOIN volumenevolutivo_aplicacion vea ON a.Vol_Evol_ID = vea.ID_Volumen_Evolutivo"
			+ " INNER JOIN volumenusuarios_aplicacion vua ON a.Vol_Usu_ID = vua.ID_Volumen_Usuarios"
			+ " INNER JOIN tipo_aplicacion tipa ON a.Tipo_ID = tipa.ID_Tipo"
			+ " INNER JOIN tecnologiainterfaz_aplicacion tia ON a.Tecnologia_Interfaz_ID = tia.ID_Tecnologia_Interfaz",
			nativeQuery = true)
	ArrayList<AplicacionString> getAllAplicacionString();
	
	@Query(value = "SELECT a.ID_Aplicacion, a.Codigo_Aplicacion, a.Nombre_Aplicacion, aa.Area, sa.Subarea, ra.Responsable, ta.tecnologia, ca.Criticidad, vea.Volumen_Evolutivo, vua.Volumen_Usuarios, tipa.Tipo, tia.Tecnologia_Interfaz"
			+ "FROM aplicaciones a JOIN area_aplicacion aa JOIN subarea_aplicacion sa JOIN responsable_aplicacion ra JOIN tecnologia_aplicacion ta JOIN criticidad_aplicacion ca JOIN volumenevolutivo_aplicacion vea JOIN volumenusuarios_aplicacion vua JOIN tipo_aplicacion tipa JOIN tecnologiainterfaz_aplicacion tia"
			+ "WHERE a.Area_ID = aa.ID_Area AND a.Subarea_ID = sa.ID_Subarea AND a.Responsable_ID = ra.ID_Responsable AND a.Tecnologia_ID = ta.Id_Tecnologia AND a.Criticidad_ID = ca.ID_Criticidad AND a.Vol_Evol_ID = vea.ID_Volumen_Evolutivo AND a.Vol_Usu_ID = vua.ID_Volumen_Usuarios AND a.Tipo_ID = tipa.ID_Tipo"
			+ "AND a.Tecnologia_Interfaz_ID = tia.ID_Tecnologia_Interfaz = ?1", nativeQuery = true)
	AplicacionString getAplicacionStringById(Integer id);

}
