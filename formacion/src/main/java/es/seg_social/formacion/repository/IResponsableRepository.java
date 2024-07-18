package es.seg_social.formacion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.Responsable;

@Repository
public interface IResponsableRepository extends JpaRepository<Responsable, Integer>{

}
