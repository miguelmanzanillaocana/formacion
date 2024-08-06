package es.seg_social.formacion.model.aplicacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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

	@ManyToOne
	@JoinColumn(name = "Area_ID")
	private Area area;

	@ManyToOne
	@JoinColumn(name = "Subarea_ID")
	private Subarea subArea;

	@ManyToOne
	@JoinColumn(name = "Responsable_ID")
	private Responsable resp;

	@ManyToOne
	@JoinColumn(name = "Tecnologia_ID")
	private Tecnologia tecn;

	@ManyToOne
	@JoinColumn(name = "criticidad_id")
	private Criticidad criti;

	@ManyToOne
	@JoinColumn(name = "Vol_Evol_ID")
	private VolumenEvolutivo volEvol;

	@ManyToOne
	@JoinColumn(name = "Vol_Usu_ID")
	private VolumenUsuarios volUsu;

	@ManyToOne
	@JoinColumn(name = "Tipo_ID")
	private Tipo tipo;

	@ManyToOne
	@JoinColumn(name = "Tecnologia_Interfaz_ID")
	private TecnologiaInterfaz tecInt;

	public Aplicacion() {
		super();
	}

	public Aplicacion(Integer id, String codAplic, String nombAplic, Area area, Subarea subArea, Responsable resp,
			Tecnologia tecn, Criticidad criti, VolumenEvolutivo volEvol, VolumenUsuarios volUsu, Tipo tipo, TecnologiaInterfaz tecInt) {
		super();
		this.id = id;
		this.codAplic = codAplic;
		this.nombAplic = nombAplic;
		this.area = area;
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

	public Area getArea() {
		return area;
	}

	public void setNombArea(Area area) {
		this.area = area;
	}

	public Subarea getSubArea() {
		return subArea;
	}

	public void setSubArea(Subarea subArea) {
		this.subArea = subArea;
	}

	public Responsable getResp() {
		return resp;
	}

	public void setResp(Responsable resp) {
		this.resp = resp;
	}

	public Tecnologia getTecn() {
		return tecn;
	}

	public void setTecn(Tecnologia tecn) {
		this.tecn = tecn;
	}

	public Criticidad getCriti() {
		return criti;
	}

	public void setCriti(Criticidad criti) {
		this.criti = criti;
	}

	public VolumenEvolutivo getVolEvol() {
		return volEvol;
	}

	public void setVolEvol(VolumenEvolutivo volEvol) {
		this.volEvol = volEvol;
	}

	public VolumenUsuarios getVolUsu() {
		return volUsu;
	}

	public void setVolUsu(VolumenUsuarios volUsu) {
		this.volUsu = volUsu;
	}

	public Tipo getTipo() {
		return tipo;
	}

	public void setTipo(Tipo tipo) {
		this.tipo = tipo;
	}

	public TecnologiaInterfaz getTecInt() {
		return tecInt;
	}

	public void setTecInt(TecnologiaInterfaz tecInt) {
		this.tecInt = tecInt;
	}

}
