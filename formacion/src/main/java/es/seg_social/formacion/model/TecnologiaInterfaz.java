package es.seg_social.formacion.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tecnologiainterfaz_aplicacion")
public class TecnologiaInterfaz {
	@Id
	@Column(name = "ID_Tecnologia_Interfaz")
	private Integer id;

	@Column(name = "Tecnologia_Interfaz")
	private String tecnologiaInterfaz;

	public TecnologiaInterfaz() {
		super();
	}

	public TecnologiaInterfaz(Integer id, String tecnologiaInterfaz) {
		super();
		this.id = id;
		this.tecnologiaInterfaz = tecnologiaInterfaz;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTecnologiaInterfaz() {
		return tecnologiaInterfaz;
	}

	public void setTecnologiaInterfaz(String tecnologiaInterfaz) {
		this.tecnologiaInterfaz = tecnologiaInterfaz;
	}
	
	
}
