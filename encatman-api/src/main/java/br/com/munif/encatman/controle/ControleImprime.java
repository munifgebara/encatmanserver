package br.com.munif.encatman.controle;

import br.com.munif.encatman.application.service.EnqueteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ControleImprime {
    
    @Autowired
    private EnqueteService es;
    
    @RequestMapping("/public/{id}")
    public ModelAndView getAddress(@PathVariable Long id) {
        ModelAndView mv=new ModelAndView("/enquete.jsp");
        mv.addObject("enquete", es.loadEnqueteFat(id));
       return mv;
    }
    
    
    
}
