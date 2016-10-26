/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.munif.encatman.controle;


import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "GeraQRCode", urlPatterns = {"/public/geraqrcode"})
public class GeraQRCode extends HttpServlet {
    
    private final QRCodeService qRCodeService=new QRCodeService();

    @Override
    protected void doGet(HttpServletRequest requisicao, HttpServletResponse resposta) throws ServletException, IOException {
        String opcao = requisicao.getParameter("opcaoid");
        resposta.setContentType("image/png");
        OutputStream saida = resposta.getOutputStream();
        BufferedImage imagem = qRCodeService.gera("http://www.munif.com.br/encatman-api/public/vota/"+opcao);
        ImageIO.write(imagem, "PNG", saida);
    }

}