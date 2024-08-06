package es.seg_social.formacion.model.situacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "planpruebas_situacion")
public class PlanPruebas {
	
	@Id
	@Column(name = "Id_Plan_Pruebas")
	private Integer id;
	
	@Column(name = "Plan_Pruebas")
	private String planPruebas;
	
	public PlanPruebas() {
		super();
	}

	public PlanPruebas(Integer id, String planPruebas) {
		super();
		this.id = id;
		this.planPruebas = planPruebas;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPlanPruebas() {
		return planPruebas;
	}

	public void setPlanPruebas(String planPruebas) {
		this.planPruebas = planPruebas;
	}

}
