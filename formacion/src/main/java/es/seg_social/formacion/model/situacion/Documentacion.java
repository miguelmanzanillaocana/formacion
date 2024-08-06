package es.seg_social.formacion.model.situacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "documentacion_situacion")
public class Documentacion {
	
	@Id
	@Column(name = "Id_Documentacion")
	private Integer id;
	
	@Column(name = "Documentacion")
	private String Documentacion;
	
	public Documentacion() {
		super();
	}

	public Documentacion(Integer id, String documentacion) {
		super();
		this.id = id;
		Documentacion = documentacion;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDocumentacion() {
		return Documentacion;
	}

	public void setDocumentacion(String documentacion) {
		Documentacion = documentacion;
	}

}
