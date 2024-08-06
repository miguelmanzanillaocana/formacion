package es.seg_social.formacion.model.aplicacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
//TODO: PARA HACER
@Entity
@Table(name = "tecnologia_aplicacion")
public class Tecnologia {
	@Id
	@Column(name = "ID_Tecnologia")
	private Integer id;

	@Column(name = "Tecnologia")
	private String tecnologia;

	public Tecnologia() {
		super();
	}

	public Tecnologia(Integer id, String tecnologia) {
		super();
		this.id = id;
		this.tecnologia = tecnologia;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTecnologia() {
		return tecnologia;
	}

	public void setTecnologia(String tecnologia) {
		this.tecnologia = tecnologia;
	}

}
