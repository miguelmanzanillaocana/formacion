package es.seg_social.formacion.authentication;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import es.seg_social.formacion.Constantes;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "users")
@Entity
public class UserModel implements UserDetails{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="fullname")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name="password")
    private String password;

    @CreationTimestamp
    @Column(name = "createdat")
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "updatedat")
    private Date updatedAt;
    
    @Column(name="aceptado")
    private Boolean aceptado;
    
    @Column(name="role")
    private String role;

	public UserModel(Integer id, String fullName, String email, String password, Date createdAt, Date updatedAt,String role) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.password = password;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.aceptado = false;
		this.role = role;
	}

	public UserModel() {
		
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		String ROLE_PREFIX = "ROLE_";
		List<GrantedAuthority> list=new ArrayList<GrantedAuthority>();
		list.add(new SimpleGrantedAuthority(ROLE_PREFIX + role));
		return list;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.email;
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
    
    @Override
    public boolean isAccountNonLocked() {
    	// TODO Auto-generated method stub
    	return true;
    }
    
    @Override
    public boolean isCredentialsNonExpired() {
    	// TODO Auto-generated method stub
    	return true;
    }
    
    @Override
    public boolean isEnabled() {
    	// TODO Auto-generated method stub
    	return true;
    }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public String getEmail() {
		return email;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Boolean getAceptado() {
		return aceptado;
	}

	public UserModel setAceptado(Boolean aceptado) {
		this.aceptado = aceptado;
		return this;
	}

	public UserModel setPassword(String password) {
		this.password = password;
		return this;
	}

	public UserModel setFullName(String fullName) {
		this.fullName = fullName;
		return this;
	}
	
	public UserModel setEmail(String email) {
		this.email = email;
		return this;
	}

	public String getRole() {
		return role;
	}

	public UserModel setRole(String role) {
		this.role = role;
		return this;
	}
    
    
}
