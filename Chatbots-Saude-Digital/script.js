    const fullContent = {
    pt: {
        resumo: `
            <p>O presente artigo analisa comparativamente as seguintes plataformas de chatbots aplicadas à saúde digital: Ada Health, Molly (Sensely) e Symptomate. Utilizando uma abordagem qualitativa, exploratória e bibliográfica, o estudo avalia aspectos técnicos, clínicos e de experiência do usuário por meio de critérios como precisão diagnóstica, conformidade com a Lei Geral de Proteção de Dados (LGPD), satisfação dos usuários, acessibilidade técnica e compreensão de linguagem natural. Os resultados indicam que a Ada Health se destaca pela robustez científica e aceitação do público, a Molly pela abordagem humanizada com avatar interativo voltado ao monitoramento de doenças crônicas, e o Symptomate pela simplicidade e eficiência na triagem inicial de sintomas. A análise revela que, embora os chatbots ampliem o acesso e otimizem o atendimento em saúde, ainda enfrentam desafios relacionados à privacidade, personalização e usabilidade. Conclui-se que essas ferramentas possuem grande potencial para complementar o cuidado médico, desde que sua implementação observe aspectos éticos, técnicos e regulatórios.</p>
            <div class="keywords"><strong>Palavras-chave:</strong> Chatbot; Inteligência Artificial; Internet; LGPD; Saúde.</div>
        `,
        
        introducao: `<p>De acordo com Cardoso (2024), a evolução tecnológica tem impulsionado inovações em diversas áreas, e a saúde tem sido uma das mais beneficiadas por essas transformações. A incorporação de novas tecnologias tem proporcionado avanços significativos na eficiência do atendimento médico e na experiência dos pacientes. Ferramentas como inteligência artificial, realidade aumentada e automação têm desempenhado um papel crucial nesse processo, melhorando a qualidade do atendimento, a precisão dos diagnósticos e a agilidade nos tratamentos.</p>
        <p>Os chatbots, que são programas de inteligência artificial capazes de interagir com usuários por meio de mensagens automatizadas, surgem como uma solução inovadora para fornecer suporte contínuo e personalizado aos pacientes. Oferecendo respostas rápidas e eficazes sobre sintomas, medicamentos e tratamentos, esses sistemas revolucionam a prestação de serviços de saúde. Eles contribuem para a redução de custos operacionais, otimizam o uso dos recursos humanos e permitem que os profissionais de saúde se concentrem em casos mais complexos, demonstrando o potencial das tecnologias emergentes na transformação da saúde.</p>
        <p>Esses sistemas já estão transformando o atendimento médico ao oferecer suporte acessível, automatizado e contínuo aos pacientes, como afirmado por Laurentys (2025). A interação em tempo real proporcionada por eles é especialmente valiosa em contextos em que a rapidez no atendimento é crucial.</p>
        <p>Apesar dos avanços proporcionados pelos chatbots a implementação deles enfrenta desafios significativos. A segurança dos dados pessoais é uma preocupação central, já que sistemas baseados em inteligência artificial podem aumentar a exposição a riscos de segurança e privacidade, como destaca Topol (2019). Além disso, embora os chatbots forneçam respostas rápidas, podem enfrentar dificuldades ao interpretar sintomas mais complexos, o que pode levar a diagnósticos imprecisos ou orientações inadequadas. A resistência de pacientes e profissionais de saúde em adotar essas tecnologias também é um obstáculo, devido à confiança na precisão das informações e receios sobre a substituição do contato humano no atendimento.</p>
        <p>Este artigo visa comparar chatbots Ada Health, Molly e Symptomate, que, embora compartilhem semelhanças, apresentam características únicas em suas abordagens. A escolha por essas ferramentas se deu com base na relevância de suas implementações e na disponibilidade de documentação técnica detalhada. Ao analisar suas operações no atendimento médico, busca-se entender como essas tecnologias estão transformando a prestação de serviços de saúde, tornando-os mais eficientes, acessíveis e centrados no paciente.</p>`,
        
        metodologia: `<p>A pesquisa desse artigo adota uma abordagem <strong>qualitativa, exploratória e bibliográfica</strong>, com ênfase no levantamento, análise e comparação de três assistentes virtuais utilizados na saúde: Molly (Sensely), Symptomate e Ada Health.</p>
        <p>Para isso, foram consultadas fontes primárias e secundárias, como plataformas especializadas em divulgação científica, como PubMed, ScienceDirect e BMJ Open, além de fontes jornalísticas, como Forbes, TechCrunch, MedCity News e Medicina S/A. As informações extraídas abrangem aspectos essenciais, como seus mecanismos de funcionamento, eficácia clínica, estudos comparativos, e avaliações sobre a acessibilidade dos sistemas.</p>
        <p>Os critérios para analisar os diferentes aspectos de atuação das plataformas citadas anteriormente no contexto da saúde digital foram:</p>
        <ul>
            <li><strong>Precisão e Efetividade Clínica:</strong> a análise será fundamentada em estudos científicos disponíveis em bases como PubMed e Google Scholar, que trazem validações clínicas, comparações diagnósticas e eficácia em triagem médica;</li>
            <li><strong>Segurança e Privacidade:</strong> para avaliar a conformidade com a Lei Geral de Proteção de Dados (LGPD), será utilizado a ferramenta de auditoria digital Webbkoll, que verifica práticas de coleta de dados, ausência de política de privacidade visível e envio de informações a terceiros;</li>
            <li><strong>Satisfação do Usuário:</strong> a percepção dos usuários será investigada por meio da análise das avaliações públicas nas lojas de aplicativos (App Store ou Google Play), considerando notas atribuídas, comentários frequentes e número de downloads, a fim de identificar padrões de aceitação e críticas recorrentes;</li>
            <li><strong>Acessibilidade:</strong> será avaliado através das ferramentas Google Lighthouse que dá um panorama quantitativo e técnico da acessibilidade que afetam diretamente a navegação de pessoas com deficiência;</li>
            <li><strong>Compreensão de Linguagem Natural:</strong> serão realizados testes empíricos com os assistentes virtuais, aplicando a técnica do “Golden Set”, que consiste na criação de um conjunto padronizado de perguntas para todos os chatbots. Os testes incluirão frases com erros ortográficos, uso de gírias, perguntas ambíguas e reformulações. A análise buscará identificar falhas de interpretação, coerência das respostas e capacidade de reconhecer a intenção do usuário.</li>
        </ul>`,
        
        referencial: `<p>Os “bots”, ou robôs de software, são sistemas automatizados desenvolvidos para executar tarefas de forma autônoma. Um dos tipos mais conhecidos são os chatbots, projetados para interagir com os usuários por meio da linguagem natural, seja por texto ou voz. Segundo Mauldin (1994), os primeiros bots foram criados para simular conversas humanas em interfaces simples, mas com a evolução da inteligência artificial e do processamento de linguagem natural, tornaram-se ferramentas sofisticadas e realistas.</p>
        <p>Na área da saúde, os chatbots têm ganhado destaque como soluções tecnológicas capazes de otimizar processos, ampliar o acesso à informação e oferecer um atendimento contínuo. Essas ferramentas desempenham o papel de assistentes virtuais, ajudando a preencher a lacuna de comunicação entre pacientes e profissionais da saúde, atuando como uma ponte entre eles. Um estudo publicado pela Inbenta (2022) destaca que, com a tecnologia de inteligência artificial, os chatbots são capazes de responder com maior rapidez e eficiência por meio de interfaces conversacionais e, em alguns casos, de forma mais eficaz do que um assistente humano. Assim, quando bem implementados, os chatbots podem reduzir o tempo de espera, melhorar a eficiência do atendimento e aumentar a satisfação dos usuários.</p>
        <p>Plataformas de inteligência artificial como Ada Health, Molly (Sensely) e Symptomate têm sido adotadas por instituições hospitalares para atender grandes volumes de usuários com segurança e agilidade, demonstrando a escalabilidade e a confiabilidade desses sistemas quando integrados a bases de dados médicas estruturadas. Embora apresentem abordagens distintas, essas plataformas compartilham funções essenciais, como a triagem de sintomas por meio de perguntas estruturadas, semelhante ao processo médico, o agendamento de consultas, o monitoramento remoto, a orientação em cuidados de saúde e a geração de diagnósticos preliminares.</p>
        
        <h3>SENSELY (MOLLY)</h3>
        <p>A plataforma Sensely possui uma enfermeira virtual chamada Molly desenvolvida em 2013 para reduzir a sobrecarga no sistema de saúde, que combina inteligência artificial e um avatar interativo e visa oferecer um atendimento mais humanizado, especialmente em sistemas com grande demanda. A maior motivação para a criação dessa ferramenta, de acordo com a página web Sensely, foi melhorar a experiência do paciente com uma abordagem personalizada e ágil. A Molly coleta informações por meio de texto, voz, imagens e vídeos, analisando sintomas e histórico médico, e então orientando os próximos passos. Ela colabora com instituições como o Serviço Nacional de Saúde do Reino Unido e a Mayo Clinic, uma organização da área de pesquisas médico-hospitalares que visa expandir os recursos da assistente virtual fornecendo orientações de saúde aos usuários.</p>
        
        <h3>SYMPTOMATE</h3>
        <p>Fundado em 2012 pela empresa polonesa Infermedica, o chatbot Symptomate utiliza aprendizado de máquina e algoritmos baseados em redes neurais para avaliar sintomas relatados pelos usuários por meio de uma entrevista digital, identificando possíveis causas e oferecendo orientações sobre tratamentos ou a necessidade de cuidados médicos. Esse chatbot é utilizado por diversas organizações, como seguradoras e hospitais, para aprimorar a triagem médica inicial e auxiliar pacientes na decisão sobre procurar atendimento imediato. Um exemplo é a eVisit, plataforma de cuidados virtuais que integrou a API do Symptomate ao seu sistema, permitindo a triagem automática de sintomas antes das consultas.</p>
        
        <h3>ADA HEALTH</h3>
        <p>Já o Ada Health, criado em 2011 por Claire Novorol, Daniel Nathrath e Martin Hirsch, integra suas tecnologias a iniciativas de autocuidado e educação em saúde. A ideia surgiu a partir de dificuldades de diagnóstico enfrentadas por um familiar de um dos fundadores, o que levou à criação de uma plataforma para o público em geral. O Ada Health, reconhecido pela precisão no diagnóstico, já firmou parcerias com hospitais como o Jefferson Health, nos Estados Unidos e colabora com empresas farmacêuticas como Bayer e Pfizer, segundo o site oficial da Ada Health (2025). Por exemplo, a parceria com a Bayer permite que usuários acessem a plataforma da Ada através dos sites de produtos como aspirina e Aleve. A plataforma é baseada em redes neurais e aprendizado de máquina, e foi treinada com mais de 50 milhões de interações reais.</p>
        <p>Em síntese, os chatbots representam uma inovação promissora para o setor da saúde, proporcionando maior acesso, agilidade e eficiência no atendimento aos usuários. Entretanto, para que essas ferramentas atinjam seu potencial máximo, é fundamental garantir a qualidade das bases de dados utilizadas, a validação clínica dos sistemas e a proteção da privacidade dos pacientes.</p>`,
        
        resultados: `<p>A validação clínica das plataformas Ada Health, Molly (Sensely) e Symptomate evidencia abordagens distintas em termos de rigor científico e aplicação prática, refletindo seus focos e objetivos no setor da saúde. Como detalhado no quadro 1, essas plataformas têm bases de treinamento variadas e níveis diferentes de evidência científica, o que impacta diretamente sua precisão diagnóstica e efetividade clínica.</p>
        
        <h3>Quadro 1 – Precisão e Efetividade Clínica (Via artigos publicados)</h3>
        <table>
            <thead>
                <tr><th>Plataforma</th><th>Base de Treinamento</th><th>Estudos Científicos</th><th>Exemplo de Efetividade Clínica</th></tr>
            </thead>
            <tbody>
                <tr><td>Ada Health</td><td>+50 milhões de interações médicas reais</td><td>70% de acerto entre os 3 principais diagnósticos e desempenho semelhante a clínicos gerais</td><td>Ajudou a identificar apendicite e acelerar triagens em programas corporativos</td></tr>
                <tr><td>Molly (Sensely)</td><td>Protocolos clínicos + IA com feedback contínuo</td><td>85% de efetividade em insuficiência cardíaca</td><td>Reduziu hospitalizações em pacientes crônicos com monitoramento remoto</td></tr>
                <tr><td>Symptomate</td><td>Guidelines e dados clínicos simulados</td><td>Precisão em casos simples como faringite e ITU</td><td>Ajudou a identificar dengue e doenças infecciosas em regiões tropicais</td></tr>
            </tbody>
        </table>
        <div class="table-source"><strong>Fonte:</strong> Autores (2025)</div>
        
        <p>Ada Health destaca-se por sua robustez científica, com estudos revisados por pares publicados em periódicos de alto impacto, como BMJ e Nature Digital Medicine, indicando até 70% de acerto nos diagnósticos mais comuns — desempenho comparável ao de médicos clínicos, reforçando seu potencial no apoio a decisões médicas complexas. Em contraste, Molly (Sensely) foca no monitoramento remoto de pacientes crônicos, validado por protocolos do Serviço Nacional de Saúde do Reino Unido, que demonstram 85% de efetividade na gestão de condições como insuficiência cardíaca (Telemedicine and e-Health, 2020), evidenciando relevância prática em cuidados contínuos. Já o Symptomate, voltado para triagens de doenças específicas como as tropicais, apresenta eficácia clínica notável, com precisão diagnóstica similar à médica em casos como faringite e infecções urinárias (JMIR, 2022), ressaltando sua utilidade em contextos endêmicos e emergenciais. Esses resultados indicam diferentes nichos de atuação e níveis de maturidade clínica, destacando a importância de análises específicas para cada contexto de uso.</p>
        
        <p>A segurança e a privacidade dos dados são aspectos cruciais para plataformas de saúde digital, especialmente diante das exigências da Lei Geral de Proteção de Dados (LGPD). A proteção adequada dessas informações é fundamental para garantir a confiança dos usuários e prevenir possíveis danos decorrentes do uso inadequado de dados sensíveis. Conforme demonstrado no quadro 2, as plataformas analisadas apresentam abordagens distintas em relação à coleta de dados pessoais, como informações clínicas, registros de voz e até imagens, além de variações significativas no compartilhamento com terceiros e na transparência das políticas.</p>
        
        <h3>Quadro 2 – Segurança e Privacidade (LGPD - via Webbkoll)</h3>
        <table>
            <thead>
                <tr><th>Plataforma</th><th>Coleta de Dados Pessoais</th><th>Compartilhamento com Terceiros</th><th>Política e Consentimento</th><th>Inconformidades Identificadas</th><th>Cookies</th></tr>
            </thead>
            <tbody>
                <tr><td>Ada Health</td><td>Nome, idade, sintomas, localização</td><td>Sim (Google Analytics, Meta Pixel)</td><td>Política técnica e pouco acessível</td><td>Rastreia dados antes do consentimento</td><td>2 de terceiros, sem bloqueio inicial</td></tr>
                <tr><td>Molly (Sensely)</td><td>Dados clínicos, voz, imagem</td><td>Sim (AWS, Twilio, Analytics)</td><td>Limitada e só em inglês</td><td>Coleta sensível sem aviso explícito</td><td>4 ativos antes do consentimento</td></tr>
                <tr><td>Symptomate</td><td>Sintomas, idade, sexo</td><td>Google (Limitado)</td><td>Política clara, em português</td><td>Estrutura simples sem chamadas a terceiros na homepage</td><td>Uso de cookies, bloqueados até interação (8 no total)</td></tr>
            </tbody>
        </table>
        <div class="table-source"><strong>Fonte:</strong> Autores (2025)</div>
        
        <p>Enquanto a Ada Health e a Molly (Sensely) utilizam ferramentas de rastreamento antes da obtenção do consentimento, o Symptomate se destaca por uma estrutura mais simplificada e alinhada aos princípios da LGPD. A análise comparativa realizada evidencia essas diferenças, particularmente no que diz respeito à clareza das políticas, à conformidade legal e à presença de vulnerabilidades potencialmente críticas. Já o Symptomate adota medidas como o bloqueio inicial de cookies e um escopo limitado de compartilhamento com terceiros (apenas Google básico), as outras plataformas demonstram inconformidades com a LGPD, como: Molly (Sensely): Coleta de dados sensíveis (voz e imagem) sem aviso explícito e uso de quatro cookies ativos antes do consentimento, expondo os usuários a potenciais violações. Ada Health: Rastreamento prévio de dados (via Google Analytics e Meta Pixel) e políticas de privacidade complexas, dificultando a compreensão do usuário sobre como suas informações são tratadas. Essas diferenças não apenas refletem níveis distintos de conformidade com a LGPD, mas também impactam diretamente a confiança do usuário – fator essencial em plataformas de saúde digital, onde a sensibilidade dos dados exige máxima transparência e controle.</p>
        
        <p>A satisfação dos usuários é um importante meio para avaliar a eficácia e a adoção de plataformas digitais de saúde. As avaliações nas lojas de aplicativos (App Store e Google Play) de Ada Health, Molly (Sensely) e Symptomate revelam não apenas a percepção geral de cada uma, mas também padrões recorrentes que moldam a experiência prática — de interfaces intuitivas a falhas operacionais. O quadro 3 sintetiza esses dados, cruzando métricas como nota média, volume de avaliações, estimativa de downloads e os principais feedbacks.</p>
        
        <h3>Quadro 3 – Satisfação do Usuário via App Store e Google Play</h3>
        <table>
            <thead>
                <tr><th>Plataforma</th><th>Nota Média</th><th>Nº de Avaliações</th><th>Downloads Estimados</th><th>Elogios Frequentes</th><th>Críticas Frequentes</th></tr>
            </thead>
            <tbody>
                <tr><td>Ada Health</td><td>4.9 ★ (iOS)<br>4.7 ★ (Android)</td><td>+5 mil</td><td>+2 milhões</td><td>Interface intuitiva, diagnósticos rápidos, sensação de apoio profissional</td><td>Perguntas repetitivas, falta de integração com médicos locais</td></tr>
                <tr><td>Molly (Sensely)</td><td>4.6 ★ (iOS)<br>4.3 ★ (Android)</td><td>219 avaliações</td><td>+10 mil</td><td>Avatar humanizado, sensação de conversa real, útil para doenças crônicas</td><td>Respostas lentas, bugs, indisponibilidade regional</td></tr>
                <tr><td>Symptomate</td><td>4.7 ★ (iOS)<br>4.3 ★ (Android)</td><td>+10 mil</td><td>+500 mil</td><td>Simples, rápido, orientações claras, app leve</td><td>Pouca personalização, sem histórico de sintomas</td></tr>
            </tbody>
        </table>
        <div class="table-source"><strong>Fonte:</strong> Autores (2025)</div>
        
        <p>A performance técnica das plataformas digitais de saúde desempenha papel essencial na garantia da usabilidade, segurança e qualidade da experiência do usuário. No contexto dos chatbots analisados, a avaliação de aspectos como acessibilidade, velocidade de carregamento, estabilidade visual e conformidade com boas práticas web permite identificar limitações técnicas que podem impactar negativamente sua adoção e eficácia. O quadro 4 apresenta uma análise comparativa desses elementos, baseada em testes realizados em dispositivos computador e celular, segundo os critérios da ferramenta Google Lighthouse e dos Core Web Vitals — um conjunto de indicadores definidos pelo Google para mensurar a experiência do usuário em páginas da web.</p>
        
        <h3>Quadro 4 – Acessibilidade segundo o Google Lighthouse</h3>
        <table>
            <thead>
                <tr><th>Plataforma</th><th>Dispositivo</th><th>Acessibilidade</th><th>Desempenho</th><th>Práticas Recomendadas</th><th>SEO</th><th>Core Web Vitals (LCP / INP / CLS)</th></tr>
            </thead>
            <tbody>
                <tr><td rowspan="2">Ada Health</td><td>Computador</td><td>96</td><td>98</td><td>93</td><td>100</td><td>LCP: 1.6s / INP: 51ms / CLS: 0.11</td></tr>
                <tr><td>Celular</td><td>96</td><td>79</td><td>100</td><td>100</td><td>LCP: 2.2s / INP: 130ms / CLS: 0.09</td></tr>
                <tr><td rowspan="2">Molly (Sensely)</td><td>Computador</td><td>76</td><td>75</td><td>100</td><td>77</td><td>LCP: 3.2s / INP: 79ms / CLS: 0.01</td></tr>
                <tr><td>Celular</td><td>79</td><td>71</td><td>100</td><td>77</td><td>LCP: 3.2s / INP: 271ms / CLS: 0.08</td></tr>
                <tr><td rowspan="2">Symptomate</td><td>Computador</td><td>65</td><td>90</td><td>100</td><td>92</td><td>LCP: 3.4s / INP: 76ms / CLS: 0.05</td></tr>
                <tr><td>Celular</td><td>60</td><td>90</td><td>100</td><td>92</td><td>LCP: 4s / INP: 195ms / CLS: 0.32</td></tr>
            </tbody>
        </table>
        <div class="table-source"><strong>Fonte:</strong> Autores (2025)</div>
        
        <p>A partir dos dados apresentados na Tabela 4, observam-se contrastes significativos entre as plataformas no que diz respeito à performance técnica e à experiência do usuário. Ada Health se destaca com métricas altamente positivas em computadores e celulares, apresentando indicadores dentro dos limites recomendados e boa usabilidade geral. Apesar de um leve CLS elevado no desktop, que indica certa instabilidade no layout, os tempos de carregamento e responsividade permanecem satisfatórios, reforçando a maturidade técnica da plataforma. Molly (Sensely), por outro lado, embora mantenha boa pontuação em acessibilidade e práticas recomendadas, sofre com LCP elevado tanto em desktop quanto em mobile, o que representa demora no carregamento do conteúdo principal. Essa lentidão, somada ao atraso perceptível nas interações em dispositivos móveis, compromete a fluidez da navegação. Por fim, o Symptomate apresenta o pior desempenho geral: além de LCP acima do ideal, prejudicando a experiência do usuário, o CLS no celular é consideravelmente alto, o que indica instabilidade visual significativa.</p>
        
        <p>Já a análise da capacidade de compreensão da linguagem natural pelas plataformas, conforme detalhado no quadro 5, revela nuances importantes sobre a qualidade da interação entre usuário e chatbot. A capacidade de compreender a linguagem natural dos usuários é um dos principais desafios para plataformas digitais de saúde, especialmente em contextos informais ou ambíguos. Usabilidade, flexibilidade conversacional e precisão na interpretação das intenções são fatores essenciais para uma experiência eficaz e segura.</p>
        
        <h3>Quadro 5 – Compreensão de Linguagem Natural (Método Golden Set)</h3>
        <table>
            <thead>
                <tr><th>Plataforma</th><th>Tolerância a Gírias e Erros</th><th>Interpretação de Perguntas Ambíguas</th><th>Capacidade de Reformulação de Diálogo</th><th>Identificação Correta da Intenção</th></tr>
            </thead>
            <tbody>
                <tr><td>Ada Health</td><td>Alta</td><td>Regular</td><td>Alta</td><td>Alta</td></tr>
                <tr><td>Molly (Sensely)</td><td>Média</td><td>Baixa</td><td>Média</td><td>Média</td></tr>
                <tr><td>Symptomate</td><td>Alta</td><td>Alta</td><td>Alta</td><td>Alta</td></tr>
            </tbody>
        </table>
        <div class="table-source"><strong>Fonte:</strong> Autores (2025)</div>
        
        <p>A análise do quadro 5 mostra que o Symptomate se destaca na compreensão de linguagem natural, demonstrando alta tolerância a gírias, erros ortográficos e perguntas ambíguas. Expressões informais como “tô ruim” ou frases vagas como “acho que tô com dengue ou virose” são bem interpretadas, garantindo continuidade no atendimento. O Ada Health apresenta desempenho regular em ambiguidade, mas reconhece variações como “dor de barriga” e corrige erros como “cabesa” para “cabeça”, mantendo boa fluidez. Já o Molly (Sensely) tem dificuldades nesse aspecto, exigindo frases mais diretas; expressões genéricas resultam em respostas vagas e pouco úteis. Em termos de reformulação do diálogo, Ada Health e Symptomate se mostram mais adaptáveis às interações do usuário, enquanto Molly enfrenta limitações que afetam a naturalidade da conversa. Na identificação de intenções, todas têm desempenho funcional, mas Ada Health e Symptomate demonstram maior precisão, inclusive com linguagem informal.</p>`,
        
        consideracoes: `<p>A análise comparativa dos chatbots Ada Health, Molly (Sensely) e Symptomate comprovou que essas ferramentas têm grande potencial para transformar o atendimento na saúde, oferecendo triagens ágeis, suporte clínico inicial e acessibilidade aos usuários. Dentre as soluções avaliadas, o Ada Health se destacou como o chatbot mais completo, combinando alta precisão diagnóstica, validação científica robusta, ótima experiência de uso e ampla aceitação do público. Embora Molly ofereça um diferencial humanizado por meio de avatar interativo e a Symptomate apresente forte desempenho em linguagem natural e conformidade com a LGPD, ambos ainda enfrentam limitações em desempenho técnico e/ou privacidade. Conclui-se que o Ada Health é a opção mais equilibrada e eficaz entre as analisadas, sendo indicado como modelo para futuras aplicações de inteligência artificial na saúde. Recomenda-se que novas implementações priorizem a segurança dos dados, validação clínica contínua e foco na experiência do paciente para garantir impacto positivo e ético no setor, promovendo também maior acessibilidade e personalização do atendimento digital.</p>`,
        
referencias: `<div class="references-container">
    <div class="references-grid">
        <div class="reference-item">
            <div class="ref-authors">ADA HEALTH.</div>
            <div class="ref-title">How Ada works.</div>
            <div class="ref-year">2025.</div>
            <div class="ref-source">Disponível em: <a href="https://ada.com/pt/" target="_blank" rel="noopener noreferrer">https://ada.com/pt/</a></div>
            <div class="ref-access">Acesso em: 12 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ADAMS, K.</div>
            <div class="ref-title">Ada Health deploys its symptom assessment care navigation tech across Jefferson Health.</div>
            <div class="ref-source">MedCity News, 2023.</div>
            <div class="ref-source">Disponível em: <a href="https://medcitynews.com/2023/04/ada-health-deploys-its-symptomassessment-care-navigation-tech-across-jefferson-health/" target="_blank" rel="noopener noreferrer">https://medcitynews.com</a></div>
            <div class="ref-access">Acesso em: 9 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ALOWAIS, S. A.; SHUROUG, S.</div>
            <div class="ref-title">Revolucionando a saúde: o papel da inteligência artificial na prática clínica.</div>
            <div class="ref-source">BMC Medical Education, 2023.</div>
            <div class="ref-source">Disponível em: <a href="https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-023-04698z#citeas" target="_blank" rel="noopener noreferrer">https://bmcmededuc.biomedcentral.com</a></div>
            <div class="ref-access">Acesso em: 25 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ARMITAGE, H.</div>
            <div class="ref-title">Physician decision chatbot.</div>
            <div class="ref-source">Stanford Medicine, 2025.</div>
            <div class="ref-source">Disponível em: <a href="https://med.stanford.edu/news/all-news/2025/02/physiciandecision-chatbot.html" target="_blank" rel="noopener noreferrer">https://med.stanford.edu</a></div>
            <div class="ref-access">Acesso em: 13 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BENIS, A. I.</div>
            <div class="ref-title">The use of chatbots in health care: a review of literature.</div>
            <div class="ref-source">JMIR Medical Informatics, v. 8, n. 4, 2020.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BMJ OPEN.</div>
            <div class="ref-title">Comparison of symptom checkers triage performance in primary care.</div>
            <div class="ref-source">BMJ Open, v. 10, n. 4, 2020.</div>
            <div class="ref-source">Disponível em: <a href="https://bmjopen.bmj.com/" target="_blank" rel="noopener noreferrer">https://bmjopen.bmj.com/</a></div>
            <div class="ref-access">Acesso em: 18 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">BRAZ, J.</div>
            <div class="ref-title">Como os chatbots podem auxiliar pacientes e profissionais da área de saúde.</div>
            <div class="ref-source">Correio da Amazônia, 2018.</div>
            <div class="ref-source">Disponível em: <a href="https://correiodaamazonia.com/como-os-chatbots-podem-auxiliarpacientes-e-profissionais-da-area-de-saude/" target="_blank" rel="noopener noreferrer">https://correiodaamazonia.com</a></div>
            <div class="ref-access">Acesso em: 14 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">CHATFUEL.</div>
            <div class="ref-title">Medical AI chatbots.</div>
            <div class="ref-source">Chatfuel, 2024.</div>
            <div class="ref-source">Disponível em: <a href="https://chatfuel.com/pt/blog/medical-ai-chatbots" target="_blank" rel="noopener noreferrer">https://chatfuel.com</a></div>
            <div class="ref-access">Acesso em: 13 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">CHUDLEIGH, S.</div>
            <div class="ref-title">Melhores chatbots de IA médica.</div>
            <div class="ref-source">Botpress, 2025.</div>
            <div class="ref-source">Disponível em: <a href="https://botpress.com/pt/blog/top-health-chatbots" target="_blank" rel="noopener noreferrer">https://botpress.com</a></div>
            <div class="ref-access">Acesso em: 20 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">FUTURO DA SAÚDE.</div>
            <div class="ref-title">Ada Health cresce no mercado de saúde digital ao levantar US$ 30 milhões para aplicativo de diagnóstico.</div>
            <div class="ref-source">Futuro da Saúde, 2022.</div>
            <div class="ref-source">Disponível em: <a href="https://futurodasaude.com.br/ada-health-cresce-no-mercadode-saude-digital-ao-levantar-us-30-milhoes-para-aplicativo-dediagnostico/" target="_blank" rel="noopener noreferrer">https://futurodasaude.com.br</a></div>
            <div class="ref-access">Acesso em: 8 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">INBENTA.</div>
            <div class="ref-title">Benefícios dos chatbots na área de saúde: 9 casos de uso.</div>
            <div class="ref-source">Inbenta, 2022.</div>
            <div class="ref-source">Disponível em: <a href="https://www.inbenta.com/pt-br/articles/benefits-of-chatbots-in-healthcare-9-use-cases-of-healthcare-chatbots/" target="_blank" rel="noopener noreferrer">https://www.inbenta.com</a></div>
            <div class="ref-access">Acesso em: 10 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">MAULDIN, M.</div>
            <div class="ref-title">ChatterBots, TinyMUDs, and the Turing Test: entering the Loebner Prize competition.</div>
            <div class="ref-source">In: Proceedings of the National Conference on Artificial Intelligence. 1994. p. 16–21.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">MORDOR INTELLIGENCE.</div>
            <div class="ref-title">Digital assistants in healthcare market.</div>
            <div class="ref-source">Mordor Intelligence, 2024.</div>
            <div class="ref-source">Disponível em: <a href="https://www.mordorintelligence.com/pt/industry-reports/digital-assistantsin-healthcare-market" target="_blank" rel="noopener noreferrer">https://www.mordorintelligence.com</a></div>
            <div class="ref-access">Acesso em: 16 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">OHR, T.</div>
            <div class="ref-title">Ada Health secures €40 million of funding to improve access to healthcare information globally.</div>
            <div class="ref-source">EU Startups, 2017.</div>
            <div class="ref-source">Disponível em: <a href="https://www.eu-startups.com/2017/10/ada-health-secures-e40-million-offunding-to-improve-access-to-healthcare-information-globally/" target="_blank" rel="noopener noreferrer">https://www.eu-startups.com</a></div>
            <div class="ref-access">Acesso em: 17 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">OSTOJIĆ, I.</div>
            <div class="ref-title">Conversational public services, AI and global healthcare.</div>
            <div class="ref-source">Forbes, 2024.</div>
            <div class="ref-source">Disponível em: <a href="https://www.forbes.com/councils/forbesbusinesscouncil/2024/08/09/conversational-public-services-ai-and-global-healthcare/" target="_blank" rel="noopener noreferrer">https://www.forbes.com</a></div>
            <div class="ref-access">Acesso em: 20 maio 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">PENNIC, J.</div>
            <div class="ref-title">Your.MD launches AI-powered doctor diagnosis on Facebook Messenger via chatbot.</div>
            <div class="ref-source">Hit Consultant, 2016.</div>
            <div class="ref-source">Disponível em: <a href="https://hitconsultant.net/2016/04/29/md-launches-ai-powered-doctor-diagnosis-facebook-messenger-via-chatbot/" target="_blank" rel="noopener noreferrer">https://hitconsultant.net</a></div>
            <div class="ref-access">Acesso em: 14 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">PRADO, E.</div>
            <div class="ref-title">Chatbot: o seu médico de bolso!</div>
            <div class="ref-source">Saúde Business, 2016.</div>
            <div class="ref-source">Disponível em: <a href="https://www.saudebusiness.com/ti-e-inovao/chatbot-o-seu-mdico-debolso/" target="_blank" rel="noopener noreferrer">https://www.saudebusiness.com</a></div>
            <div class="ref-access">Acesso em: 10 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">RETINAWEB.</div>
            <div class="ref-title">Chatbots e automação para respostas rápidas em clínicas.</div>
            <div class="ref-source">Retinaweb, 2025.</div>
            <div class="ref-source">Disponível em: <a href="https://retinaweb.com.br/blog/automacao-derespostas-clinicas/" target="_blank" rel="noopener noreferrer">https://retinaweb.com.br</a></div>
            <div class="ref-access">Acesso em: 11 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">SCHMITZ, L. C.</div>
            <div class="ref-title">O potencial dos chatbots na saúde.</div>
            <div class="ref-source">Medicina S/A, 2020.</div>
            <div class="ref-source">Disponível em: <a href="https://medicinasa.com.br/chatbots-saude/" target="_blank" rel="noopener noreferrer">https://medicinasa.com.br</a></div>
            <div class="ref-access">Acesso em: 4 abr. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">SENSELY.</div>
            <div class="ref-title">Sensely.</div>
            <div class="ref-source">[s.d.].</div>
            <div class="ref-source">Disponível em: <a href="https://sensely.com/" target="_blank" rel="noopener noreferrer">https://sensely.com/</a></div>
            <div class="ref-access">Acesso em: 14 mar. 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">TOPOL, E.</div>
            <div class="ref-title">Deep medicine: how artificial intelligence can make healthcare human again.</div>
            <div class="ref-source">ACM Digital Library, 2019.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">INFERMEDICA.</div>
            <div class="ref-title">Symptomate API.</div>
            <div class="ref-source">Disponível em: <a href="https://infermedica.com" target="_blank" rel="noopener noreferrer">https://infermedica.com</a></div>
            <div class="ref-access">Acesso em: 10 mar. 2025.</div>
        </div>
    </div>
</div>`
    },

     en: {
        resumo: `
            <p>This article presents a comparative analysis of three chatbot platforms used in digital healthcare: Ada Health, Molly (Sensely), and Symptomate. Using a qualitative, exploratory, and bibliographic approach, the study evaluates technical, clinical, and user experience aspects based on criteria such as diagnostic accuracy, compliance with Brazil's General Data Protection Law (LGPD), user satisfaction, technical accessibility, and natural language understanding. The results indicate that Ada Health stands out for its scientific robustness and user acceptance, Molly (Sensely) for its humanized approach through an interactive avatar focused on chronic disease monitoring, and Symptomate for its simplicity and efficiency in initial symptom triage. The analysis reveals that although chatbots enhance access to care and streamline healthcare services, they still face challenges related to privacy, personalization, and usability. The study concludes that these tools hold great potential to complement medical care, provided their implementation addresses ethical, technical, and regulatory aspects.</p>
            <div class="keywords"><strong>Keywords:</strong> Artificial Intelligence; Chatbot; Health; Internet; LGPD.</div>
        `,
        
        introducao: `<p>According to Cardoso (2024), technological evolution has driven innovations in various areas, and healthcare has been one of the most benefited by these transformations. The incorporation of new technologies has provided significant advances in the efficiency of medical care and patient experience. Tools such as artificial intelligence, augmented reality, and automation have played a crucial role in this process, improving the quality of care, diagnostic accuracy, and treatment speed.</p>
        <p>Chatbots, which are artificial intelligence programs capable of interacting with users through automated messages, emerge as an innovative solution to provide continuous and personalized support to patients. Offering quick and effective responses about symptoms, medications, and treatments, these systems revolutionize healthcare delivery. They contribute to reducing operational costs, optimizing human resources, and allowing healthcare professionals to focus on more complex cases, demonstrating the potential of emerging technologies in healthcare transformation.</p>
        <p>These systems are already transforming medical care by offering accessible, automated, and continuous support to patients, as stated by Laurentys (2025). The real-time interaction they provide is especially valuable in contexts where speed of care is crucial.</p>
        <p>Despite the advances provided by chatbots, their implementation faces significant challenges. The security of personal data is a central concern, as AI-based systems can increase exposure to security and privacy risks, as highlighted by Topol (2019). Furthermore, although chatbots provide quick responses, they may face difficulties in interpreting more complex symptoms, which can lead to inaccurate diagnoses or inadequate guidance. The resistance of patients and healthcare professionals to adopt these technologies is also an obstacle, due to concerns about the accuracy of information and fears about replacing human contact in care.</p>
        <p>This article aims to compare Ada Health, Molly, and Symptomate chatbots, which, although they share similarities, have unique characteristics in their approaches. The choice of these tools was based on the relevance of their implementations and the availability of detailed technical documentation. By analyzing their operations in medical care, we seek to understand how these technologies are transforming healthcare delivery, making it more efficient, accessible, and patient-centered.</p>`,
        
        metodologia: `<p>This research adopts a <strong>qualitative, exploratory, and bibliographic</strong> approach, with emphasis on the survey, analysis, and comparison of three virtual assistants used in healthcare: Molly (Sensely), Symptomate, and Ada Health.</p>
        <p>Primary and secondary sources were consulted, such as specialized scientific dissemination platforms like PubMed, ScienceDirect, and BMJ Open, as well as journalistic sources like Forbes, TechCrunch, MedCity News, and Medicina S/A. The extracted information covers essential aspects, such as their functioning mechanisms, clinical efficacy, comparative studies, and evaluations of system accessibility.</p>
        <p>The criteria for analyzing the different aspects of the aforementioned platforms in the context of digital health were:</p>
        <ul>
            <li><strong>Accuracy and Clinical Effectiveness:</strong> the analysis will be based on scientific studies available in databases such as PubMed and Google Scholar, which provide clinical validations, diagnostic comparisons, and effectiveness in medical triage;</li>
            <li><strong>Security and Privacy:</strong> to evaluate compliance with the General Data Protection Law (LGPD), the Webbkoll digital auditing tool will be used, which verifies data collection practices, absence of visible privacy policies, and information sharing with third parties;</li>
            <li><strong>User Satisfaction:</strong> user perception will be investigated through analysis of public reviews in app stores (App Store or Google Play), considering ratings, frequent comments, and number of downloads, to identify acceptance patterns and recurring criticisms;</li>
            <li><strong>Accessibility:</strong> will be evaluated using Google Lighthouse tools, which provide a quantitative and technical overview of accessibility that directly affects navigation for people with disabilities;</li>
            <li><strong>Natural Language Understanding:</strong> empirical tests will be conducted with virtual assistants, applying the "Golden Set" technique, which consists of creating a standardized set of questions for all chatbots. The tests will include phrases with spelling errors, use of slang, ambiguous questions, and reformulations. The analysis will seek to identify interpretation flaws, response coherence, and the ability to recognize user intent.</li>
        </ul>`,
        
        referencial: `<p>"Bots," or software robots, are automated systems developed to perform tasks autonomously. One of the best-known types are chatbots, designed to interact with users through natural language, whether by text or voice. According to Mauldin (1994), the first bots were created to simulate human conversations on simple interfaces, but with the evolution of artificial intelligence and natural language processing, they have become sophisticated and realistic tools.</p>
        <p>In healthcare, chatbots have gained prominence as technological solutions capable of optimizing processes, expanding access to information, and offering continuous care. These tools act as virtual assistants, helping to bridge the communication gap between patients and healthcare professionals, acting as a bridge between them. A study published by Inbenta (2022) highlights that, with artificial intelligence technology, chatbots can respond faster and more efficiently through conversational interfaces and, in some cases, more effectively than a human assistant. Thus, when well-implemented, chatbots can reduce waiting times, improve care efficiency, and increase user satisfaction.</p>
        <p>Artificial intelligence platforms such as Ada Health, Molly (Sensely), and Symptomate have been adopted by hospital institutions to serve large volumes of users safely and quickly, demonstrating the scalability and reliability of these systems when integrated with structured medical databases. Although they present distinct approaches, these platforms share essential functions, such as symptom triage through structured questions, similar to the medical process, appointment scheduling, remote monitoring, health care guidance, and preliminary diagnosis generation.</p>
        
        <h3>SENSELY (MOLLY)</h3>
        <p>The Sensely platform features a virtual nurse called Molly, developed in 2013 to reduce the overload in the healthcare system. It combines artificial intelligence and an interactive avatar aimed at offering more humanized care, especially in high-demand systems. The main motivation for creating this tool, according to the Sensely website, was to improve the patient experience with a personalized and agile approach. Molly collects information through text, voice, images, and videos, analyzing symptoms and medical history, and then guiding next steps. It collaborates with institutions such as the United Kingdom's National Health Service and the Mayo Clinic, a medical-hospital research organization that aims to expand the virtual assistant's resources by providing health guidance to users.</p>
        
        <h3>SYMPTOMATE</h3>
        <p>Founded in 2012 by the Polish company Infermedica, the Symptomate chatbot uses machine learning and neural network-based algorithms to evaluate symptoms reported by users through a digital interview, identifying possible causes and offering guidance on treatments or the need for medical care. This chatbot is used by various organizations, such as insurers and hospitals, to improve initial medical triage and assist patients in deciding whether to seek immediate care. An example is eVisit, a virtual care platform that integrated Symptomate's API into its system, allowing automatic symptom triage before consultations.</p>
        
        <h3>ADA HEALTH</h3>
        <p>Ada Health, created in 2011 by Claire Novorol, Daniel Nathrath, and Martin Hirsch, integrates its technologies into self-care and health education initiatives. The idea arose from diagnostic difficulties faced by a family member of one of the founders, leading to the creation of a platform for the general public. Ada Health, recognized for its diagnostic accuracy, has formed partnerships with hospitals such as Jefferson Health in the United States and collaborates with pharmaceutical companies like Bayer and Pfizer, according to the official Ada Health website (2025). For example, the partnership with Bayer allows users to access the Ada platform through product websites like aspirin and Aleve. The platform is based on neural networks and machine learning, and was trained with over 50 million real interactions.</p>
        <p>In summary, chatbots represent a promising innovation for the healthcare sector, providing greater access, agility, and efficiency in serving users. However, for these tools to reach their maximum potential, it is essential to ensure the quality of the databases used, clinical validation of the systems, and protection of patient privacy.</p>`,
        
        resultados: `<p>The clinical validation of the Ada Health, Molly (Sensely), and Symptomate platforms shows distinct approaches in terms of scientific rigor and practical application, reflecting their focuses and objectives in the healthcare sector. As detailed in Table 1, these platforms have varied training bases and different levels of scientific evidence, which directly impacts their diagnostic accuracy and clinical effectiveness.</p>
        
        <h3>Table 1 – Accuracy and Clinical Effectiveness (Via published articles)</h3>
        <div class="table-wrapper"><table>
            <thead><tr><th>Platform</th><th>Training Base</th><th>Scientific Studies</th><th>Example of Clinical Effectiveness</th></tr></thead>
            <tbody>
                <tr><td>Ada Health</td><td>+50 million real medical interactions</td><td>70% accuracy among top 3 diagnoses and performance similar to general clinicians</td><td>Helped identify appendicitis and accelerate triage in corporate programs</td></tr>
                <tr><td>Molly (Sensely)</td><td>Clinical protocols + AI with continuous feedback</td><td>85% effectiveness in heart failure</td><td>Reduced hospitalizations in chronic patients with remote monitoring</td></tr>
                <tr><td>Symptomate</td><td>Guidelines and simulated clinical data</td><td>High precision in simple cases like pharyngitis and UTI</td><td>Helped identify dengue and infectious diseases in tropical regions</td></tr>
            </tbody>
        </table></div>
        <div class="table-source"><strong>Source:</strong> Authors (2025)</div>
        
        <p>Ada Health stands out for its scientific robustness, with peer-reviewed studies published in high-impact journals such as BMJ and Nature Digital Medicine, indicating up to 70% accuracy in the most common diagnoses — performance comparable to that of general clinicians, reinforcing its potential to support complex medical decisions. In contrast, Molly (Sensely) focuses on remote monitoring of chronic patients, validated by protocols from the United Kingdom's National Health Service, which demonstrate 85% effectiveness in managing conditions such as heart failure (Telemedicine and e-Health, 2020), highlighting practical relevance in continuous care. Symptomate, focused on triage for specific diseases such as tropical ones, shows notable clinical efficacy, with diagnostic accuracy similar to medical professionals in cases like pharyngitis and urinary tract infections (JMIR, 2022), emphasizing its utility in endemic and emergency contexts. These results indicate different niches of operation and levels of clinical maturity, highlighting the importance of specific analyses for each use context.</p>
        
        <p>Data security and privacy are crucial aspects for digital health platforms, especially given the requirements of the General Data Protection Law (LGPD). Adequate protection of this information is essential to ensure user trust and prevent potential harm from improper use of sensitive data. As demonstrated in Table 2, the analyzed platforms show distinct approaches regarding personal data collection, such as clinical information, voice recordings, and even images, as well as significant variations in third-party sharing and policy transparency.</p>
        
        <h3>Table 2 – Security and Privacy (LGPD - via Webbkoll)</h3>
        <div class="table-wrapper"><table>
            <thead><tr><th>Platform</th><th>Personal Data Collection</th><th>Third-Party Sharing</th><th>Policy and Consent</th><th>Identified Non-Compliances</th><th>Cookies</th></tr></thead>
            <tbody>
                <tr><td>Ada Health</td><td>Name, age, symptoms, location</td><td>Yes (Google Analytics, Meta Pixel)</td><td>Technical and less accessible policy</td><td>Data tracking before consent</td><td>2 third-party, no initial blocking</td></tr>
                <tr><td>Molly (Sensely)</td><td>Clinical data, voice, image</td><td>Yes (AWS, Twilio, Analytics)</td><td>Limited and only in English</td><td>Sensitive collection without explicit notice</td><td>4 active before consent</td></tr>
                <tr><td>Symptomate</td><td>Symptoms, age, gender</td><td>Google (Limited)</td><td>Clear policy, in Portuguese</td><td>Simple structure without third-party calls on homepage</td><td>Cookies blocked until interaction (8 total)</td></tr>
            </tbody>
        </table></div>
        <div class="table-source"><strong>Source:</strong> Authors (2025)</div>
        
        <p>While Ada Health and Molly (Sensely) use tracking tools before obtaining consent, Symptomate stands out for its simplified structure aligned with LGPD principles. The comparative analysis highlights these differences, particularly regarding policy clarity, legal compliance, and the presence of potentially critical vulnerabilities. Symptomate adopts measures such as initial cookie blocking and limited third-party sharing (only basic Google), while the other platforms demonstrate non-compliance with LGPD, such as: Molly (Sensely): collection of sensitive data (voice and image) without explicit notice and use of four active cookies before consent, exposing users to potential violations. Ada Health: prior data tracking (via Google Analytics and Meta Pixel) and complex privacy policies, making it difficult for users to understand how their information is handled. These differences not only reflect distinct levels of LGPD compliance but also directly impact user trust – an essential factor in digital health platforms, where data sensitivity demands maximum transparency and control.</p>
        
        <p>User satisfaction is an important means of evaluating the effectiveness and adoption of digital health platforms. Reviews in app stores (App Store and Google Play) of Ada Health, Molly (Sensely), and Symptomate reveal not only the general perception of each but also recurring patterns that shape the practical experience — from intuitive interfaces to operational failures. Table 3 synthesizes these data, cross-referencing metrics such as average rating, number of reviews, estimated downloads, and main feedback.</p>
        
        <h3>Table 3 – User Satisfaction via App Store and Google Play</h3>
        <div class="table-wrapper"><table>
            <thead><tr><th>Platform</th><th>Average Rating</th><th>Number of Reviews</th><th>Estimated Downloads</th><th>Frequent Praises</th><th>Frequent Criticisms</th></tr></thead>
            <tbody>
                <tr><td>Ada Health</td><td>4.9 ★ (iOS)<br>4.7 ★ (Android)</td><td>+5k</td><td>+2 million</td><td>Intuitive interface, quick diagnoses, feeling of professional support</td><td>Repetitive questions, lack of integration with local doctors</td></tr>
                <tr><td>Molly (Sensely)</td><td>4.6 ★ (iOS)<br>4.3 ★ (Android)</td><td>219 reviews</td><td>+10k</td><td>Humanized avatar, real conversation feel, useful for chronic diseases</td><td>Slow responses, bugs, regional unavailability</td></tr>
                <tr><td>Symptomate</td><td>4.7 ★ (iOS)<br>4.3 ★ (Android)</td><td>+10k</td><td>+500k</td><td>Simple, fast, clear guidance, light app</td><td>Little personalization, no symptom history</td></tr>
            </tbody>
        </table></div>
        <div class="table-source"><strong>Source:</strong> Authors (2025)</div>
        
        <p>Technical performance of digital health platforms plays an essential role in ensuring usability, security, and quality of user experience. In the context of the analyzed chatbots, evaluation of aspects such as accessibility, loading speed, visual stability, and compliance with web best practices allows identifying technical limitations that may negatively impact their adoption and effectiveness. Table 4 presents a comparative analysis of these elements, based on tests performed on computer and mobile devices, according to Google Lighthouse criteria and Core Web Vitals — a set of indicators defined by Google to measure user experience on web pages.</p>
        
        <h3>Table 4 – Accessibility according to Google Lighthouse</h3>
        <div class="table-wrapper"><table>
            <thead><tr><th>Platform</th><th>Device</th><th>Accessibility</th><th>Performance</th><th>Best Practices</th><th>SEO</th><th>Core Web Vitals (LCP / INP / CLS)</th></tr></thead>
            <tbody>
                <tr><td rowspan="2">Ada Health</td><td>Desktop</td><td>96</td><td>98</td><td>93</td><td>100</td><td>LCP: 1.6s / INP: 51ms / CLS: 0.11</td></tr>
                <tr><td>Mobile</td><td>96</td><td>79</td><td>100</td><td>100</td><td>LCP: 2.2s / INP: 130ms / CLS: 0.09</td></tr>
                <tr><td rowspan="2">Molly (Sensely)</td><td>Desktop</td><td>76</td><td>75</td><td>100</td><td>77</td><td>LCP: 3.2s / INP: 79ms / CLS: 0.01</td></tr>
                <tr><td>Mobile</td><td>79</td><td>71</td><td>100</td><td>77</td><td>LCP: 3.2s / INP: 271ms / CLS: 0.08</td></tr>
                <tr><td rowspan="2">Symptomate</td><td>Desktop</td><td>65</td><td>90</td><td>100</td><td>92</td><td>LCP: 3.4s / INP: 76ms / CLS: 0.05</td></tr>
                <tr><td>Mobile</td><td>60</td><td>90</td><td>100</td><td>92</td><td>LCP: 4s / INP: 195ms / CLS: 0.32</td></tr>
            </tbody>
        </table></div>
        <div class="table-source"><strong>Source:</strong> Authors (2025)</div>
        
        <p>From the data presented in Table 4, significant contrasts are observed between the platforms regarding technical performance and user experience. Ada Health stands out with highly positive metrics on computers and mobile devices, presenting indicators within recommended limits and good overall usability. Despite a slightly elevated CLS on desktop, indicating some layout instability, loading times and responsiveness remain satisfactory, reinforcing the platform's technical maturity. Molly (Sensely), on the other hand, although maintaining good accessibility and best practices scores, suffers from high LCP on both desktop and mobile, representing delays in loading main content. This slowness, combined with noticeable delays in interactions on mobile devices, compromises navigation fluidity. Finally, Symptomate presents the worst overall performance: in addition to LCP above ideal, harming user experience, the CLS on mobile is considerably high, indicating significant visual instability.</p>
        
        <p>The analysis of the natural language understanding capability of the platforms, as detailed in Table 5, reveals important nuances about the quality of interaction between user and chatbot. The ability to understand users' natural language is one of the main challenges for digital health platforms, especially in informal or ambiguous contexts. Usability, conversational flexibility, and accuracy in interpreting intentions are essential factors for an effective and safe experience.</p>
        
        <h3>Table 5 – Natural Language Understanding (Golden Set Method)</h3>
        <div class="table-wrapper"><table>
            <thead><tr><th>Platform</th><th>Tolerance to Slang and Errors</th><th>Interpretation of Ambiguous Questions</th><th>Dialogue Reformulation Capacity</th><th>Correct Intent Identification</th></tr></thead>
            <tbody>
                <tr><td>Ada Health</td><td>High</td><td>Regular</td><td>High</td><td>High</td></tr>
                <tr><td>Molly (Sensely)</td><td>Medium</td><td>Low</td><td>Medium</td><td>Medium</td></tr>
                <tr><td>Symptomate</td><td>High</td><td>High</td><td>High</td><td>High</td></tr>
            </tbody>
        </table></div>
        <div class="table-source"><strong>Source:</strong> Authors (2025)</div>
        
        <p>Analysis of Table 5 shows that Symptomate excels in natural language understanding, demonstrating high tolerance to slang, spelling errors, and ambiguous questions. Informal expressions like "I'm feeling bad" or vague phrases like "I think I have dengue or a virus" are well interpreted, ensuring continuity of care. Ada Health shows regular performance in ambiguity but recognizes variations like "stomachache" and corrects errors like "headahce" to "headache," maintaining good flow. Molly (Sensely), however, has difficulties in this aspect, requiring more direct phrases; generic expressions result in vague and unhelpful responses. In terms of dialogue reformulation, Ada Health and Symptomate are more adaptable to user interactions, while Molly faces limitations that affect conversation naturalness. In intent identification, all have functional performance, but Ada Health and Symptomate demonstrate greater precision, even with informal language.</p>`,
        
        consideracoes: `<p>The comparative analysis of the Ada Health, Molly (Sensely), and Symptomate chatbots proved that these tools have great potential to transform healthcare delivery, offering agile triage, initial clinical support, and accessibility to users. Among the solutions evaluated, Ada Health stood out as the most complete chatbot, combining high diagnostic accuracy, robust scientific validation, excellent user experience, and wide public acceptance. Although Molly offers a humanized differential through an interactive avatar and Symptomate shows strong performance in natural language and LGPD compliance, both still face limitations in technical performance and/or privacy. It is concluded that Ada Health is the most balanced and effective option among those analyzed, being indicated as a model for future artificial intelligence applications in healthcare. It is recommended that new implementations prioritize data security, continuous clinical validation, and focus on patient experience to ensure positive and ethical impact in the sector, also promoting greater accessibility and personalization of digital care.</p>`,
        
        referencias: `<div class="references-container">
    <div class="references-grid">
        <div class="reference-item">
            <div class="ref-authors">ADA HEALTH.</div>
            <div class="ref-title">How Ada works.</div>
            <div class="ref-year">2025.</div>
            <div class="ref-source">Available at: <a href="https://ada.com/en/" target="_blank" rel="noopener noreferrer">https://ada.com/en/</a></div>
            <div class="ref-access">Accessed: Mar 12, 2025.</div>
        </div>
        <div class="reference-item">
            <div class="ref-authors">ADAMS, K.</div>
            <div class="ref-title">Ada Health deploys its symptom assessment care navigation tech across Jefferson Health.</div>
            <div class="ref-source">MedCity News, 2023.</div>
            <div class="ref-source">Available at: <a href="https://medcitynews.com/2023/04/ada-health-deploys-its-symptomassessment-care-navigation-tech-across-jefferson-health/" target="_blank" rel="noopener noreferrer">https://medcitynews.com</a></div>
            <div class="ref-access">Accessed: Apr 9, 2025.</div>
        </div>
        <!-- Add all other references with English translations -->
    </div>
</div>`
    },
    
    es: {
        resumo: `
            <p>El presente artículo analiza comparativamente las siguientes plataformas de chatbots aplicadas a la salud digital: Ada Health, Molly (Sensely) y Symptomate. Utilizando un enfoque cualitativo, exploratorio y bibliográfico, el estudio evalúa aspectos técnicos, clínicos y de experiencia del usuario mediante criterios como precisión diagnóstica, conformidad con la Ley General de Protección de Datos (LGPD), satisfacción de los usuarios, accesibilidad técnica y comprensión del lenguaje natural. Los resultados indican que Ada Health se destaca por su robustez científica y aceptación del público, Molly por su enfoque humanizado con avatar interactivo orientado al monitoreo de enfermedades crónicas, y Symptomate por su simplicidad y eficiencia en el triaje inicial de síntomas. El análisis revela que, aunque los chatbots amplían el acceso y optimizan la atención en salud, aún enfrentan desafíos relacionados con la privacidad, personalización y usabilidad. Se concluye que estas herramientas tienen un gran potencial para complementar la atención médica, siempre que su implementación considere aspectos éticos, técnicos y regulatorios.</p>
            <div class="keywords"><strong>Palabras clave:</strong> Chatbot; Inteligencia Artificial; Internet; LGPD; Salud.</div>
        `,
        
        introducao: `<p>Según Cardoso (2024), la evolución tecnológica ha impulsado innovaciones en diversas áreas, y la salud ha sido una de las más beneficiadas por estas transformaciones. La incorporación de nuevas tecnologías ha proporcionado avances significativos en la eficiencia de la atención médica y en la experiencia de los pacientes. Herramientas como la inteligencia artificial, la realidad aumentada y la automatización han desempeñado un papel crucial en este proceso, mejorando la calidad de la atención, la precisión de los diagnósticos y la rapidez de los tratamientos.</p>
        <p>Los chatbots, que son programas de inteligencia artificial capaces de interactuar con los usuarios a través de mensajes automatizados, surgen como una solución innovadora para brindar apoyo continuo y personalizado a los pacientes. Al ofrecer respuestas rápidas y efectivas sobre síntomas, medicamentos y tratamientos, estos sistemas revolucionan la prestación de servicios de salud. Contribuyen a la reducción de costos operativos, optimizan el uso de los recursos humanos y permiten que los profesionales de la salud se concentren en casos más complejos, demostrando el potencial de las tecnologías emergentes en la transformación de la salud.</p>
        <p>Estos sistemas ya están transformando la atención médica al ofrecer apoyo accesible, automatizado y continuo a los pacientes, como lo afirma Laurentys (2025). La interacción en tiempo real que proporcionan es especialmente valiosa en contextos donde la rapidez en la atención es crucial.</p>
        <p>A pesar de los avances proporcionados por los chatbots, su implementación enfrenta desafíos significativos. La seguridad de los datos personales es una preocupación central, ya que los sistemas basados en inteligencia artificial pueden aumentar la exposición a riesgos de seguridad y privacidad, como destaca Topol (2019). Además, aunque los chatbots proporcionan respuestas rápidas, pueden tener dificultades para interpretar síntomas más complejos, lo que puede llevar a diagnósticos imprecisos u orientaciones inadecuadas. La resistencia de pacientes y profesionales de la salud a adoptar estas tecnologías también es un obstáculo, debido a la confianza en la precisión de la información y los temores sobre la sustitución del contacto humano en la atención.</p>
        <p>Este artículo tiene como objetivo comparar los chatbots Ada Health, Molly y Symptomate, que, aunque comparten similitudes, presentan características únicas en sus enfoques. La elección de estas herramientas se basó en la relevancia de sus implementaciones y la disponibilidad de documentación técnica detallada. Al analizar sus operaciones en la atención médica, se busca comprender cómo estas tecnologías están transformando la prestación de servicios de salud, haciéndolos más eficientes, accesibles y centrados en el paciente.</p>`,
        
        metodologia: `<p>La investigación de este artículo adopta un enfoque <strong>cualitativo, exploratorio y bibliográfico</strong>, con énfasis en el levantamiento, análisis y comparación de tres asistentes virtuales utilizados en salud: Molly (Sensely), Symptomate y Ada Health.</p>
        <p>Para ello, se consultaron fuentes primarias y secundarias, como plataformas especializadas en divulgación científica, como PubMed, ScienceDirect y BMJ Open, además de fuentes periodísticas como Forbes, TechCrunch, MedCity News y Medicina S/A. La información extraída abarca aspectos esenciales, como sus mecanismos de funcionamiento, eficacia clínica, estudios comparativos y evaluaciones sobre la accesibilidad de los sistemas.</p>
        <p>Los criterios para analizar los diferentes aspectos de actuación de las plataformas mencionadas anteriormente en el contexto de la salud digital fueron:</p>
        <ul>
            <li><strong>Precisión y Efectividad Clínica:</strong> el análisis se fundamentará en estudios científicos disponibles en bases como PubMed y Google Scholar, que aportan validaciones clínicas, comparaciones diagnósticas y eficacia en el triaje médico;</li>
            <li><strong>Seguridad y Privacidad:</strong> para evaluar la conformidad con la Ley General de Protección de Datos (LGPD), se utilizará la herramienta de auditoría digital Webbkoll, que verifica prácticas de recolección de datos, ausencia de política de privacidad visible y envío de información a terceros;</li>
            <li><strong>Satisfacción del Usuario:</strong> la percepción de los usuarios se investigará mediante el análisis de las evaluaciones públicas en las tiendas de aplicaciones (App Store o Google Play), considerando calificaciones, comentarios frecuentes y número de descargas, para identificar patrones de aceptación y críticas recurrentes;</li>
            <li><strong>Accesibilidad:</strong> se evaluará a través de las herramientas Google Lighthouse que proporcionan un panorama cuantitativo y técnico de la accesibilidad que afecta directamente la navegación de personas con discapacidad;</li>
            <li><strong>Comprensión del Lenguaje Natural:</strong> se realizarán pruebas empíricas con los asistentes virtuales, aplicando la técnica del "Golden Set", que consiste en crear un conjunto estandarizado de preguntas para todos los chatbots. Las pruebas incluirán frases con errores ortográficos, uso de jerga, preguntas ambiguas y reformulaciones. El análisis buscará identificar fallos de interpretación, coherencia de las respuestas y capacidad de reconocer la intención del usuario.</li>
        </ul>`,
        
        referencial: `<p>Los "bots", o robots de software, son sistemas automatizados desarrollados para ejecutar tareas de forma autónoma. Uno de los tipos más conocidos son los chatbots, diseñados para interactuar con los usuarios a través del lenguaje natural, ya sea por texto o voz. Según Mauldin (1994), los primeros bots fueron creados para simular conversaciones humanas en interfaces simples, pero con la evolución de la inteligencia artificial y el procesamiento del lenguaje natural, se han convertido en herramientas sofisticadas y realistas.</p>
        <p>En el área de la salud, los chatbots han ganado protagonismo como soluciones tecnológicas capaces de optimizar procesos, ampliar el acceso a la información y ofrecer una atención continua. Estas herramientas desempeñan el papel de asistentes virtuales, ayudando a llenar el vacío de comunicación entre pacientes y profesionales de la salud, actuando como un puente entre ellos. Un estudio publicado por Inbenta (2022) destaca que, con la tecnología de inteligencia artificial, los chatbots son capaces de responder con mayor rapidez y eficiencia a través de interfaces conversacionales y, en algunos casos, de forma más eficaz que un asistente humano. Así, cuando están bien implementados, los chatbots pueden reducir el tiempo de espera, mejorar la eficiencia de la atención y aumentar la satisfacción de los usuarios.</p>
        <p>Plataformas de inteligencia artificial como Ada Health, Molly (Sensely) y Symptomate han sido adoptadas por instituciones hospitalarias para atender grandes volúmenes de usuarios con seguridad y agilidad, demostrando la escalabilidad y confiabilidad de estos sistemas cuando se integran a bases de datos médicas estructuradas. Aunque presentan enfoques distintos, estas plataformas comparten funciones esenciales, como el triaje de síntomas mediante preguntas estructuradas, similar al proceso médico, la programación de citas, el monitoreo remoto, la orientación en cuidados de salud y la generación de diagnósticos preliminares.</p>
        
        <h3>SENSELY (MOLLY)</h3>
        <p>La plataforma Sensely cuenta con una enfermera virtual llamada Molly, desarrollada en 2013 para reducir la sobrecarga en el sistema de salud, que combina inteligencia artificial y un avatar interactivo para ofrecer una atención más humanizada, especialmente en sistemas con alta demanda. La mayor motivación para la creación de esta herramienta, según la página web de Sensely, fue mejorar la experiencia del paciente con un enfoque personalizado y ágil. Molly recopila información a través de texto, voz, imágenes y videos, analizando síntomas e historial médico, y luego orienta los siguientes pasos. Colabora con instituciones como el Servicio Nacional de Salud del Reino Unido y la Mayo Clinic, una organización de investigación médico-hospitalaria que busca expandir los recursos de la asistente virtual proporcionando orientaciones de salud a los usuarios.</p>
        
        <h3>SYMPTOMATE</h3>
        <p>Fundado en 2012 por la empresa polaca Infermedica, el chatbot Symptomate utiliza aprendizaje automático y algoritmos basados en redes neuronales para evaluar los síntomas reportados por los usuarios a través de una entrevista digital, identificando posibles causas y ofreciendo orientaciones sobre tratamientos o la necesidad de atención médica. Este chatbot es utilizado por diversas organizaciones, como aseguradoras y hospitales, para mejorar el triaje médico inicial y ayudar a los pacientes a decidir si buscar atención inmediata. Un ejemplo es eVisit, una plataforma de cuidados virtuales que integró la API de Symptomate en su sistema, permitiendo el triaje automático de síntomas antes de las consultas.</p>
        
        <h3>ADA HEALTH</h3>
        <p>Ada Health, creado en 2011 por Claire Novorol, Daniel Nathrath y Martin Hirsch, integra sus tecnologías en iniciativas de autocuidado y educación en salud. La idea surgió a partir de las dificultades de diagnóstico que enfrentó un familiar de uno de los fundadores, lo que llevó a la creación de una plataforma para el público en general. Ada Health, reconocido por su precisión en el diagnóstico, ha establecido alianzas con hospitales como Jefferson Health en Estados Unidos y colabora con empresas farmacéuticas como Bayer y Pfizer, según el sitio oficial de Ada Health (2025). Por ejemplo, la alianza con Bayer permite que los usuarios accedan a la plataforma de Ada a través de los sitios web de productos como aspirina y Aleve. La plataforma está basada en redes neuronales y aprendizaje automático, y fue entrenada con más de 50 millones de interacciones reales.</p>
        <p>En síntesis, los chatbots representan una innovación prometedora para el sector de la salud, proporcionando mayor acceso, agilidad y eficiencia en la atención a los usuarios. Sin embargo, para que estas herramientas alcancen su máximo potencial, es fundamental garantizar la calidad de las bases de datos utilizadas, la validación clínica de los sistemas y la protección de la privacidad de los pacientes.</p>`,
        
        resultados: `<p>La validación clínica de las plataformas Ada Health, Molly (Sensely) y Symptomate evidencia enfoques distintos en términos de rigor científico y aplicación práctica, reflejando sus focos y objetivos en el sector de la salud. Como se detalla en el cuadro 1, estas plataformas tienen bases de entrenamiento variadas y diferentes niveles de evidencia científica, lo que impacta directamente su precisión diagnóstica y efectividad clínica.</p>
        
        <h3>Cuadro 1 – Precisión y Efectividad Clínica (Vía artículos publicados)</h3>
        <div class="table-wrapper"> <table>
            <thead> <tr><th>Plataforma</th><th>Base de Entrenamiento</th><th>Estudios Científicos</th><th>Ejemplo de Efectividad Clínica</th></tr> </thead>
            <tbody>
                <tr><td>Ada Health</td><td>+50 millones de interacciones médicas reales</td><td>70% de acierto entre los 3 principales diagnósticos y rendimiento similar a clínicos generales</td><td>Ayudó a identificar apendicitis y acelerar triajes en programas corporativos</td></tr>
                <tr><td>Molly (Sensely)</td><td>Protocolos clínicos + IA con retroalimentación continua</td><td>85% de efectividad en insuficiencia cardíaca</td><td>Redujo hospitalizaciones en pacientes crónicos con monitoreo remoto</td></tr>
                <tr><td>Symptomate</td><td>Guias y datos clínicos simulados</td><td>Precisión en casos simples como faringitis e ITU</td><td>Ayudó a identificar dengue y enfermedades infecciosas en regiones tropicales</td></tr>
            </tbody>
        </table></div>
        <div class="table-source"><strong>Fuente:</strong> Autores (2025)</div>
        
        <p>Ada Health destaca por su robustez científica, con estudios revisados por pares publicados en revistas de alto impacto como BMJ y Nature Digital Medicine, indicando hasta un 70% de acierto en los diagnósticos más comunes — rendimiento comparable al de médicos clínicos, reforzando su potencial en el apoyo a decisiones médicas complejas. En contraste, Molly (Sensely) se centra en el monitoreo remoto de pacientes crónicos, validado por protocolos del Servicio Nacional de Salud del Reino Unido, que demuestran un 85% de efectividad en la gestión de condiciones como la insuficiencia cardíaca (Telemedicine and e-Health, 2020), evidenciando relevancia práctica en cuidados continuos. Symptomate, orientado a triajes de enfermedades específicas como las tropicales, presenta una eficacia clínica notable, con precisión diagnóstica similar a la médica en casos como faringitis e infecciones urinarias (JMIR, 2022), destacando su utilidad en contextos endémicos y de emergencia. Estos resultados indican diferentes nichos de actuación y niveles de madurez clínica, destacando la importancia de análisis específicos para cada contexto de uso.</p>
        
        <!-- Continue with other sections in Spanish, following the same structure as Portuguese -->
        
        <p>El análisis comparativo de los chatbots Ada Health, Molly (Sensely) y Symptomate comprobó que estas herramientas tienen un gran potencial para transformar la atención en salud, ofreciendo triajes ágiles, soporte clínico inicial y accesibilidad a los usuarios. Entre las soluciones evaluadas, Ada Health se destacó como el chatbot más completo, combinando alta precisión diagnóstica, validación científica robusta, excelente experiencia de uso y amplia aceptación del público. Aunque Molly ofrece un diferencial humanizado a través de un avatar interactivo y Symptomate presenta un fuerte rendimiento en lenguaje natural y conformidad con la LGPD, ambos aún enfrentan limitaciones en rendimiento técnico y/o privacidad. Se concluye que Ada Health es la opción más equilibrada y eficaz entre las analizadas, siendo indicado como modelo para futuras aplicaciones de inteligencia artificial en salud. Se recomienda que las nuevas implementaciones prioricen la seguridad de los datos, la validación clínica continua y el enfoque en la experiencia del paciente para garantizar un impacto positivo y ético en el sector, promoviendo también una mayor accesibilidad y personalización de la atención digital.</p>`,
        
        consideracoes: `<p>El análisis comparativo de los chatbots Ada Health, Molly (Sensely) y Symptomate comprobó que estas herramientas tienen un gran potencial para transformar la atención en salud, ofreciendo triajes ágiles, soporte clínico inicial y accesibilidad a los usuarios. Entre las soluciones evaluadas, Ada Health se destacó como el chatbot más completo, combinando alta precisión diagnóstica, validación científica robusta, excelente experiencia de uso y amplia aceptación del público. Aunque Molly ofrece un diferencial humanizado a través de un avatar interactivo y Symptomate presenta un fuerte rendimiento en lenguaje natural y conformidad con la LGPD, ambos aún enfrentan limitaciones en rendimiento técnico y/o privacidad. Se concluye que Ada Health es la opción más equilibrada y eficaz entre las analizadas, siendo indicado como modelo para futuras aplicaciones de inteligencia artificial en salud. Se recomienda que las nuevas implementaciones prioricen la seguridad de los datos, la validación clínica continua y el enfoque en la experiencia del paciente para garantizar un impacto positivo y ético en el sector, promoviendo también una mayor accesibilidad y personalización de la atención digital.</p>`,
        
        referencias: `<div class="references-container">
    <div class="references-grid">
        <div class="reference-item">
            <div class="ref-authors">ADA HEALTH.</div>
            <div class="ref-title">How Ada works.</div>
            <div class="ref-year">2025.</div>
            <div class="ref-source">Disponible en: <a href="https://ada.com/es/" target="_blank" rel="noopener noreferrer">https://ada.com/es/</a></div>
            <div class="ref-access">Acceso: 12 mar. 2025.</div>
        </div>
        <!-- Add all other references with Spanish translations -->
    </div>
</div>`
    }
};

    let currentLang = 'pt';
    function calculateReadingTime() {
        const text = document.getElementById('articleContainer')?.innerText || '';
        const wordsPerMinute = 200;
        const wordCount = text.trim().split(/\s+/).length;
        const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
        document.getElementById('estimatedReadingTime').innerText = minutes;
    }
function renderFullArticle() {
    const t = fullContent[currentLang];
    const html = `
        <section id="resumo" class="resumo-card"><h2><i class="fas fa-file-lines"></i> RESUMO</h2>${t.resumo}</section>
        <section id="introducao"><h2>1. INTRODUÇÃO</h2>${t.introducao}</section>
        <section id="metodologia"><h2>2. METODOLOGIA</h2>${t.metodologia}</section>
        <section id="referencial"><h2>3. REFERENCIAL TEÓRICO</h2>${t.referencial}</section>
        <section id="resultados"><h2>4. RESULTADOS E DISCUSSÃO</h2>${t.resultados}</section>
        <section id="consideracoes"><h2>5. CONSIDERAÇÕES FINAIS</h2>${t.consideracoes}</section>
        <section id="referencias">
            <h2 style="display: flex; align-items: center; justify-content: space-between; cursor: pointer;" onclick="toggleReferences()">
                <span><i class="fas fa-book"></i> REFERÊNCIAS</span>
                <span id="referencesToggleIcon" style="font-size: 1.2rem;"><i class="fas fa-chevron-down"></i></span>
            </h2>
            <div id="referencesContent" style="display: none;">
                <div id="referencesPaginationContainer"></div>
            </div>
        </section>
    `;
    document.getElementById('articleContainer').innerHTML = html;
    
    processReferencesWithPagination(t.referencias);
    
    calculateReadingTime();
    updateTocActive();
}

let currentReferencesPage = 1;
let referencesItems = [];
const referencesPerPage = 4;

function extractReferenceItems(referencesHtml) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = referencesHtml;
    const items = tempDiv.querySelectorAll('.reference-item');
    return Array.from(items).map(item => item.outerHTML);
}

function renderReferencesPage() {
    const container = document.getElementById('referencesPaginationContainer');
    if (!container) return;
    
    const start = (currentReferencesPage - 1) * referencesPerPage;
    const end = start + referencesPerPage;
    const pageItems = referencesItems.slice(start, end);
    
    const itemsHtml = `<div class="references-grid">${pageItems.join('')}</div>`;
    
    const totalPages = Math.ceil(referencesItems.length / referencesPerPage);
    const paginationHtml = `
        <div class="references-pagination">
            <button class="pagination-btn" onclick="changeReferencesPage(${currentReferencesPage - 1})" ${currentReferencesPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> Anterior
            </button>
            <span class="pagination-info">Página ${currentReferencesPage} de ${totalPages} (${referencesItems.length} referências)</span>
            <button class="pagination-btn" onclick="changeReferencesPage(${currentReferencesPage + 1})" ${currentReferencesPage === totalPages ? 'disabled' : ''}>
                Próxima <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;
    
    container.innerHTML = itemsHtml + paginationHtml;
}

function changeReferencesPage(newPage) {
    const totalPages = Math.ceil(referencesItems.length / referencesPerPage);
    if (newPage >= 1 && newPage <= totalPages) {
        currentReferencesPage = newPage;
        renderReferencesPage();
    }
}

function processReferencesWithPagination(referencesHtml) {
    referencesItems = extractReferenceItems(referencesHtml);
    currentReferencesPage = 1;
    renderReferencesPage();
}

function toggleReferences() {
    const referencesContent = document.getElementById('referencesContent');
    const toggleIcon = document.getElementById('referencesToggleIcon');
    
    if (referencesContent.style.display === 'none') {
        referencesContent.style.display = 'block';
        toggleIcon.innerHTML = '<i class="fas fa-chevron-up"></i>';
        renderReferencesPage();
    } else {
        referencesContent.style.display = 'none';
        toggleIcon.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }
}

    function updateTocActive() {
        const sections = document.querySelectorAll('section[id]');
        const links = document.querySelectorAll('.toc a');
        const handler = () => {
            let current = '';
            sections.forEach(s => {
                const rect = s.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 80) current = s.getAttribute('id');
            });
            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
            });
        };
        window.removeEventListener('scroll', handler);
        window.addEventListener('scroll', handler);
        handler();
    }

    function initProgressBar() {
        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('progressBar').style.width = scrolled + '%';
        });
    }



let lastScrollTop = 0;
const fixedHeader = document.getElementById('fixedHeader');
const scrollThreshold = 100; 

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > scrollThreshold) {
        fixedHeader.classList.add('visible');
    } else {
        fixedHeader.classList.remove('visible');
    }
    
    lastScrollTop = scrollTop;
});

const langSelectOriginal = document.getElementById('langSelect');
const langSelectFixed = document.getElementById('langSelectFixed');
const themeToggleOriginal = document.getElementById('themeToggle');
const themeToggleFixed = document.getElementById('themeToggleFixed');

if (langSelectFixed) {
    langSelectFixed.addEventListener('change', (e) => {
        if (langSelectOriginal) {
            langSelectOriginal.value = e.target.value;
            langSelectOriginal.dispatchEvent(new Event('change'));
        }
    });
}

if (themeToggleFixed) {
    themeToggleFixed.addEventListener('click', () => {
        if (themeToggleOriginal) {
            themeToggleOriginal.click();
        }
    });
}

if (langSelectOriginal && langSelectFixed) {
    langSelectOriginal.addEventListener('change', (e) => {
        langSelectFixed.value = e.target.value;
    });
}

const updateThemeButtons = () => {
    const isDark = document.body.classList.contains('dark');
    const themeIcon = themeToggleFixed?.querySelector('i');
    if (themeIcon) {
        themeIcon.className = isDark ? 'pi pi-sun' : 'pi pi-moon';
    }
};

const observer = new MutationObserver(() => {
    updateThemeButtons();
});
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
updateThemeButtons();

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        renderFullArticle();
        showToast(`Idioma alterado para ${currentLang === 'pt' ? 'Português' : currentLang === 'en' ? 'English' : 'Español'}`);
    });
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');

        function showToast(msg, type = 'success') {
            const toast = document.getElementById('toastMessage');
            
            let icon = '';
            switch(type) {
                case 'success':
                    icon = '<i class="fas fa-check-circle" style="margin-right: 8px;"></i>';
                    break;
                case 'error':
                    icon = '<i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>';
                    break;
                case 'info':
                    icon = '<i class="fas fa-info-circle" style="margin-right: 8px;"></i>';
                    break;
                default:
                    icon = '<i class="fas fa-check-circle" style="margin-right: 8px;"></i>';
            }
            
            toast.innerHTML = icon + msg;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    if (toast.innerHTML === icon + msg) {
                        toast.innerHTML = '';
                    }
                }, 300);
            }, 3000);
        }

    document.getElementById('citeABNT').onclick = () => {
        navigator.clipboard.writeText("ARAÚJO, Andressa Barbosa Carvalho; ABIB, Matheus Bilitardo; CARVALHO, Luciano Gonçalves de. ENTRE A TECNOLOGIA E O CUIDADO: análise comparativa estruturada de chatbots na saúde digital. 2025.");
        showToast('Citação ABNT copiada');
    };

    const citeABNTFooter = document.getElementById('citeABNTFooter');
    if (citeABNTFooter) {
        citeABNTFooter.onclick = () => {
            navigator.clipboard.writeText("ARAÚJO, Andressa Barbosa Carvalho; ABIB, Matheus Bilitardo; CARVALHO, Luciano Gonçalves de. ENTRE A TECNOLOGIA E O CUIDADO: análise comparativa estruturada de chatbots na saúde digital. 2025.");
            showToast('Citação ABNT copiada');
        };
    }
    document.getElementById('citeAPA').onclick = () => {
        navigator.clipboard.writeText("Araújo, A. B. C., Abib, M. B., & Carvalho, L. G. (2025). Entre a tecnologia e o cuidado: análise comparativa estruturada de chatbots na saúde digital.");
        showToast('Citação APA copiada');
    };
    document.getElementById('shareBtn').onclick = () => {
        if (navigator.share) navigator.share({ title: 'Chatbots na Saúde Digital', url: window.location.href });
        else navigator.clipboard.writeText(window.location.href);
        showToast('Link copiado');
    };
    document.querySelectorAll('.toc a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').slice(1);
            const el = document.getElementById(target);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    renderFullArticle();
    initProgressBar();


