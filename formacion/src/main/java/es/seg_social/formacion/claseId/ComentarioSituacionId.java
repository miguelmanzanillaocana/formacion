package es.seg_social.formacion.claseId;

public class ComentarioSituacionId {
	
	private Integer idSit;
	private Integer idCom;
	
	public ComentarioSituacionId() {
		super();
	}

	public ComentarioSituacionId(Integer idSit, Integer idCom) {
		super();
		this.idSit = idSit;
		this.idCom = idCom;
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

}
