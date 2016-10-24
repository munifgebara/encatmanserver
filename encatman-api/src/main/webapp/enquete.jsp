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
    <body>
        <h1>${enquete.titulo}</h1>
        <h2>${enquete.texto}</h2>
        <c:forEach items="${enquete.opcoes}" var="opcao">
            <h3>${opcao.texto}</h3>
        </c:forEach>
    </body>
</html>
