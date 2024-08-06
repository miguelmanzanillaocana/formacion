package es.seg_social.formacion.model.aplicacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "volumenusuarios_aplicacion")
public class VolumenUsuarios {
	@Id
	@Column(name = "ID_Volumen_Usuarios")
	private Integer id;

	@Column(name = "Volumen_Usuarios")
	private String volumenUsuarios;

	public VolumenUsuarios() {
		super();
	}

	public VolumenUsuarios(Integer id, String volumenUsuarios) {
		super();
		this.id = id;
		this.volumenUsuarios = volumenUsuarios;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getVolumenUsuarios() {
		return volumenUsuarios;
	}

	public void setVolumenUsuarios(String volumenUsuarios) {
		this.volumenUsuarios = volumenUsuarios;
	}

}
