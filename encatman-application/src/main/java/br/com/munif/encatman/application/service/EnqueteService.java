package br.com.munif.encatman.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.munif.encatman.application.repository.EnqueteRepository;
import br.com.munif.encatman.domain.model.Enquete;

import br.com.munif.encatman.domain.model.Opcao;

@Service
public class EnqueteService extends GumgaService<Enquete, Long> {

	private final EnqueteRepository repository;

	@Autowired
	public EnqueteService(EnqueteRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
	@Transactional
	public Enquete loadEnqueteFat(Long id) {
		Enquete obj = repository.findOne(id);	
		
		Hibernate.initialize(obj.getOpcoes());
		
		
		return obj;
	}
}
