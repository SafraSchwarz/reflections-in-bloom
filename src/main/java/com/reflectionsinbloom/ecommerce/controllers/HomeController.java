package com.reflectionsinbloom.ecommerce.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HomeController {
  @GetMapping(value = {"/reflections-in-bloom", "/reflections-in-bloom/portfolio", "/reflections-in-bloom/contact-us"})
  public String forward() {
    return "forward:/";
  }
}
