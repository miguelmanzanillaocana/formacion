package es.seg_social.formacion.repository.situacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.situacion.Situacion;

@Repository
public interface ISituacionRepository extends JpaRepository<Situacion, Integer>{

}
