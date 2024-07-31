package es.seg_social.formacion.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Aplicaciones")
public class AplicacionString {
	
	@Id
	@Column(name = "ID_Aplicacion")
	private Integer id;
	
	@Column(name = "Codigo_Aplicacion")
	private String codAplic;
	
	@Column(name = "Nombre_Aplicacion")
	private String nombAplic;
	
	@Column(name = "Nombre_Area")
	private String nombArea;

	@Column(name = "Subarea")
	private String subArea;

	@Column(name = "Responsable_ID")
	private String resp;

	@Column(name = "Tecnologia_ID")
	private String tecn;

	@Column(name = "criticidad_id")
	private String criti;

	@Column(name = "Vol_Evol_ID")
	private String volEvol;

	@Column(name = "Vol_Usu_ID")
	private String volUsu;

	@Column(name = "Tipo_ID")
	private String tipo;

	@Column(name = "Tecnologia_Interfaz_ID")
	private String tecInt;

	public AplicacionString() {
		super();
	}

	public AplicacionString(Integer id, String codAplic, String nombAplic, String nombArea, String subArea, String resp,
			String tecn, /*String criti,*/ String volEvol, String volUsu, String tipo, String tecInt) {
		super();
		this.id = id;
		this.codAplic = codAplic;
		this.nombAplic = nombAplic;
		this.nombArea = nombArea;
		this.subArea = subArea;
		this.resp = resp;
		this.tecn = tecn;
		this.criti = "";
		this.volEvol = volEvol;
		this.volUsu = volUsu;
		this.tipo = tipo;
		this.tecInt = tecInt;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCodAplic() {
		return codAplic;
	}

	public void setCodAplic(String codAplic) {
		this.codAplic = codAplic;
	}

	public String getNombAplic() {
		return nombAplic;
	}

	public void setNombAplic(String nombAplic) {
		this.nombAplic = nombAplic;
	}

	public String getNombArea() {
		return nombArea;
	}

	public void setNombArea(String nombArea) {
		this.nombArea = nombArea;
	}

	public String getSubArea() {
		return subArea;
	}

	public void setSubArea(String subArea) {
		this.subArea = subArea;
	}

	public String getResp() {
		return resp;
	}

	public void setResp(String resp) {
		this.resp = resp;
	}

	public String getTecn() {
		return tecn;
	}

	public void setTecn(String tecn) {
		this.tecn = tecn;
	}

	public String getCriti() {
		return criti;
	}

	public void setCriti(String criti) {
		this.criti = criti;
	}

	public String getVolEvol() {
		return volEvol;
	}

	public void setVolEvol(String volEvol) {
		this.volEvol = volEvol;
	}

	public String getVolUsu() {
		return volUsu;
	}

	public void setVolUsu(String volUsu) {
		this.volUsu = volUsu;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getTecInt() {
		return tecInt;
	}

	public void setTecInt(String tecInt) {
		this.tecInt = tecInt;
	}

}
