package es.seg_social.formacion.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Situacion_Aplicaciones")
public class Situacion {

	@Id
	@Column(name = "ID_Situacion")
	private Integer id;
	
	@Column(name = "Codigo_Aplicacion")
	private String codApli;
	
	@Column(name = "Prosa")
	private Integer pro;
	
	@Column(name = "Grupo_GIT")
	private Integer gruGit;
	
	@Column(name = "Version_Master")
	private String naster;
	
	@Column(name = "Version_Develop")
	private String develop;
	
	@Column(name = "Actualizado_Git")
	private Integer actualizado;
	
	@Column(name = "Version_Produccion")
	private String produccion;
	
	@Column(name = "Despliegue_ID")
	private Integer despl;
	
	@Column(name = "Version_WAS")
	private Integer was;
	
	@Column(name = "Maven_Id")
	private Integer maven;
	
	@Column(name = "Documentacion_ID")
	private Integer doc;
	
	@Column(name = "Plan_Pruebas_ID")
	private Integer pruebas;
	
	@Column(name = "Testing_ID")
	private Integer test;
	
	@Column(name = "Informes_ID")
	private Integer inf;
	
	@Column(name = "Servicios_Terceros_ID")
	private Integer terc;
	
	

	public Situacion() {
		super();
	}

	public Situacion(Integer id, String codApli, Integer pro, Integer gruGit, String naster, String develop,
			Integer actualizado, String produccion, Integer despl, Integer was, Integer maven, Integer doc,
			Integer pruebas, Integer test, Integer inf, Integer terc) {
		super();
		this.id = id;
		this.codApli = codApli;
		this.pro = pro;
		this.gruGit = gruGit;
		this.naster = naster;
		this.develop = develop;
		this.actualizado = actualizado;
		this.produccion = produccion;
		this.despl = despl;
		this.was = was;
		this.maven = maven;
		this.doc = doc;
		this.pruebas = pruebas;
		this.test = test;
		this.inf = inf;
		this.terc = terc;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCodApli() {
		return codApli;
	}

	public void setCodApli(String codApli) {
		this.codApli = codApli;
	}

	public Integer getPro() {
		return pro;
	}

	public void setPro(Integer pro) {
		this.pro = pro;
	}

	public Integer getGruGit() {
		return gruGit;
	}

	public void setGruGit(Integer gruGit) {
		this.gruGit = gruGit;
	}

	public String getNaster() {
		return naster;
	}

	public void setNaster(String naster) {
		this.naster = naster;
	}

	public String getDevelop() {
		return develop;
	}

	public void setDevelop(String develop) {
		this.develop = develop;
	}

	public Integer getActualizado() {
		return actualizado;
	}

	public void setActualizado(Integer actualizado) {
		this.actualizado = actualizado;
	}

	public String getProduccion() {
		return produccion;
	}

	public void setProduccion(String produccion) {
		this.produccion = produccion;
	}

	public Integer getDespl() {
		return despl;
	}

	public void setDespl(Integer despl) {
		this.despl = despl;
	}

	public Integer getWas() {
		return was;
	}

	public void setWas(Integer was) {
		this.was = was;
	}

	public Integer getMaven() {
		return maven;
	}

	public void setMaven(Integer maven) {
		this.maven = maven;
	}

	public Integer getDoc() {
		return doc;
	}

	public void setDoc(Integer doc) {
		this.doc = doc;
	}

	public Integer getPruebas() {
		return pruebas;
	}

	public void setPruebas(Integer pruebas) {
		this.pruebas = pruebas;
	}

	public Integer getTest() {
		return test;
	}

	public void setTest(Integer test) {
		this.test = test;
	}

	public Integer getInf() {
		return inf;
	}

	public void setInf(Integer inf) {
		this.inf = inf;
	}

	public Integer getTerc() {
		return terc;
	}

	public void setTerc(Integer terc) {
		this.terc = terc;
	}
	
}
