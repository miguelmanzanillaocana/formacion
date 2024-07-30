package es.seg_social.formacion.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Aplicaciones")
public class Aplicacion {

	@Id
	@Column(name = "ID_Aplicacion")
	private Integer id;

	@Column(name = "Codigo_Aplicacion")
	private String codAplic;

	@Column(name = "Nombre_Aplicacion")
	private String nombAplic;

	@Column(name = "Area_ID")
	private Integer nombArea;

	@Column(name = "Subarea_ID")
	private Integer subArea;

	@Column(name = "Responsable_ID")
	private Integer resp;

	@Column(name = "Tecnologia_ID")
	private Integer tecn;

	@Column(name = "criticidad_id")
	private Integer criti;

	@Column(name = "Vol_Evol_ID")
	private Integer volEvol;

	@Column(name = "Vol_Usu_ID")
	private Integer volUsu;

	@Column(name = "Tipo_ID")
	private Integer tipo;

	@Column(name = "Tecnologia_Interfaz_ID")
	private Integer tecInt;

	public Aplicacion() {
		super();
	}

	public Aplicacion(Integer id, String codAplic, String nombAplic, Integer nombArea, Integer subArea, Integer resp,
			Integer tecn, Integer criti, Integer volEvol, Integer volUsu, Integer tipo, Integer tecInt) {
		super();
		this.id = id;
		this.codAplic = codAplic;
		this.nombAplic = nombAplic;
		this.nombArea = nombArea;
		this.subArea = subArea;
		this.resp = resp;
		this.tecn = tecn;
		this.criti = criti;
		this.volEvol = volEvol;
		this.volUsu = volUsu;
		this.tipo = tipo;
		this.tecInt = tecInt;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	public Integer getNombArea() {
		return nombArea;
	}

	public void setNombArea(Integer nombArea) {
		this.nombArea = nombArea;
	}

	public Integer getSubArea() {
		return subArea;
	}

	public void setSubArea(Integer subArea) {
		this.subArea = subArea;
	}

	public int getResp() {
		return resp;
	}

	public void setResp(int resp) {
		this.resp = resp;
	}

	public Integer getTecn() {
		return tecn;
	}

	public void setTecn(Integer tecn) {
		this.tecn = tecn;
	}

	public int getCriti() {
		return criti;
	}

	public void setCriti(int criti) {
		this.criti = criti;
	}

	public int getVolEvol() {
		return volEvol;
	}

	public void setVolEvol(int volEvol) {
		this.volEvol = volEvol;
	}

	public int getVolUsu() {
		return volUsu;
	}

	public void setVolUsu(int volUsu) {
		this.volUsu = volUsu;
	}

	public int getTipo() {
		return tipo;
	}

	public void setTipo(int tipo) {
		this.tipo = tipo;
	}

	public int getTecInt() {
		return tecInt;
	}

	public void setTecInt(int tecInt) {
		this.tecInt = tecInt;
	}

}
