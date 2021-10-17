package com.reflectionsinbloom.ecommerce.seeders;

import com.reflectionsinbloom.ecommerce.models.FloralProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder implements CommandLineRunner {
    private final FloralProductSeeder floralProductSeeder;

    @Autowired
    public MainSeeder(FloralProductSeeder floralproductseeder){
        this.floralProductSeeder = floralproductseeder;
    }

    @Override
    public void run(String... args) throws Exception {
        floralProductSeeder.run();
    }
}
