package es.seg_social.formacion.model.aplicacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "criticidad_aplicacion")
public class Criticidad {

	@Id
	@Column(name = "ID_Criticidad")
	private Integer id;

	@Column(name = "Criticidad")
	private String criticidad;

	public Criticidad() {
		super();
	}

	public Criticidad(Integer id, String criticidad) {
		super();
		this.id = id;
		this.criticidad = criticidad;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCriticidad() {
		return criticidad;
	}

	public void setCriticidad(String criticidad) {
		this.criticidad = criticidad;
	}

}
