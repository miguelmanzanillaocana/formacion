package es.seg_social.formacion.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Aplicaciones")
public class Aplicacion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String codAplic;
	private String nombAplic;
	private String nombArea;
	private String subArea;
	private String resp;
	private String tecn;
	private String criti;
	private String volEvol;
	private String volUsu;
	private String tipo;
	private String tecInt;
	
	public Aplicacion(int id, String codAplic, String nombAplic, String nombArea, String subArea, String resp,
			String tecn, String criti, String volEvol, String volUsu, String tipo, String tecInt) {
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
