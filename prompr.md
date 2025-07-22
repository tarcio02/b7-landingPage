Chat, ontem identificamos que o campo "Área de atuação" não estava sendo enviado corretamente para minha planilha do Google Sheets. Meu front-end está usando fetch() com Content-Type: application/x-www-form-urlencoded, mas enviando o payload diretamente com JSON.stringify(payload), o que está errado.

Quero agora aplicar a correção definitiva: usar new URLSearchParams({ dados: JSON.stringify(payload) }) no corpo da requisição, para que o Apps Script consiga ler com e.parameter.dados.

Me ajude a atualizar meu handleSubmit() com isso, e me mostre novamente o trecho completo do fetch() corrigido.
