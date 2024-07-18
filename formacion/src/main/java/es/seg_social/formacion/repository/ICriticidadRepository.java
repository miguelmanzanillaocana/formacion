package es.seg_social.formacion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.Criticidad;

@Repository
public interface ICriticidadRepository extends JpaRepository<Criticidad, Integer> {

}
