package es.seg_social.formacion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.TecnologiaInterfaz;

@Repository
public interface ITecnologiaInterfazRepository extends JpaRepository<TecnologiaInterfaz, Integer>{

}
