package com.jam.server.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jam.server.model.Jam;
import com.jam.server.repository.JamRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class JamController {
    @Autowired
    JamRepository jamRepository;

    @GetMapping("/jams")
    public ResponseEntity<List<Jam>> getAllJams(@RequestParam(required = false)String type){
        try{
            List<Jam> jams = new ArrayList<Jam>();
            if(type == null){
                jamRepository.findAll().forEach(jams::add);
            } else{
                jamRepository.findByTypeContaining(type).forEach(jams::add);
            }

            if(jams.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(jams, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/jams/{maker}")
    public ResponseEntity<List<Jam>> getJamByMaker(@PathVariable("maker") String maker){
        try{
            List<Jam> jams = new ArrayList<Jam>();
            if(maker == null){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else{
                jamRepository.findByMakerContaining(maker).forEach(jams::add);
            }
            if(jams.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(jams, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("jams/{id}")
    public ResponseEntity<Jam> getJamById(@PathVariable("id") long id){
        Optional<Jam> jamData = jamRepository.findById(id);

        if(jamData.isPresent()){
            return new ResponseEntity<>(jamData.get(), HttpStatus.OK);
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/jams")
	public ResponseEntity<Jam> createjam(@RequestBody Jam jam) {
		try {
			Jam _jam = jamRepository
					.save(new Jam(jam.getType(), jam.getFlavor(), jam.getMaker(), jam.getPrice(), jam.getDescription(), jam.getImage()));
			return new ResponseEntity<>(_jam, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

    @PutMapping("/jams/{id}")
    public ResponseEntity<Jam> updateJam(@PathVariable("id") long id, @RequestBody Jam jam){
        Optional<Jam> jamData = jamRepository.findById(id);

        if(jamData.isPresent()){
            Jam _jam = jamData.get();
            _jam.setType(jam.getType());
            _jam.setFlavor(jam.getFlavor());
            _jam.setDescription(jam.getDescription());
            _jam.setPrice(jam.getPrice());
            _jam.setMaker(jam.getMaker());
            _jam.setImage(jam.getImage());

            jamRepository.save(_jam);

            return new ResponseEntity<>(HttpStatus.OK);
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/jams/{id}")
    public ResponseEntity<HttpStatus> deleteJam(@PathVariable("id") long id){
        try{
            jamRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
