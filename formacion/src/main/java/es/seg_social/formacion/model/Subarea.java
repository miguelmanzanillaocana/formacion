package es.seg_social.formacion.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Subarea_Aplicacion")
public class Subarea {
	
	@Id
	@Column(name = "ID_Subarea")
	private Integer id;
	
	@Column(name = "Subarea")
	private String subarea;

	public Subarea() {
		super();
	}

	public Subarea(Integer id, String subarea) {
		super();
		this.id = id;
		this.subarea = subarea;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSubarea() {
		return subarea;
	}

	public void setSubarea(String subarea) {
		this.subarea = subarea;
	}

}
