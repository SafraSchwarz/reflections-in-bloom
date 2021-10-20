package com.reflectionsinbloom.ecommerce.controllers;

import com.reflectionsinbloom.ecommerce.models.FloralProduct;
import com.reflectionsinbloom.ecommerce.services.FloralProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/floral-products")
public class FloralProductController {
    private FloralProductService floralProductService;

    @Autowired
    public FloralProductController(FloralProductService floralProductService){
        this.floralProductService = floralProductService;
    }

    @GetMapping
    public Map<String, Iterable<FloralProduct>> getAllFloralProducts(){
        Map<String, Iterable<FloralProduct>> floralProductMap = new HashMap<>();
        floralProductMap.put("floralProducts", floralProductService.findAllFloralProducts());
        return floralProductMap;
    }
}
