package es.seg_social.formacion.model.situacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "informes_situacion")
public class Informes {
	
	@Id
	@Column(name = "Id_Informes")
	private Integer id;
	
	@Column(name = "Informes")
	private String informes;
	
	public Informes() {
		super();
	}

	public Informes(Integer id, String informes) {
		super();
		this.id = id;
		this.informes = informes;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getInformes() {
		return informes;
	}

	public void setInformes(String informes) {
		this.informes = informes;
	}

}
