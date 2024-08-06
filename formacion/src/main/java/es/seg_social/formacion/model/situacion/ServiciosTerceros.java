package es.seg_social.formacion.model.situacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "serviciosterceros_situacion")
public class ServiciosTerceros {
	
	@Id
	@Column(name = "Id_Servicios_Terceros")
	private Integer id;
	
	@Column(name = "Servicios_Terceros")
	private String serviciosTerceros;
	
	public ServiciosTerceros() {
		super();
	}

	public ServiciosTerceros(Integer id, String serviciosTerceros) {
		super();
		this.id = id;
		this.serviciosTerceros = serviciosTerceros;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getServiciosTerceros() {
		return serviciosTerceros;
	}

	public void setServiciosTerceros(String serviciosTerceros) {
		this.serviciosTerceros = serviciosTerceros;
	}

}
