function renderizaModalKolb(n){
    switch (n){
      case 1:
        $("#tituloModal").html('');
        $("#mensagemModal").html('');
        $("#tituloLista").html('');
        $("#listaDiagrama").html('');
        $("#imgModalDiagrama").html('');
        $("#tituloModal").append("Experiência Concreta (EC)");
        $("#mensagemModal").append("Aprendizagem relacionada às situações práticas anteriormente vividas pelo indivíduo; o indivíduo faz analogias a momentos correspondentes que já vivera, executando o conhecimento adquirido com as atividades anteriores nas atividades posteriores; prefere a troca de informações com outros indivíduos para aprender pelas experiências alheias.");
        $("#tituloLista").append("São características de estudantes com o perfil de Experiência Concreta:");
        $("#listaDiagrama").append("<li>Preferir ouvir e partilhar ideias, aprendendo pela experiência concreta e pela observação reflexiva;</li> <br> <li>Ser criativos e inovadores, têm facilidade para propor alternativas, reconhecer problemas e compreender as pessoas;</li> <br> <li>Gostam de saber a importância do conteúdo que irão aprender.</li>");
  
        renderizaImgOriginal();
  
        $("#modalDiagrama").modal('toggle');
  
        modalAtual = 1;
        break;
  
      case 2:
        $("#tituloModal").html('');
        $("#mensagemModal").html('');
        $("#tituloLista").html('');
        $("#listaDiagrama").html('');
        $("#imgModalDiagrama").html('');
        $("#tituloModal").append("Observação Reflexiva (OR)");
        $("#mensagemModal").append("Aprendizagem relacionada à observação das situações no momento em que vivencia; o indivíduo pensa sobre o objeto de estudo sob diversos ângulos, evidenciando sempre diversas possibilidades de respostas para os problemas propostos e para as decisões tomadas; prefere fazer correlações entre as informações observadas com os fatos do dia a dia do que vivenciar.");
        $("#tituloLista").append("São características de estudantes com o perfil de Observação Reflexiva:");
        $("#listaDiagrama").append("<li>Integram experiência com conhecimentos já existentes;</li> <br> <li>São conceitualizadores, utilizam a dedução para resolver problemas;</li> <br> <li>Trabalham bem com muitos detalhes e dados, dando-lhes uma organização lógica;</li> <br> <li>Procuram assimilar novas ideias e pensamentos;</li> <br> <li>São mais interessados pela lógica de uma ideia do que pelo seu valor prático.</li>");
  
        renderizaImgOriginal();
  
        $("#modalDiagrama").modal('toggle');
  
        modalAtual = 2;
        break;
  
      case 3:
        $("#tituloModal").html('');
        $("#mensagemModal").html('');
        $("#tituloLista").html('');
        $("#listaDiagrama").html('');
        $("#imgModalDiagrama").html('');
        $("#tituloModal").append("Experimentação Ativa (EA)");
        $("#mensagemModal").append("Aprendizagem relacionada à experimentação, no sentido de executar atividades em que o indivíduo aprende à medida que experimenta; as experimentações ocorrem oncomitantemente às reflexões que advêm dos fatores naturais cognitivos; tende a preferir a resolução de problemas e a tomar decisões nas atividades que desenvolve.");
        $("#tituloLista").append("São características de estudantes com o perfil de Experimentação Ativa: ");
        $("#listaDiagrama").append("<li>Integram experiência com aplicação e fazem imediata aplicação da nova experiência;</li> <br> <li>Aprendem por tentativa e erro;</li> <br> <li>Altamente ativos e criativos, aceitam mudanças com facilidade;</li> <br> <li>Independentes, liderança intrínseca.</li>");
  
        renderizaImgOriginal();
  
        $("#modalDiagrama").modal('toggle');
  
        modalAtual = 3;
        break;
  
      case 4:
        $("#tituloModal").html('');
        $("#mensagemModal").html('');
        $("#tituloLista").html('');
        $("#listaDiagrama").html('');
        $("#imgModalDiagrama").html('');
        $("#tituloModal").append("Abstração Conceitual (AC)");
        $("#mensagemModal").append("Aprendizagem relacionada à produção de conhecimento por meio do pensamento crítico contínuo; o indivíduo analisa as questões que o rodeiam, enfatizando sempre a criação de teorias em cima da realidade em que vive; prefere criar hipóteses sob uma perspectiva lógica no momento da aprendizagem.");
        $("#tituloLista").append("São características de estudantes com o perfil de Conceptualização Abstrata:");
        $("#listaDiagrama").append("<li>Unem a teoria com a prática;</li> <br> <li>Utilizam tanto a abstração quanto o senso comum na aplicação prática das ideias e teorias;</li> <br> <li>Gostam de resolver problemas práticos e têm um bom desempenho nos testes convencionais;</li> <br> <li>Procuram sempre as soluções para os problemas práticos;</li> <br> <li>Combinam a dedução e a indução na resolução de problemas.</li>");
  
        renderizaImgOriginal();
  
        $("#modalDiagrama").modal('toggle');
  
        modalAtual = 4;
        break;
    }
  }