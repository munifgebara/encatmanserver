package br.com.munif.encatman.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.munif.encatman.application.repository.RespostaRepository;
import br.com.munif.encatman.domain.model.Resposta;


@Service
public class RespostaService extends GumgaService<Resposta, Long> {

	private final RespostaRepository repository;

	@Autowired
	public RespostaService(RespostaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
