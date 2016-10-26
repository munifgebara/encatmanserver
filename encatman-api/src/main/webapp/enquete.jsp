<%-- 
    Document   : enquete
    Created on : 24/10/2016, 19:49:45
    Author     : munif
--%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Encatman</title>
    </head>
    <body style="font-family: sans-serif"> 
        <h1>${enquete.titulo}</h1>
        <h2>${enquete.texto}</h2>
        <c:forEach items="${enquete.opcoes}" var="opcao">
            <h2>${opcao.texto} ${opcao.votos}</h2>
            <img src="/encatman-api/public/geraqrcode?opcaoid=${opcao.id}" height="200"/>
        </c:forEach>
        <hr>
        <a href="../lista">Voltar</a>
    </body>
</html>
