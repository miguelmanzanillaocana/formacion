package es.seg_social.formacion;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

public class KeyGenerator {
	
	private RSAPublicKey pubKey;
	private RSAPrivateKey priKey;
	
	public KeyGenerator() {
		this.generate();
	}
	
	public final void generate() {
		try {
			KeyPairGenerator gen = KeyPairGenerator.getInstance("RSA");
			gen.initialize(4096);
			
			KeyPair pair = gen.generateKeyPair();
			
			this.setPublic((RSAPublicKey) pair.getPublic());
			this.setPrivate((RSAPrivateKey) pair.getPrivate());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	private void setPublic(RSAPublicKey pub) {
		this.pubKey = pub;
	}
	
	public RSAPublicKey getPublic() {
		return pubKey;
	}
	
	private void setPrivate(RSAPrivateKey pri) {
		this.priKey = pri;
	}
	
	public RSAPrivateKey getPrivate() {
		return priKey;
	}

}
