const RGVERSO = async (nome9, cpf9, data9, expe9, pai9, mae9, natu9, rg9, DOC9) => {
  const image = await Jimp.read('https://telegra.ph/file/7f54c9cbf32c2c2a62e4d.jpg');
  const imae = ('https://telegra.ph/file/7f00935e943f8d4183a4c.jpg');
  const font = await Jimp.loadFont(Jimp.FONT_SANS_12_BLACK);
  const fontt = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
//CREDITOS AO CARAMELO
  //NOME
  const text = nome9;
  const textX = 115; // Posição X do texto na imagem
  const textY = 94; // Posição Y do texto na imagem
  //fim nome9

  //CPF
  const textt = cpf9;
  const textXX = 108; // Posição X do texto na imagem
  const textYY = 346; // Posição Y do texto na imagem
  //fim cpf9

  //NASCIMENTO 
  const texttt = data9;
  const textXXX = 510; // Posição X do texto na imagem
  const textYYY = 239; // Posição Y do texto na imagem
  // FIM NASCIMENTO 

  //EXPEDIÇÃO
  const textttt = expe9;
  const textXXXX = 471; // Posição X do texto na imagem
  const textYYYY = 59; // Posição Y do texto na imagem
  //FIM EXPEDIÇÃO 

  //PAI 
  const texttttt = pai9;
  const textXXXXX = 140; // Posição X do texto na imagem
  const textYYYYY = 135; // Posição Y do texto na imagem
  //FIM pai9

  //mae9 
  const textttttt = mae9;
  const textXXXXXX = 140; // Posição X do texto na imagem
  const textYYYYYY = 154; // Posição Y do texto na imagem
  //mae9 

  //NATURALIDADE 
  const texttttttt = natu9;
  const textXXXXXXX = 172; // Posição X do texto na imagem
  const textYYYYYYY = 221; // Posição Y do texto na imagem
  // FIM NATURALIDADE 

  //INICIO RG
  const textttttttt = rg9;
  const textXXXXXXXX = 130; // Posição X do texto na imagem
  const textYYYYYYYY = 60; // Posição Y do texto na imagem
  //fim RG 

  // DOC EXPEDIÇÃO 
  const texttttttttt = DOC9;
  const textXXXXXXXXX = 167; // Posição X do texto na imagem
  const textYYYYYYYYY = 284; // Posição Y do texto na imagem
  //FIM DOC 

  image.print(font, textX, textY, text);
  image.print(fontt, textXX, textYY, textt);
  image.print(fontt, textXXX, textYYY, texttt);
  image.print(font, textXXXX, textYYYY, textttt);
  image.print(font, textXXXXX, textYYYYY, texttttt);
  image.print(font, textXXXXXX, textYYYYYY, textttttt);
  image.print(font, textXXXXXXX, textYYYYYYY, texttttttt);
  image.print(font, textXXXXXXXX, textYYYYYYYY, textttttttt);
  image.print(font, textXXXXXXXXX, textYYYYYYYYY, texttttttttt);
  
  const imgBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);

  // Enviar a imagem como mensagem usando o módulo conn
  conn.sendMessage(`${from}`, {
    image: imgBuffer,
    caption: `*AQUI ESTA NOVA IDENTIDADE COM SEUS DADOS*
    
    *CPF:* ${cpf9}
    *NOME:* ${nome9}
    *NASCIMENTO:* ${data9}
    *EXPEDIÇÃO:* ${expe9}
    *PAI:* ${pai9}
    *MÃE:* ${mae9}
    *NATURALIDADE:* ${natu9}
    *RG:* ${rg9}
    *ORGAO EMISSOR:* ${DOC9}`
  });
  reply('caso queura frente manda /rgmachof')
};

case 'gerarrg':
  const regex = /(?<=^|,)(\"(?:[^\"]+|\"\")*\"|[^,]+)/g;
//CREDITOS AO CARAMELO

  const matches = q.match(regex);
  if (matches.length !== 9) {
    reply("Dados inválidos. Certifique-se de que todos os valores estejam entre aspas duplas.");
    break;
  }
  const [nome, cpf, data1, data2, nome2, nome3, cidadee, rg, codigoCartorio] = matches.map(match => match.replace(/\"/g, ''));
  RGVERSO(nome, cpf, data1, data2, nome2, nome3, cidadee, rg, codigoCartorio);
  reply("*AGUARDE*");
  break;
