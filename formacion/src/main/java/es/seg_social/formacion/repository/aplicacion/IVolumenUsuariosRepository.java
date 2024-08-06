package es.seg_social.formacion.repository.aplicacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.aplicacion.VolumenUsuarios;
@Repository
public interface IVolumenUsuariosRepository extends JpaRepository<VolumenUsuarios, Integer>{
	@Query(value = "SELECT MAX(ID_Volumen_Usuarios) FROM volumenusuarios_aplicacion", nativeQuery = true)
	Integer getLastId();
}
