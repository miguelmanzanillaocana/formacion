package es.seg_social.formacion.model.situacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "testing_situacion")
public class Testing {
	
	@Id
	@Column(name = "Id_Testing")
	private Integer id;
	
	@Column(name = "Testing")
	private String testing;
	
	public Testing() {
		super();
	}

	public Testing(Integer id, String testing) {
		super();
		this.id = id;
		this.testing = testing;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTesting() {
		return testing;
	}

	public void setTesting(String testing) {
		this.testing = testing;
	}

}
