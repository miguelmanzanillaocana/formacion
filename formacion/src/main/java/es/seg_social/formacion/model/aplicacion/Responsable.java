package es.seg_social.formacion.model.aplicacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="responsable_aplicacion")
public class Responsable {
	
	@Id
	@Column(name="ID_Responsable")
	private Integer id;
	
	@Column(name="Responsable")
	private String responsable;

	public Responsable() {
		super();
	}

	public Responsable(Integer id, String responsable) {
		super();
		this.id = id;
		this.responsable = responsable;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getResponsable() {
		return responsable;
	}

	public void setResponsable(String responsable) {
		this.responsable = responsable;
	}

}
