package es.seg_social.formacion.model.situacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "despliegue_situacion")
public class Despliegue {
	
	@Id
	@Column(name = "Id_Despliegue")
	private Integer id;
	
	@Column(name = "Despliegue")
	private String despliegue;
	
	public Despliegue() {
		super();
	}

	public Despliegue(Integer id, String despliegue) {
		super();
		this.id = id;
		this.despliegue = despliegue;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDespliegue() {
		return despliegue;
	}

	public void setDespliegue(String despliegue) {
		this.despliegue = despliegue;
	}

}
