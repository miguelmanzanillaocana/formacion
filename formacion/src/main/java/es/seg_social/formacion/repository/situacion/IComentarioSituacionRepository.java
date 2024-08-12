package es.seg_social.formacion.repository.situacion;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.claseId.ComentarioSituacionId;
import es.seg_social.formacion.model.situacion.ComentarioSituacion;

@Repository
public interface IComentarioSituacionRepository extends JpaRepository<ComentarioSituacion, ComentarioSituacionId>{
	
	//Query que devuelve una lista con todos los comentarios de una situación dada
	@Query(value = "SELECT * FROM comentarios_situacion WHERE Situacion_ID = ?1", nativeQuery = true)
	ArrayList<ComentarioSituacion> getComentarioSituacionByIdSit(Integer idSit);

//	@Query(value = "SELECT MAX(ID_Comentario) FROM comentarios_situacion WHERE Situacion_ID = ?1")
//	Integer getLastId(Integer idSit);

}
