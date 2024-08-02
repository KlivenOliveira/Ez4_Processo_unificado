function afterTaskSave(colleagueId,nextSequenceId,userList){
	var WKNumState = getValue("WKNumState");
    var WKNumProces = getValue("WKNumProces") + "";
    var WKCompany = getValue("WKCompany");
    var attachments = hAPI.listAttachments();
    var attach = new Array();
    if (WKNumState == 28) {
        var emailSolic = fluigAPI.getUserService().getCurrent().getEmail();
        var numeroSolic = getValue("WKNumProces") + "";
        var nome = fluigAPI.getUserService().getCurrent().getFullName();
        var pageService = fluigAPI.getPageService().getServerURL();
        var linkSolic = pageService + "/portal/p/" + WKCompany + "/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=" + WKNumProces
        var parametros = new java.util.HashMap();
        var template = '';
       //parametros.put("numSolic", numeroSolic);
        verifySendEmail(attach, numeroSolic, linkSolic, nome, emailSolic);
    }
}
function verifySendEmail(attach, numeroSolic, linkSolic, nome, emailSolic) {
    try {    
 
        var emails = new java.util.ArrayList();
        var subject = "Solicitação";
        if (hAPI.getCardValue("XEMAIL") == "S") {
            emails.add(emailSolic);
        } else {
            emails.add("diego.mariano@ez4.com.br");
        }
        var body = ''
        var cc = [];
        var bcc = [];
        // var bccString = hAPI.getCardValue("");
        // var bcc = bccString.split(';');
        var anexos = hAPI.listAttachments();
        for (var i = 0; i < anexos.size(); i++) {
            var attachment = anexos.get(i);
            attach.push(attachment);
        }
        var x = numeroSolic;
        var y = linkSolic;
        var z = nome;
        sendMail(subject, body, emails, cc, bcc, attach, x, y, z);
    } catch (e) {
        log.info(e.message + " / Linha: " + e.lineNumber);
        var mensagem = "Mensagem: " + (!isEmpty(e.message)) ? e.message : e.toString();
        if (!isEmpty(e.lineNumber)) {
            mensagem += " | Linha: " + e.lineNumber;
        }
        throw "FALHA: " + mensagem
    }
    return true;
}
function isEmpty(value) {
    if (value == undefined || value == null || value == "") {
        return true;
    }
    return false;
}
function sendMail(assunto, conteudo, email, cc, bcc, attach, numeroSolic, linkSolic, nome) {
    var docService = fluigAPI.getDocumentService();
    var username = "microsiga@fajsaude.com.br";//"521297a81acbe0";
    var password = "Pr0th3us12_prod";//"8e043f11d6d599";
    var mailsender = "microsiga@fajsaude.com.br";//"ffb3223388-6230f0@inbox.mailtrap.io";
    var host = "smtp.office365.com";//"sandbox.smtp.mailtrap.io";
    var port = "587";
    var tmpHtml = org.jsoup.Jsoup.parse(bodyEmail(numeroSolic, linkSolic, nome));
    var props = new java.util.Properties();
    props.put("mail.debug", "true");
    props.put("mail.transport.protocol", "smtp");
    props.put("mail.host", host);
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.port", port);
    props.put("mail.smtp.starttls.enable", "true");
    var session = javax.mail.Session.getInstance(props, null);
    session.setDebug(true);
    var message = new javax.mail.internet.MimeMessage(session);
    var messageBodyPart = new javax.mail.internet.MimeBodyPart();
    var multipart = new javax.mail.internet.MimeMultipart("mixed");
    var transport = session.getTransport("smtp");
    var emailx = email;
    log.dir(emailx);
    message.setFrom(new javax.mail.internet.InternetAddress(mailsender));
    for (j = 0; j < email.size(); j++) {
        message.addRecipient(
            javax.mail.Message.RecipientType.TO,
            new javax.mail.internet.InternetAddress(email.get(j))
        );
        log.dir(message.getAllRecipients());
    }
    message.setSubject(assunto);
    if (cc && cc.length) {
        for (var i in cc) {
            message.addRecipient(
                javax.mail.Message.RecipientType.CC,
                new javax.mail.internet.InternetAddress(cc[i])
            );
        }
    }
    if (bcc && bcc.length) {
        for (var i in bcc) {
            message.addRecipient(
                javax.mail.Message.RecipientType.BCC,
                new javax.mail.internet.InternetAddress(bcc[i])
            );
        }
    }
    for (var j = 0; j < attach.length; j++) {
        var anexoId = attach[j].getDocumentId();
        var anexoDesc = attach[j].getDocumentDescription();
        var publicUrl = docService.getDownloadURL(parseInt(anexoId));
        var attachment = new javax.mail.internet.MimeBodyPart();
        attachment.setDataHandler(new javax.activation.DataHandler(new java.net.URL(publicUrl)));
        attachment.setDisposition(javax.mail.internet.MimeBodyPart.ATTACHMENT);
        attachment.setFileName(anexoDesc);
        multipart.addBodyPart(attachment);
    }
    messageBodyPart.setContent(tmpHtml.toString(), "text/html;charset=utf-8");
    multipart.addBodyPart(messageBodyPart);
    message.setContent(multipart, "text/html; charset=utf-8");
    transport.connect(host, username, password);
    transport.sendMessage(message, message.getAllRecipients())
    return true
}
function bodyEmail(numeroSolic, linkSolic, nome) {
    var titulo = "";
    var corTitulo = "";
    if (hAPI.getCardValue("XEMAIL") == "S") {
        titulo = "Solicitação bem-sucedida - ";
        corTitulo = "#30A46C";
    } else {
        titulo = "Erro na solicitação - ";
        corTitulo = "#7F0E11";
    }
var corpoEmail = '';
corpoEmail += '<!DOCTYPE html>';
corpoEmail += '<html lang="pt-br">';
corpoEmail += '<head>';
corpoEmail += '    <meta charset="UTF-8">';
corpoEmail += '    <meta name="viewport" content="width=device-width, initial-scale=1.0">';
corpoEmail += '    <title>Exibição de Dados</title>';
corpoEmail += '    <style>';
corpoEmail += '        body {';
corpoEmail += '            font-family: Arial, sans-serif;';
corpoEmail += '            background-color: #f7f7f7;';
corpoEmail += '            margin: 0;';
corpoEmail += '            padding: 20px;';
corpoEmail += '            display: flex;';
corpoEmail += '            justify-content: center;';
corpoEmail += '            align-items: center;';
corpoEmail += '            height: 100vh;';
corpoEmail += '        }';
corpoEmail += '        .container {';
corpoEmail += '            max-width: 500px;';
corpoEmail += '            background-color: #fff;';
corpoEmail += '            border-radius: 10px;';
corpoEmail += '            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);';
corpoEmail += '            padding: 40px;';
corpoEmail += '            text-align: center;';
corpoEmail += '        }';
corpoEmail += '        h1 {';
corpoEmail += '            color:' + corTitulo + ';';
corpoEmail += '            margin-bottom: 30px;';
corpoEmail += '        }';
corpoEmail += '        .dados {';
corpoEmail += '            text-align: left;';
corpoEmail += '        }';
corpoEmail += '        .dados p {';
corpoEmail += '            margin: 15px 0;';
corpoEmail += '            font-size: 16px;';
corpoEmail += '            color: #333;';
corpoEmail += '        }';
corpoEmail += '    </style>';
corpoEmail += '</head>';
corpoEmail += '<body>';
corpoEmail += '    <div class="container">';
corpoEmail += '        <h1>' + titulo + numeroSolic + '</h1>';
corpoEmail += '        <div class="dados">';
corpoEmail += '            <p><strong>Numero da Solicitação:</strong>' + numeroSolic + '</p>';
corpoEmail += '            <p><strong>Link para Solicitação:</strong>' + linkSolic + '</p>';
corpoEmail += '            <p><strong>Nome do solicitante:</strong>' + nome + '</p>';
corpoEmail += '        </div>';
corpoEmail += '    </div>';
corpoEmail += '</body>';
corpoEmail += '</html>';
return corpoEmail;

	
}