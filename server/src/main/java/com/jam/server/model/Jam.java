package com.jam.server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "jams")
public class Jam {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "type")
    private String type;

    @Column(name = "flavor")
    private String flavor;

    @Column(name = "maker")
    private String maker;

    @Column(name = "price")
    private double price;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;

    public Jam(){

    }

    public Jam(String type, String flavor, String maker, Double price, String description, String image){
        this.type = type;
        this.flavor = flavor;
        this.maker = maker;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    public long getId(){
        return id;
    }

    public String getType(){
        return type;
    }

    public void setType(String type){
        this.type = type;
    }

    public String getFlavor(){
        return flavor;
    }

    public void setFlavor(String flavor){
        this.flavor = flavor;
    }

    public String getMaker(){
        return maker;
    }

    public void setMaker(String maker){
        this.maker = maker;
    }

    public double getPrice(){
        return price;
    }

    public void setPrice(double price){
        this.price = price;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;

    }

    public String getImage(){
        return image;
    }

    public void setImage(String image){
        this.image = image;
    }

    @Override
    public String toString(){
        return "Jam [id=" + id + ", type=" + type + ", maker=" + maker + ", price=" + price +", desc=" + description + "]";
    }

}
