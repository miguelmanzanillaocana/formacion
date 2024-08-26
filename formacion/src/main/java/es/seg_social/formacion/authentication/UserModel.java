package es.seg_social.formacion.authentication;

import java.sql.Date;
import java.util.Collection;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "users")
@Entity
public class UserModel implements UserDetails{
	@Id
    @Column(name="id")
    private Integer id;

    @Column(name="fullName")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name="password")
    private String password;

    @CreationTimestamp
    @Column(name = "createdAt")
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "updatedAt")
    private Date updatedAt;
    
    @Column(name="aceptado")
    private Boolean aceptado;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of();
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

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public void setAceptado(Boolean aceptado) {
		this.aceptado = aceptado;
	}

	public void setPassword(String password) {
		this.password = password;
	}
    
    
}
