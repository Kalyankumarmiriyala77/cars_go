package com.myp.cars_go;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.myp.cars_go")
public class CarsGoApplication {
    public static void main(String[] args) {
        SpringApplication.run(CarsGoApplication.class, args);
    }
}
