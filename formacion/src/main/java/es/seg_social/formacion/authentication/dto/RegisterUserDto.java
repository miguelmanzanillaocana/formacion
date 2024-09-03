package es.seg_social.formacion.authentication.dto;

public class RegisterUserDto {
	
	private String email;
    private String password;
    private String fullName;
    private String role;
    
    public RegisterUserDto(String email, String password, String fullName,String role) {
		this.email = email;
		this.password = password;
		this.fullName = fullName;
		this.role = role;
	}
	
	public RegisterUserDto() { }
    
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}
