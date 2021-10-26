package com.caching.example

import org.apache.coyote.Response
import org.springframework.http.CacheControl
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.math.BigDecimal
import java.util.concurrent.TimeUnit

data class Bike (
    val brand: String,
    val model: String,
    val priceInEuros: BigDecimal
)

@RestController
@CrossOrigin
class ListOfBikesController {

    @GetMapping("/bikes")
    fun getListOfBikes(): ResponseEntity<List<Bike>> {
        return ResponseEntity
            .ok()
            .cacheControl(CacheControl.maxAge(2, TimeUnit.MINUTES).cachePrivate())
            .body(listOf(
                Bike(brand = "Trek", model="Roscoe 7", priceInEuros = BigDecimal("1299")),
                Bike(brand = "Giant", model="Fathom 1", priceInEuros = BigDecimal("899")),
                Bike(brand = "Canyon", model="Grand Canyon", priceInEuros = BigDecimal("1399"))
                )
            )
    }
}