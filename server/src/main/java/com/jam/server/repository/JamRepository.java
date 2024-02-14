package com.jam.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jam.server.model.Jam;

@Repository
public interface JamRepository extends JpaRepository<Jam, Long>{
    List<Jam> findByTypeContaining(String type);
    List<Jam> findByMakerContaining(String maker);
}