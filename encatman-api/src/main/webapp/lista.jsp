<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Encatman - Lista</title>
    </head>
    <body style="font-family: sans-serif"> 
        <h1>Lista de Enquetes</h1>
        <c:forEach items="${enquetes.values}" var="enquete">
            <a href="enquete/${enquete.id}">${enquete.id} ${enquete.texto}</a>
        </c:forEach>
    </body>
</html>
