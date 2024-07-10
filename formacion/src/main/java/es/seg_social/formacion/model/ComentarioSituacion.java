package es.seg_social.formacion.model;

import es.seg_social.formacion.claseId.ComentarioSituacionId;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;

@Entity
@IdClass(ComentarioSituacionId.class)
@Table(name = "Comentarios_Situacion")
public class ComentarioSituacion {
	
	@Id
	@Column(name = "Situacion_ID")
	private Integer idSit;
	
	@Id
	@Column(name = "ID_Comentario")
	private Integer idCom;
	
	@Column(name = "Comentario")
	private String com;

	public ComentarioSituacion() {
		super();
	}

	public ComentarioSituacion(Integer idSit, Integer idCom, String com) {
		super();
		this.idSit = idSit;
		this.idCom = idCom;
		this.com = com;
	}

	public Integer getIdSit() {
		return idSit;
	}

	public void setIdSit(Integer idSit) {
		this.idSit = idSit;
	}

	public Integer getIdCom() {
		return idCom;
	}

	public void setIdCom(Integer idCom) {
		this.idCom = idCom;
	}

	public String getCom() {
		return com;
	}

	public void setCom(String com) {
		this.com = com;
	}

}
