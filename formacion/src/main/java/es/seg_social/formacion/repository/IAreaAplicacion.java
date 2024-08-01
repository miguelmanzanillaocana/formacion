package es.seg_social.formacion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.seg_social.formacion.model.Area;

@Repository
public interface IAreaAplicacion extends JpaRepository<Area, Integer>{

}
