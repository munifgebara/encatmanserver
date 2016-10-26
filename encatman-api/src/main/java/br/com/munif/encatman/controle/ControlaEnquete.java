package br.com.munif.encatman.controle;

import br.com.munif.encatman.application.service.EnqueteService;
import br.com.munif.encatman.application.service.OpcaoService;
import br.com.munif.encatman.application.service.RespostaService;
import br.com.munif.encatman.domain.model.Enquete;
import br.com.munif.encatman.domain.model.Opcao;
import br.com.munif.encatman.domain.model.Resposta;
import gumga.framework.core.QueryObject;
import gumga.framework.core.SearchResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ControlaEnquete {

    @Autowired
    private EnqueteService es;
    @Autowired
    private OpcaoService os;
    @Autowired
    private RespostaService rs;

    @RequestMapping("/public/enquete/{id}")
    public ModelAndView mostraUma(@PathVariable Long id) {
        ModelAndView mv = new ModelAndView("/enquete.jsp");
        mv.addObject("enquete", es.loadEnqueteFat(id));
        return mv;
    }

    @RequestMapping("/public/lista")
    public ModelAndView listaTodas() {
        ModelAndView mv = new ModelAndView("/lista.jsp");
        QueryObject qo = new QueryObject();
        qo.setPageSize(1000000);
        SearchResult<Enquete> pesquisa = es.pesquisa(qo);
        mv.addObject("enquetes", pesquisa);
        return mv;
    }

    @RequestMapping("/public/vota/{id}")
    public ModelAndView vota(@PathVariable Long id) {
        Opcao opcao = os.view(id);
        Resposta resposta=new Resposta();
        resposta.setOpcao(opcao);
        rs.save(resposta);
        ModelAndView mv = new ModelAndView("/lista.jsp");
        QueryObject qo = new QueryObject();
        qo.setPageSize(1000000);
        SearchResult<Enquete> pesquisa = es.pesquisa(qo);
        mv.addObject("enquetes", pesquisa);
        return mv;
    }

}
