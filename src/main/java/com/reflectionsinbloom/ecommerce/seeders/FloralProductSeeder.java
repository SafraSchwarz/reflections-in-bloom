package com.reflectionsinbloom.ecommerce.seeders;

import com.reflectionsinbloom.ecommerce.models.FloralProduct;
import com.reflectionsinbloom.ecommerce.services.FloralProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FloralProductSeeder {
    private  FloralProductService floralProductService;

    @Autowired
    public FloralProductSeeder(FloralProductService floralProductService){
        this.floralProductService = floralProductService;
    }

    public void run(String... args) throws Exception{

        FloralProduct product1 = new FloralProduct();
        FloralProduct product2 = new FloralProduct();
        FloralProduct product3 = new FloralProduct();
        FloralProduct product4 = new FloralProduct();
        FloralProduct product5 = new FloralProduct();
        FloralProduct product6 = new FloralProduct();
        FloralProduct product7 = new FloralProduct();
        FloralProduct product8 = new FloralProduct();

        if(floralProductService.count() <= 0){
          product1.setType("hand tie");
          product1.setSeason("summer");
          product1.setPhotoUrl("https://www.reflectionsinbloom.com/uploads/1/3/2/1/132150881/s253712914428950176_p13_i4_w3024.jpeg?width=2560?width=800");
          product1.setSize("large");

          floralProductService.save(product1);

          product2.setType("bouquet");
          product2.setSeason("all");
          product2.setPhotoUrl("https://www.reflectionsinbloom.com/uploads/1/3/2/1/132150881/s253712914428950176_p3_i16_w3024.jpeg?width=2560?width=800");
          product2.setSize("small");

          floralProductService.save(product2);

          product3.setType("bouquet");
          product3.setSeason("all");
          product3.setPhotoUrl("https://www.reflectionsinbloom.com/uploads/1/3/2/1/132150881/s253712914428950176_p10_i14_w3024.jpeg?width=2560?width=800");
          product3.setSize("medium");

          floralProductService.save(product3);

          product4.setType("bouquet");
          product4.setSeason("Spring");

        }
    }
}
