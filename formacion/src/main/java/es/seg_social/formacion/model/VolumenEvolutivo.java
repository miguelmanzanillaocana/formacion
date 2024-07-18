package es.seg_social.formacion.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="volumenevolutivo_aplicacion")
public class VolumenEvolutivo {
	@Id
	@Column(name = "ID_Volumen_Evolutivo")
	private Integer id;

	@Column(name = "Volumen_Evolutivo")
	private String volumenEvolutivo;

	public VolumenEvolutivo() {
		super();
	}

	public VolumenEvolutivo(Integer id, String volumenEvolutivo) {
		super();
		this.id = id;
		this.volumenEvolutivo = volumenEvolutivo;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getVolumenEvolutivo() {
		return volumenEvolutivo;
	}

	public void setVolumenEvolutivo(String volumenEvolutivo) {
		this.volumenEvolutivo = volumenEvolutivo;
	}
	
}
