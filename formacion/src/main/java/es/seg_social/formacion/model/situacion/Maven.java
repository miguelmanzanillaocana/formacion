package es.seg_social.formacion.model.situacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "maven_situacion")
public class Maven {
	
	@Id
	@Column(name = "Id_Maven")
	private Integer id;
	
	@Column String maven;
	
	public Maven() {
		super();
	}

	public Maven(Integer id, String maven) {
		super();
		this.id = id;
		this.maven = maven;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMaven() {
		return maven;
	}

	public void setMaven(String maven) {
		this.maven = maven;
	}

}
