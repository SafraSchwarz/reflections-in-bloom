package com.reflectionsinbloom.ecommerce.services;

import com.reflectionsinbloom.ecommerce.models.FloralProduct;
import com.reflectionsinbloom.ecommerce.repositories.FloralProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FloralProductService {
    private FloralProductRepository floralProductRepository;

    @Autowired
    public FloralProductService(FloralProductRepository floralProductRepository) {
        this.floralProductRepository = floralProductRepository;
    }

    public FloralProduct save(FloralProduct floralProduct){return floralProductRepository.save(floralProduct);}

    public long count() { return floralProductRepository.count();
    }
}