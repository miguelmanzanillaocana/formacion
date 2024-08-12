package es.seg_social.formacion.model.situacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	private String master;
	
	@Column(name = "Version_Develop")
	private String develop;
	
	@Column(name = "Actualizado_Git")
	private Integer actualizado;
	
	@Column(name = "Version_Produccion")
	private String produccion;
	
	@ManyToOne
	@JoinColumn(name = "Despliegue_ID")
	private Despliegue despl;
	
	@Column(name = "Version_WAS")
	private Integer was;
	
	@ManyToOne
	@JoinColumn(name = "Maven_Id")
	private Maven maven;
	
	@ManyToOne
	@JoinColumn(name = "Documentacion_ID")
	private Documentacion doc;
	
	@ManyToOne
	@JoinColumn(name = "Plan_Pruebas_ID")
	private PlanPruebas pruebas;
	
	@ManyToOne
	@JoinColumn(name = "Testing_ID")
	private Testing test;
	
	@ManyToOne
	@JoinColumn(name = "Informes_ID")
	private Informes inf;
	
	@ManyToOne
	@JoinColumn(name = "Servicios_Terceros_ID")
	private ServiciosTerceros terc;
	
	

	public Situacion() {
		super();
	}

	public Situacion(Integer id, String codApli) {
		super();
		this.id = id;
		this.codApli = codApli;
		this.pro = 0;
		this.gruGit = 0;
		this.master = "";
		this.develop = "";
		this.actualizado = 0;
		this.produccion = "";
		this.despl = new Despliegue(0, "");
		this.was = 0;
		this.maven = new Maven(0, "");
		this.doc = new Documentacion(0, "");
		this.pruebas = new PlanPruebas(0, "");
		this.test = new Testing(0, "");
		this.inf = new Informes(0, "");
		this.terc = new ServiciosTerceros(0, "");
	}

	public Situacion(Integer id, String codApli, Integer pro, Integer gruGit, String master, String develop,
			Integer actualizado, String produccion, Despliegue despl, Integer was, Maven maven, Documentacion doc,
			PlanPruebas pruebas, Testing test, Informes inf, ServiciosTerceros terc) {
		super();
		this.id = id;
		this.codApli = codApli;
		this.pro = pro;
		this.gruGit = gruGit;
		this.master = master;
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

	public String getMaster() {
		return master;
	}

	public void setMaster(String master) {
		this.master = master;
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

	public Despliegue getDespl() {
		return despl;
	}

	public void setDespl(Despliegue despl) {
		this.despl = despl;
	}

	public Integer getWas() {
		return was;
	}

	public void setWas(Integer was) {
		this.was = was;
	}

	public Maven getMaven() {
		return maven;
	}

	public void setMaven(Maven maven) {
		this.maven = maven;
	}

	public Documentacion getDoc() {
		return doc;
	}

	public void setDoc(Documentacion doc) {
		this.doc = doc;
	}

	public PlanPruebas getPruebas() {
		return pruebas;
	}

	public void setPruebas(PlanPruebas pruebas) {
		this.pruebas = pruebas;
	}

	public Testing getTest() {
		return test;
	}

	public void setTest(Testing test) {
		this.test = test;
	}

	public Informes getInf() {
		return inf;
	}

	public void setInf(Informes inf) {
		this.inf = inf;
	}

	public ServiciosTerceros getTerc() {
		return terc;
	}

	public void setTerc(ServiciosTerceros terc) {
		this.terc = terc;
	}
	
}
