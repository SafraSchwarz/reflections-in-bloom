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
          product1.setEventType("n/a");
          product1.setPhotoUrl("https://www.reflectionsinbloom.com/uploads/1/3/2/1/132150881/s253712914428950176_p13_i4_w3024.jpeg?width=2560?width=800");
          product1.setSize("large");

          floralProductService.save(product1);

          product2.setType("bouquet");
          product2.setSeason("all");
          product2.setEventType("n/a");
          product2.setPhotoUrl("https://www.reflectionsinbloom.com/uploads/1/3/2/1/132150881/s253712914428950176_p3_i16_w3024.jpeg?width=2560?width=800");
          product2.setSize("small");

          floralProductService.save(product2);

          product3.setType("bouquet");
          product3.setSeason("all");
          product3.setEventType("n/a");
          product3.setPhotoUrl("https://www.reflectionsinbloom.com/uploads/1/3/2/1/132150881/s253712914428950176_p10_i14_w3024.jpeg?width=2560?width=800");
          product3.setSize("medium");

          floralProductService.save(product3);

          product4.setType("bouquet");
          product4.setSeason("Spring");
          product4.setEventType("n/a");
          product4.setPhotoUrl("https://www.reflectionsinbloom.com/uploads/1/3/2/1/132150881/s253712914428950176_p2_i29_w3024.jpeg?width=2560?width=800");
          product4.setSize("large");

          floralProductService.save(product4);

          product5.setType("wreath");
          product5.setSeason("all");
          product5.setEventType("n/a");
          product5.setPhotoUrl("https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/194009398_3997734760273822_1464765390236568283_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=973b4a&_nc_ohc=7BFkCJoO4DsAX95Plhb&_nc_ht=scontent-sea1-1.xx&oh=528208b7d56f34c6aacd535f16226215&oe=61910B5A");
          product5.setSize("medium");

          floralProductService.save(product5);

          product6.setType("arrangement");
          product6.setSeason("fall");
          product6.setEventType("halloween");
          product6.setSize("medium");
          product6.setPhotoUrl("https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/122991728_3395555683825069_722256899557176015_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=jymbx93JmigAX8OZ3Pi&_nc_ht=scontent-sea1-1.xx&oh=6eb4e5998d3c7581cc6897508e7c235f&oe=619296D1");

          floralProductService.save(product6);

          product7.setType("hand tie");
          product7.setSeason("spring");
          product7.setPhotoUrl("https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/16114209_1256374717743187_3117994552490529186_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=vncv5bZeRC0AX97RjsW&_nc_ht=scontent-sea1-1.xx&oh=b7035bde4bff400ca8fa94f12699a022&oe=6193D709");
          product7.setEventType("wedding");
          product7.setSize("large");

          floralProductService.save(product7);

          product8.setType("hand tie");
          product8.setSeason("summer");
          product8.setEventType("wedding");
          product8.setSize("medium");
          product8.setPhotoUrl("https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/16602844_1256073301106662_3429043164110603303_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=ljVTcSzp2A0AX9rsKQk&_nc_ht=scontent-sea1-1.xx&oh=56e06a9a106876944f5ebc6b7e8af87f&oe=6191BA45");

          floralProductService.save(product8);
        }
    }
}
