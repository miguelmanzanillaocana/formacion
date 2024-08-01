package es.seg_social.formacion.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Area_Aplicacion")
public class Area {
	
	@Id
	@Column(name = "ID_Area")
	private Integer id_Area;
	
	@Column(name = "Area")
	private String area;

	public Area() {
		super();
	}

	public Area(Integer id_Area, String area) {
		super();
		this.id_Area = id_Area;
		this.area = area;
	}

	public Integer getId_Area() {
		return id_Area;
	}

	public void setId_Area(Integer id_Area) {
		this.id_Area = id_Area;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

}
