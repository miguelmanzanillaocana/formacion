package es.seg_social.formacion.authentication;

import java.sql.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "historial")
public class Historial {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id_cambio;
	
	@ManyToOne
	@JoinColumn(name = "usuario_id")
	private UserModel usuario;
	
	@Column(name = "cambio")
	private String cambio;
	
	@CreationTimestamp
	@Column(name = "fecha")
	private Date fecha;

	public Historial(Integer id_cambio, UserModel usuario, String cambio, Date fecha) {
		super();
		this.id_cambio = id_cambio;
		this.usuario = usuario;
		this.cambio = cambio;
		this.fecha = fecha;
	}

	public Historial() {
		super();
	}

	public Integer getId_cambio() {
		return id_cambio;
	}

	public void setId_cambio(Integer id_cambio) {
		this.id_cambio = id_cambio;
	}

	public UserModel getUsuario() {
		return usuario;
	}

	public void setUsuario(UserModel usuario) {
		this.usuario = usuario;
	}

	public String getCambio() {
		return cambio;
	}

	public void setCambio(String cambio) {
		this.cambio = cambio;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

}
