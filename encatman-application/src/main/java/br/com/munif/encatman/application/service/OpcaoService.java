package br.com.munif.encatman.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.munif.encatman.application.repository.OpcaoRepository;
import br.com.munif.encatman.domain.model.Opcao;


@Service
public class OpcaoService extends GumgaService<Opcao, Long> {

	private final OpcaoRepository repository;

	@Autowired
	public OpcaoService(OpcaoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
