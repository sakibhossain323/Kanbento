package com.canseesharp.kanbento;

import com.canseesharp.kanbento.entity.KanbentoUser;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class KanbentoBackendApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void passwordEncoderTest()
	{
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String password = "admin";
		String encodedPassword = passwordEncoder.encode(password);
		assertEquals(encodedPassword, password);
	}

}
