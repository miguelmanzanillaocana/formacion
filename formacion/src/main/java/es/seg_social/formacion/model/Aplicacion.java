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
	
	@Column(name = "Nombre_Area")
	private String nombArea;
	
	@Column(name = "Subarea")
	private String subArea;
	
	@Column(name = "Responsable_ID")
	private Integer resp;
	
	@Column(name = "Tecnologia_ID")
	private Integer tecn;
	
	@Column(name = "Criticidad_ID")
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
	
	public Aplicacion(Integer id, String codAplic, String nombAplic, String nombArea, String subArea, Integer resp,
			Integer tecn, Integer criti, Integer volEvol, Integer volUsu, Integer tipo, Integer tecInt) {
		super();
		this.id = id;
		this.codAplic = codAplic;
		this.nombAplic = nombAplic;
		this.nombArea = nombArea;
		this.subArea = subArea;
		
		if (resp == null) resp = 0;
		this.resp = resp;
		
		this.tecn = tecn;
		
		if (criti == null) criti = 0;
		this.criti = criti;
		
		if (volEvol == null) volEvol = 0;
		this.volEvol = volEvol;
		
		if (volUsu == null) volUsu = 0;
		this.volUsu = volUsu;
		
		if (tipo == null) volUsu = 0;
		this.tipo = tipo;
		
		if (tecInt == null) tecInt = 0;
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
