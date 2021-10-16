package com.reflectionsinbloom.ecommerce.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="floral_products")
public class FloralProduct {

    @Id
    @SequenceGenerator(name = "floral_product_generator", sequenceName = "floral_products_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "floral_product_generator")
    @Column(name = "id", nullable = false,unique = true)
    private Integer id;

    @Column(name="type")
    private String type;

    @Column(name="name")
    private String name;

    @Column(name="event")
    private String event;

    @Column(name="season")
    private String season;
}
