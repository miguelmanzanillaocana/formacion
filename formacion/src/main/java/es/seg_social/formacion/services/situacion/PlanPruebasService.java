package es.seg_social.formacion.services.situacion;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.seg_social.formacion.model.situacion.PlanPruebas;
import es.seg_social.formacion.repository.situacion.IPlanPruebasRepository;

@Service
public class PlanPruebasService {
	
	@Autowired
	IPlanPruebasRepository repository;
	
	public ArrayList<PlanPruebas> getAllPlanesPrueba() {
		return (ArrayList<PlanPruebas>) repository.findAll();
	}
	
	public PlanPruebas getPlanPruebasById(Integer id) {
		return repository.findById(id).get();
	}
	
	public PlanPruebas insertPlanPruebas(PlanPruebas plpr) {
		plpr.setId(repository.getLastId() + 1);
		return repository.save(plpr);
	}
	
	public PlanPruebas updatePlanPruebas(PlanPruebas plpr) {
		return repository.save(plpr);
	}

}
