package es.seg_social.formacion.model.aplicacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tipo_aplicacion")
public class Tipo {
	@Id
	@Column(name = "ID_Tipo")
	private Integer id;

	@Column(name = "Tipo")
	private String tipo;

	public Tipo() {
		super();
	}

	public Tipo(Integer id, String tipo) {
		super();
		this.id = id;
		this.tipo = tipo;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	
}
