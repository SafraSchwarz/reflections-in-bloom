package com.reflectionsinbloom.ecommerce.repositories;

import com.reflectionsinbloom.ecommerce.models.FloralProduct;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FloralProductRepository extends CrudRepository<FloralProduct, Integer> {
}
