package com.myp.cars_go.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String model;
    private BigDecimal pricePerDay;

    // Constructors
    public Car() {}

    public Car(String name, String model, BigDecimal pricePerDay) {
        this.name = name;
        this.model = model;
        this.pricePerDay = pricePerDay;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }

    public BigDecimal getPricePerDay() { return pricePerDay; }
    public void setPricePerDay(BigDecimal pricePerDay) { this.pricePerDay = pricePerDay; }
}
