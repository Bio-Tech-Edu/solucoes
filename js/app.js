/* =====================================================
   PRÉ-ENEM DIGITAL MT — QUÍMICA · ESTUDO DAS SOLUÇÕES
   Metodologias Ativas: ABP + Gamificação
   Mentoras: 6 Cientistas Históricas
   ===================================================== */

/* ============================================================
   GALERIA DE CIENTISTAS MENTORAS
============================================================ */
const cientistas = [
  {
    id:'curie', nome:'Marie Curie', area:'Radioatividade & Química',
    img:'assets/avatars/curie.png',
    bio:'Única pessoa com Prêmios Nobel em duas ciências diferentes (Física e Química). Descobriu o polônio e o rádio.',
    dicaPadrao:'"Nada na vida deve ser temido, apenas compreendido. Agora é hora de compreender mais para temer menos!"',
    dicasMissao:{
      m1:'"Cada solução homogênea guarda um segredo. Aprenda a identificar quem dissolve e quem é dissolvido — este é o primeiro passo do método científico."',
      m2:'"Quando estudei o rádio, medi cada grama com precisão. Coeficiente de solubilidade é isso: o limite exato entre o dissolvido e o precipitado."',
      m3:'"Concentração não é intuição — é cálculo. Domine as fórmulas como dominei a radioatividade."',
      m4:'"No laboratório aprendi que a experimentação supera qualquer teoria. Ajuste, observe, calcule, repita!"',
      m5:'"Você chegou até aqui. Como eu diria: seja menos curioso das pessoas e mais curioso das ideias. Foque nas questões!"'
    }
  },
  {
    id:'franklin', nome:'Rosalind Franklin', area:'Cristalografia & Biofísica',
    img:'assets/avatars/franklin.png',
    bio:'Descobriu a estrutura em dupla hélice do DNA através da Fotografia 51. Precursora da biologia molecular.',
    dicaPadrao:'"A ciência e a vida cotidiana não podem e não devem ser separadas. Toda solução é uma pequena descoberta."',
    dicasMissao:{
      m1:'"Olhe cada mistura como uma imagem em difração de raios-X. O que parece homogêneo revela muito quando analisado a fundo."',
      m2:'"Cristalização é a arte de fazer o soluto se organizar. Domine as curvas de solubilidade como fiz com padrões de DNA."',
      m3:'"Precisão nos cálculos é tudo. Cada porcentagem, cada mol conta — como cada átomo na dupla hélice."',
      m4:'"Fiz mais de 100 experimentos até obter a Fotografia 51. Não desista da diluição perfeita — a resposta está nos detalhes."',
      m5:'"Você é a próxima geração de cientistas. Interprete os dados com rigor — o ENEM é a sua Fotografia 51!"'
    }
  },
  {
    id:'wu', nome:'Chien-Shiung Wu', area:'Física Nuclear',
    img:'assets/avatars/wu.png',
    bio:'A "Primeira-Dama da Física". Comprovou experimentalmente a violação da paridade — descoberta que rendeu Nobel a seus colegas.',
    dicaPadrao:'"Não há caminho real para a ciência. Persistência é a chave — teste, questione, prove."',
    dicasMissao:{
      m1:'"Toda solução tem simetria: soluto + solvente = mistura homogênea. Reconheça esta lei fundamental!"',
      m2:'"Como no experimento da violação da paridade, aqui a temperatura quebra o equilíbrio. Uma solução saturada a 50°C não se comporta como a 20°C."',
      m3:'"Trabalhei com precisão atômica. Nas concentrações, cada dígito importa — arredonde apenas no final."',
      m4:'"Simulação é o novo experimento. Manipule as variáveis como fiz com feixes de partículas."',
      m5:'"O ENEM é seu experimento cobalto-60. Aplique a mesma disciplina que apliquei na física — e você vai brilhar!"'
    }
  },
  {
    id:'nise', nome:'Nise da Silveira', area:'Psiquiatria & Ciências Humanas',
    img:'assets/avatars/nise.png',
    bio:'Psiquiatra alagoana que revolucionou o tratamento da esquizofrenia no Brasil substituindo métodos violentos pela arte-terapia.',
    dicaPadrao:'"Estudar química é entender que tudo se transforma. Como na vida, o segredo está nos vínculos."',
    dicasMissao:{
      m1:'"Assim como uma pessoa é a mistura harmoniosa de corpo e mente, uma solução é a união íntima de soluto e solvente. Nada se separa."',
      m2:'"O limite existe — no soluto e nas pessoas. Aceitar isso é o começo da sabedoria."',
      m3:'"Um remédio na dose certa cura; na dose errada, adoece. Concentração é vital na farmácia e no ENEM."',
      m4:'"Experimente com cuidado. Cada gota de água conta — no laboratório e no cuidado humano."',
      m5:'"Confie no seu processo. Você é capaz — como sempre disse aos meus pacientes: seu potencial é imenso!"'
    }
  },
  {
    id:'johnson', nome:'Katherine Johnson', area:'Matemática & Ciência Espacial',
    img:'assets/avatars/johnson.png',
    bio:'Matemática afro-americana da NASA cujos cálculos levaram John Glenn ao espaço e o homem à Lua.',
    dicaPadrao:'"Se você quer chegar à Lua, calcule cada trajetória. Aqui, sua Lua é o ENEM."',
    dicasMissao:{
      m1:'"Antes de resolver, identifique as variáveis: quem é soluto? Quem é solvente? Sem isso, o foguete não decola."',
      m2:'"Solubilidade é uma função da temperatura — como trajetória é função do tempo. Estude o gráfico!"',
      m3:'"Fórmulas são universais. Ci·Vi = Cf·Vf funciona na Terra e no espaço. Confie na matemática!"',
      m4:'"Cheguei à Lua com cálculo. Você chega ao 50 g/L com a mesma lógica: proporcionalidade."',
      m5:'"O ENEM é sua missão Apollo. Cada questão é um cálculo de trajetória — e você tem tudo para acertar!"'
    }
  },
  {
    id:'tuyouyou', nome:'Tu Youyou', area:'Farmacologia',
    img:'assets/avatars/tuyouyou.png',
    bio:'Química chinesa que descobriu a artemisinina, tratamento contra a malária. Prêmio Nobel de Medicina em 2015.',
    dicaPadrao:'"A tradição encontra a ciência. Estude com paciência — a descoberta vem depois de mil tentativas."',
    dicasMissao:{
      m1:'"Extraí a artemisinina de uma planta chinesa milenar. Toda solução tem uma história — comece pela definição."',
      m2:'"Testei 2000 extratos até encontrar o certo. O coeficiente de solubilidade também exige leitura atenta da tabela."',
      m3:'"Doses erradas matam pacientes. Concentrações erradas matam questões do ENEM. Cuidado com as unidades!"',
      m4:'"Laboratório é resistência. Ajuste, refaça, meça — a solução ideal aparece."',
      m5:'"Você é como uma pesquisadora tratando uma epidemia: as questões do ENEM. Vá com foco e determinação!"'
    }
  }
];

/* ============================================================
   BADGES GRÁFICAS
============================================================ */
const badgesInfo = {
  m1:{titulo:'Pioneira das Soluções', img:'assets/badges/badge_m1.png', desc:'Você dominou soluto vs solvente!'},
  m2:{titulo:'Mestre da Solubilidade', img:'assets/badges/badge_m2.png', desc:'Coeficientes e curvas: dominados!'},
  m3:{titulo:'Alquimista das Concentrações', img:'assets/badges/badge_m3.png', desc:'C, %, ppm e Molar: você conquistou!'},
  m4:{titulo:'Cientista de Laboratório', img:'assets/badges/badge_m4.png', desc:'Diluição perfeita realizada!'},
  m5:{titulo:'Lenda do ENEM', img:'assets/badges/badge_m5.png', desc:'Você venceu o Boss ENEM!'}
};

/* ============================================================
   ESTADO GLOBAL
============================================================ */
const state = {
  nome:'', avatarId:'curie',
  pontos:0, vidas:3, badges:[], acertos:0, erros:0,
  missoesCompletas:new Set()
};

function getMentora(){ return cientistas.find(c=>c.id===state.avatarId) || cientistas[0]; }

/* ============================================================
   MISSÕES
============================================================ */
const missoes = [
  {
    id:'m1', icon:'🧪', titulo:'O que é uma Solução?',
    desc:'Soluto, solvente e classificação',
    teoria:()=>`
      <h2>🧪 Missão 1 · O que é uma Solução?</h2>
      ${renderMentoria('m1','abertura')}
      <div class="info-box">
        <strong>Cenário-problema:</strong> Você recebe 4 amostras não identificadas no laboratório. Precisa classificá-las corretamente antes do próximo passo.
      </div>
      <h3>Definição</h3>
      <p>Uma <strong>solução</strong> é uma <strong>mistura homogênea</strong> formada por dois ou mais componentes:</p>
      <ul>
        <li><strong style="color:var(--accent)">Soluto</strong> — substância que é dissolvida (geralmente em <em>menor</em> quantidade).</li>
        <li><strong style="color:var(--accent)">Solvente</strong> — substância que dissolve (geralmente em <em>maior</em> quantidade). Quando é a água, dizemos que é uma <em>solução aquosa</em>.</li>
      </ul>
      <div class="exemplo">💧 <strong>Ex.:</strong> em água + sal, o soluto é o sal (NaCl) e o solvente é a água (H₂O).</div>

      <h3>Classificação quanto à quantidade de soluto</h3>
      <ul>
        <li><strong>Insaturada</strong>: menos soluto do que o solvente pode dissolver.</li>
        <li><strong>Saturada</strong>: quantidade exata no limite (Coeficiente de Solubilidade).</li>
        <li><strong>Supersaturada</strong>: mais soluto do que o limite — instável, cristaliza a qualquer perturbação.</li>
      </ul>

      <h3>Dica ENEM 🎯</h3>
      <p>Quando o enunciado diz "150 g de <strong>solução</strong>", isso significa <strong>soluto + solvente</strong>. Se a água tem 90 g, então soluto = 150 − 90 = 60 g.</p>
    `,
    questoes:['q_extra1','q1']
  },
  {
    id:'m2', icon:'📊', titulo:'Coeficiente de Solubilidade',
    desc:'Curvas e limite de dissolução',
    teoria:()=>`
      <h2>📊 Missão 2 · Coeficiente de Solubilidade (CS)</h2>
      ${renderMentoria('m2','abertura')}
      <div class="info-box"><strong>Cenário-problema:</strong> Um técnico aquece uma solução saturada e observa cristais se formando ao esfriar. Por quê?</div>
      <p>O <strong>Coeficiente de Solubilidade</strong> é a quantidade máxima de soluto que se dissolve em uma quantidade padrão de solvente, a uma dada <strong>temperatura</strong> e pressão.</p>
      <div class="formula">CS = massa de soluto / 100 g de solvente (em uma dada T)</div>

      <h3>Exemplo (NaCl)</h3>
      <div class="exemplo">A 20 °C: <strong>36 g de NaCl / 100 g de H₂O</strong>. Se você adicionar 40 g, apenas 36 g se dissolvem — os outros 4 g formam <strong>corpo de fundo</strong>.</div>

      <h3>Efeito da temperatura</h3>
      <ul>
        <li>Para a maioria dos sais, o CS <strong>aumenta</strong> com a temperatura (dissolução endotérmica).</li>
        <li>Para gases dissolvidos, o CS <strong>diminui</strong> com o aumento da temperatura → daí a menor concentração de O₂ em rios quentes.</li>
      </ul>

      <h3>Curva de solubilidade</h3>
      <p>Quando aquecemos uma solução saturada (com corpo de fundo) e resfriamos, o excesso de soluto <strong>cristaliza</strong> (filtração) ou o solvente pode ser separado por <strong>destilação</strong>.</p>
    `,
    questoes:['q4','q_extra2']
  },
  {
    id:'m3', icon:'⚗️', titulo:'Concentrações',
    desc:'C, título (%), ppm e mol/L',
    teoria:()=>`
      <h2>⚗️ Missão 3 · Concentrações</h2>
      ${renderMentoria('m3','abertura')}
      <div class="info-box"><strong>Cenário-problema:</strong> Você precisa preparar soluções para diferentes exames. Como calcular a quantidade certa?</div>

      <h3>1️⃣ Concentração comum (C)</h3>
      <div class="formula">C = m<sub>soluto</sub> / V<sub>solução</sub>  (g/L)</div>

      <h3>2️⃣ Título em massa (%)</h3>
      <div class="formula">T% = (m<sub>soluto</sub> / m<sub>solução</sub>) × 100</div>
      <div class="exemplo">Ex.: 60 g de ureia em 150 g de solução → T = (60/150)·100 = <strong>40 %</strong></div>

      <h3>3️⃣ Partes por milhão (ppm)</h3>
      <div class="formula">ppm = mg soluto / kg solução  →  1 ppm ≈ 1 mg / L (soluções diluídas)</div>

      <h3>4️⃣ Concentração molar (Molaridade)</h3>
      <div class="formula">M = n<sub>soluto</sub> / V<sub>solução(L)</sub>  =  m / (MM · V)</div>

      <h3>Diluição</h3>
      <div class="formula">C<sub>i</sub> · V<sub>i</sub> = C<sub>f</sub> · V<sub>f</sub></div>
    `,
    questoes:['q3','q5']
  },
  {
    id:'m4', icon:'🎮', titulo:'Laboratório Virtual',
    desc:'Simule uma diluição',
    teoria:()=>`
      <h2>🎮 Missão 4 · Laboratório Virtual de Diluição</h2>
      ${renderMentoria('m4','abertura')}
      <div class="info-box"><strong>Missão prática:</strong> ajuste os controles até chegar à concentração final desejada.</div>
      <p>Você tem uma solução-mãe de <strong>NaCl 200 g/L</strong>. O médico pediu uma solução final de <strong>50 g/L</strong>. Use a equação da diluição para descobrir o volume de água a adicionar.</p>
      <div class="formula">C<sub>i</sub> · V<sub>i</sub> = C<sub>f</sub> · V<sub>f</sub></div>

      <div class="lab">
        <div class="slider-group">
          <label>Volume da solução-mãe (V<sub>i</sub>): <span id="viVal">50</span> mL</label>
          <input type="range" id="viSlider" min="10" max="200" step="5" value="50">
        </div>
        <div class="slider-group">
          <label>Volume de água adicionada: <span id="vaVal">150</span> mL</label>
          <input type="range" id="vaSlider" min="0" max="500" step="10" value="150">
        </div>
        <div class="becher-area">
          <div class="becher" style="height:120px">
            <span class="conc">200 g/L</span>
            <span class="label">Solução-mãe</span>
          </div>
          <div style="font-size:2rem;align-self:center">➕</div>
          <div class="becher" style="height:100px;background:linear-gradient(180deg,transparent 0%,transparent 30%,#38bdf8 30%,#0284c7 100%)">
            <span class="conc">💧 H₂O</span>
            <span class="label">Água pura</span>
          </div>
          <div style="font-size:2rem;align-self:center">➡️</div>
          <div class="becher" id="becherFinal" style="height:160px">
            <span class="conc" id="cfVal">50,0 g/L</span>
            <span class="label">Solução final</span>
          </div>
        </div>
        <p style="text-align:center;font-size:1.05rem"><strong>Concentração final calculada:</strong> <span id="cfCalc" style="color:var(--gold);font-weight:800">50,0</span> g/L</p>
        <p id="labFeedback" style="text-align:center;margin-top:10px"></p>
        <div style="text-align:center;margin-top:14px">
          <button class="btn" id="btnLabCheck">✔ Verificar diluição correta</button>
        </div>
      </div>
    `,
    questoes:[]
  },
  {
    id:'m5', icon:'🏆', titulo:'Boss ENEM',
    desc:'Desafio final com as questões da apostila',
    teoria:()=>`
      <h2>🏆 Missão Final · Boss ENEM</h2>
      ${renderMentoria('m5','abertura')}
      <div class="info-box">
        <strong>⚠️ Desafio máximo:</strong> Você enfrentará as questões restantes da apostila. Cada uma tem <strong>tempo cronometrado</strong>. Boa sorte!
      </div>
      <p>Regras: acertos valem <strong>+30 XP</strong>. Erros custam uma <strong>vida</strong> ❤️. Você ainda pode ler a explicação depois de responder.</p>
    `,
    questoes:['q2','q_extra3']
  }
];

/* ============================================================
   QUESTÕES
============================================================ */
const questoes = {
  q1:{
    tag:'ENEM 2023 · Apostila Q1', xp:25, tempo:120, missao:'m1',
    enunciado:`<p>O consumo exagerado de refrigerantes é preocupante, pois contribui para o aumento de casos de obesidade e diabetes. Considere dois refrigerantes enlatados, um comum e um diet, e que ambos possuam a mesma quantidade de aditivos, exceto pela presença de açúcar. O refrigerante comum contém basicamente água carbonatada e grande quantidade de açúcar; já o refrigerante diet tem água carbonatada e adoçantes, cujas massas são muito pequenas.</p>
      <p class="fonte">CAVAGIS, A. D. M.; PEREIRA, E. A.; OLIVEIRA, L. C. Química Nova na Escola, n. 3, ago. 2014 (adaptado).</p>
      <p>Entre as duas versões apresentadas, o refrigerante comum possui:</p>`,
    alts:[
      {l:'A', t:'maior densidade.', correct:true},
      {l:'B', t:'menor viscosidade.'},
      {l:'C', t:'maior volume de gás dissolvido.'},
      {l:'D', t:'menor massa de solutos dissolvidos.'},
      {l:'E', t:'maior temperatura de congelamento.'}
    ],
    explain:{
      correta:'A',
      textoOk:`<strong>Muito bem!</strong> O refrigerante comum tem grande quantidade de <strong>açúcar dissolvido</strong> — o soluto adiciona <strong>massa</strong> sem aumentar significativamente o volume da lata. Logo, densidade (d = m/V) é <strong>maior</strong>. Experiência famosa: em uma piscina, a lata do refrigerante comum <em>afunda</em> e a diet <em>flutua</em>!`,
      textoErr:`<strong>Analisando as alternativas:</strong><br>
        • <strong>B (viscosidade)</strong>: o açúcar aumenta a viscosidade, não diminui.<br>
        • <strong>C (gás)</strong>: ambos têm essencialmente o mesmo CO₂ dissolvido.<br>
        • <strong>D (massa de solutos)</strong>: o comum tem <em>mais</em> soluto (açúcar), não menos.<br>
        • <strong>E (congelamento)</strong>: soluto abaixa o ponto de congelamento (efeito coligativo — crioscopia).<br>
        <br>✅ <strong>Resposta correta: A</strong> — o açúcar adiciona massa ao mesmo volume, aumentando a densidade.`
    }
  },
  q2:{
    tag:'ENEM 2020 · Apostila Q2', xp:35, tempo:150, missao:'m5',
    enunciado:`<p>Pesquisadores coletaram amostras de água de um rio em pontos diferentes, distantes alguns quilômetros um do outro. Ao longo do rio há locais de águas limpas, locais que recebem descarga de esgoto de área urbana, e locais onde há decomposição ativa com ausência de peixes. Foram analisados dois parâmetros: <strong>oxigênio dissolvido (OD)</strong> e <strong>demanda bioquímica de oxigênio (DBO)</strong>.</p>
      <p>Sabe-se que a <em>Resolução Conama nº 357/2005</em> exige, para consumo humano após tratamento convencional: <strong>OD ≥ 5 mg/L</strong> e <strong>DBO ≤ 5 mg/L</strong>.</p>
      <div class="info-box">
        <strong>Gráfico (interpretação dos pontos 1 a 5):</strong><br>
        • Ponto 1: OD ≈ 8 · DBO ≈ 2 (águas limpas)<br>
        • Ponto 2: OD ≈ 6 · DBO ≈ 4<br>
        • Ponto 3: OD ≈ 2 · DBO ≈ 14 ⚠️ (esgoto recém-despejado)<br>
        • Ponto 4: OD ≈ 4 · DBO ≈ 8<br>
        • Ponto 5: OD ≈ 6 · DBO ≈ 5
      </div>
      <p><strong>Qual ponto de amostragem da água do rio está mais próximo ao local em que o rio recebe despejo de esgoto?</strong></p>`,
    alts:[
      {l:'A', t:'1'},
      {l:'B', t:'2'},
      {l:'C', t:'3', correct:true},
      {l:'D', t:'4'},
      {l:'E', t:'5'}
    ],
    explain:{
      correta:'C',
      textoOk:`<strong>Excelente análise!</strong> No ponto de despejo, matéria orgânica é despejada em grande quantidade → a <strong>DBO dispara</strong> (microrganismos consomem MUITO O₂ para decompor) e o <strong>OD despenca</strong>. O ponto 3 mostra exatamente esse padrão: <em>máximo de DBO e mínimo de OD</em>.`,
      textoErr:`<strong>Como interpretar o gráfico:</strong><br>
        • <strong>OD alto + DBO baixa</strong> = água limpa (pontos 1 e 2).<br>
        • <strong>OD baixo + DBO alta</strong> = despejo de esgoto (ponto 3 ✅).<br>
        • Após o ponto 3, o rio se <em>autodepura</em> — a DBO cai e o OD volta a subir (pontos 4 e 5).<br><br>
        ✅ <strong>Resposta correta: C (ponto 3)</strong>.`
    }
  },
  q3:{
    tag:'ENEM 2019 · Apostila Q3', xp:35, tempo:180, missao:'m3',
    enunciado:`<p>Nos municípios onde foi detectada a resistência do <em>Aedes aegypti</em>, o larvicida tradicional será substituído por outro com concentração de <strong>10% (v/v)</strong> de um novo princípio ativo. Para evitar erros de manipulação, esse novo larvicida será fornecido em frascos plásticos e, para uso em campo, todo o seu conteúdo deve ser diluído em água até o volume final de <strong>um litro</strong>. O objetivo é obter uma concentração final de <strong>2% em volume</strong> do princípio ativo.</p>
      <p><strong>Que volume de larvicida deve conter o frasco plástico?</strong></p>`,
    alts:[
      {l:'A', t:'10 mL'},
      {l:'B', t:'50 mL'},
      {l:'C', t:'100 mL'},
      {l:'D', t:'200 mL', correct:true},
      {l:'E', t:'500 mL'}
    ],
    explain:{
      correta:'D',
      textoOk:`<strong>Perfeito!</strong> Aplicando a equação da diluição em volume:<br>
        <div class="formula">C<sub>i</sub>·V<sub>i</sub> = C<sub>f</sub>·V<sub>f</sub><br>10% · V<sub>i</sub> = 2% · 1000 mL<br>V<sub>i</sub> = 2000/10 = <strong>200 mL</strong></div>`,
      textoErr:`<strong>Solução passo a passo:</strong><br>
        1️⃣ Concentração inicial do frasco: <strong>10% (v/v)</strong><br>
        2️⃣ Concentração final desejada: <strong>2% (v/v)</strong><br>
        3️⃣ Volume final: <strong>1 L = 1000 mL</strong><br>
        4️⃣ Como a massa/volume do princípio ativo se conserva:<br>
        <div class="formula">C<sub>i</sub>·V<sub>i</sub> = C<sub>f</sub>·V<sub>f</sub><br>
        10 · V<sub>i</sub> = 2 · 1000 → V<sub>i</sub> = <strong>200 mL</strong></div>
        ✅ <strong>Alternativa D</strong>.`
    }
  },
  q4:{
    tag:'ENEM · Apostila Q4', xp:35, tempo:180, missao:'m2',
    enunciado:`<p style="font-style:italic">"Deus quis que a terra fosse toda uma / Que o mar unisse, já não separasse / Sagrou-te, e foste desvendando a espuma."</p>
      <p class="fonte">Fernando Pessoa. O Infante, Mensagem Poética, 1990.</p>
      <p>No trecho do poema, o autor faz referência ao mar, que é rico em sais — em especial ao <strong>NaCl</strong>. A tabela mostra as solubilidades do NaCl em diferentes temperaturas:</p>
      <table>
        <tr><th>Temperatura (°C)</th><th>Solubilidade (g NaCl / 100 g H₂O)</th></tr>
        <tr><td>20</td><td>36,0</td></tr>
        <tr><td>30</td><td>36,3</td></tr>
        <tr><td>40</td><td>36,6</td></tr>
        <tr><td>50</td><td>37,0</td></tr>
      </table>
      <p><strong>Se uma solução saturada de NaCl a 50 °C é resfriada a 20 °C, a quantidade do componente da fase sólida a 20 °C e o processo de separação das duas fases obtidas são:</strong></p>`,
    alts:[
      {l:'A', t:'0,1 g e filtração.'},
      {l:'B', t:'0,3 g e destilação.'},
      {l:'C', t:'0,6 g e destilação.'},
      {l:'D', t:'1,0 g e destilação.'},
      {l:'E', t:'1,0 g e filtração.', correct:true}
    ],
    explain:{
      correta:'E',
      textoOk:`<strong>Excelente!</strong> A 50 °C dissolve 37,0 g / 100 g de água. Ao resfriar até 20 °C, a solubilidade cai para 36,0 g. A diferença <strong>37,0 − 36,0 = 1,0 g</strong> precipita como fase sólida. Como temos <strong>sólido + líquido</strong>, a separação adequada é a <strong>filtração</strong>.`,
      textoErr:`<strong>Raciocínio:</strong><br>
        • A 50 °C: solução saturada dissolve <strong>37,0 g</strong> de NaCl em 100 g de água.<br>
        • Ao resfriar até 20 °C, o CS cai para <strong>36,0 g</strong>.<br>
        • Excesso que <em>precipita</em> como sólido: 37,0 − 36,0 = <strong>1,0 g</strong>.<br>
        • Como agora temos duas fases (sólido + líquido), separamos por <strong>filtração</strong> (a destilação só serve para separar líquidos por evaporação).<br><br>
        ✅ <strong>Resposta correta: E</strong>.`
    }
  },
  q5:{
    tag:'ENEM · Apostila Q5', xp:30, tempo:120, missao:'m3',
    enunciado:`<p>A <strong>ureia</strong> é uma substância produzida pelo fígado que permite analisar o funcionamento não só do fígado, mas principalmente dos rins.</p>
      <p>Se tivermos, de forma hipotética, uma solução de ureia de <strong>150 g</strong> na presença de <strong>90 g de água</strong>, haverá uma concentração, em termos percentuais, de massa de ureia de:</p>`,
    alts:[
      {l:'A', t:'40%.', correct:true},
      {l:'B', t:'20%.'},
      {l:'C', t:'25%.'},
      {l:'D', t:'15%.'},
      {l:'E', t:'10%.'}
    ],
    explain:{
      correta:'A',
      textoOk:`<strong>Isso mesmo!</strong> Cuidado com a pegadinha: <em>solução</em> = soluto + solvente. Se solução = 150 g e água = 90 g, então ureia = 150 − 90 = 60 g. Portanto:<br>
        <div class="formula">T% = (60/150) × 100 = <strong>40%</strong></div>`,
      textoErr:`<strong>⚠️ Pegadinha clássica do ENEM:</strong><br>
        "Solução de 150 g" NÃO significa 150 g de soluto — significa <strong>massa total</strong> (soluto + solvente).<br>
        1️⃣ Massa da solução = 150 g<br>
        2️⃣ Massa da água (solvente) = 90 g<br>
        3️⃣ Massa da ureia (soluto) = 150 − 90 = <strong>60 g</strong><br>
        4️⃣ Título: T% = (m<sub>soluto</sub>/m<sub>solução</sub>)·100 = (60/150)·100 = <strong>40%</strong><br><br>
        ✅ <strong>Alternativa A</strong>.`
    }
  },
  q_extra1:{
    tag:'DESAFIO EXTRA · Estilo ENEM', xp:20, tempo:90, missao:'m1',
    enunciado:`<p>O soro fisiológico usado em hospitais é preparado dissolvendo-se 9,0 g de cloreto de sódio (NaCl) em água suficiente para 1,0 L de solução, sendo comumente chamado de "soro 0,9%".</p>
      <p>Nessa solução, o soluto e o solvente são, respectivamente:</p>`,
    alts:[
      {l:'A', t:'água e NaCl.'},
      {l:'B', t:'NaCl e água.', correct:true},
      {l:'C', t:'Na⁺ e Cl⁻.'},
      {l:'D', t:'H₂O e H⁺.'},
      {l:'E', t:'NaCl sólido e NaCl líquido.'}
    ],
    explain:{
      correta:'B',
      textoOk:`<strong>Correto!</strong> O <strong>soluto</strong> é a substância dissolvida em menor quantidade (NaCl, 9 g) e o <strong>solvente</strong> é o meio dispersor em maior quantidade (água, ~991 g).`,
      textoErr:`<strong>Regra fundamental:</strong><br>
        • <strong>Soluto</strong>: menor quantidade e <em>é dissolvido</em>. Aqui: NaCl (9 g).<br>
        • <strong>Solvente</strong>: maior quantidade e <em>dissolve</em>. Aqui: H₂O (~991 g).<br><br>
        ✅ Alternativa B.`
    }
  },
  q_extra2:{
    tag:'DESAFIO EXTRA · Estilo ENEM', xp:30, tempo:120, missao:'m2',
    enunciado:`<p>A tabela mostra o coeficiente de solubilidade do KNO₃ em água:</p>
      <table>
        <tr><th>T (°C)</th><th>CS (g KNO₃ / 100 g H₂O)</th></tr>
        <tr><td>20</td><td>32</td></tr>
        <tr><td>40</td><td>64</td></tr>
        <tr><td>60</td><td>110</td></tr>
      </table>
      <p>Adicionando-se 100 g de KNO₃ em 200 g de água a 40 °C, a solução obtida será classificada como:</p>`,
    alts:[
      {l:'A', t:'insaturada.', correct:true},
      {l:'B', t:'saturada, sem corpo de fundo.'},
      {l:'C', t:'saturada, com corpo de fundo.'},
      {l:'D', t:'supersaturada.'},
      {l:'E', t:'heterogênea sem dissolução.'}
    ],
    explain:{
      correta:'A',
      textoOk:`<strong>Muito bem!</strong> A 40 °C, o CS é 64 g / 100 g H₂O. Em <strong>200 g</strong> de água caberiam 2·64 = <strong>128 g</strong>. Como só adicionamos <strong>100 g</strong> (menos que o limite), a solução está <strong>insaturada</strong>.`,
      textoErr:`<strong>Análise:</strong><br>
        1️⃣ CS a 40 °C = 64 g/100 g de água.<br>
        2️⃣ Em 200 g de água, o máximo dissolvido = 64·2 = <strong>128 g</strong>.<br>
        3️⃣ Adicionamos apenas 100 g → <em>abaixo</em> do limite.<br>
        4️⃣ Portanto, tudo se dissolve → <strong>solução insaturada</strong>.<br><br>
        ✅ Alternativa A.`
    }
  },
  q_extra3:{
    tag:'BOSS ENEM · Estilo ENEM', xp:40, tempo:180, missao:'m5',
    enunciado:`<p>A OMS estabelece que a concentração máxima permitida de <strong>flúor</strong> em água potável é <strong>1,5 ppm</strong>. Uma análise em uma cidade detectou 3,0 mg de F⁻ em 1,0 L de água.</p>
      <p>Considerando 1 ppm = 1 mg/L, essa água:</p>`,
    alts:[
      {l:'A', t:'está dentro do limite, pois 3,0 mg < 1,5 ppm.'},
      {l:'B', t:'está exatamente no limite estabelecido.'},
      {l:'C', t:'apresenta o dobro do limite máximo permitido.', correct:true},
      {l:'D', t:'apresenta metade do limite máximo permitido.'},
      {l:'E', t:'não pode ser avaliada com esses dados.'}
    ],
    explain:{
      correta:'C',
      textoOk:`<strong>Correto!</strong> Concentração = 3,0 mg/L = 3,0 ppm. Como o limite é 1,5 ppm, temos 3,0/1,5 = <strong>2× o limite</strong>. Essa água é imprópria para consumo.`,
      textoErr:`<strong>Cálculo:</strong><br>
        • 3,0 mg em 1,0 L = 3,0 mg/L = <strong>3,0 ppm</strong>.<br>
        • Limite OMS = 1,5 ppm.<br>
        • 3,0 / 1,5 = <strong>2 vezes o limite</strong>.<br><br>
        ✅ Alternativa C.`
    }
  }
};

/* ============================================================
   RENDERIZAÇÕES DE MENTORIA
============================================================ */
function renderMentoria(missaoId, tipo, msgCustom){
  const m = getMentora();
  let msg;
  if(msgCustom){ msg = msgCustom; }
  else if(tipo==='abertura'){ msg = m.dicasMissao[missaoId] || m.dicaPadrao; }
  else{ msg = m.dicaPadrao; }
  return `
    <div class="mentor-box">
      <img src="${m.img}" alt="Mentora ${m.nome}" onerror="this.style.display='none'">
      <div class="mentor-content">
        <h4>👩‍🔬 Mentora ${m.nome} <span style="color:var(--muted);font-weight:400;font-size:.8rem">· ${m.area}</span></h4>
        <p class="fala">${msg.replace(/^"|"$/g,'')}</p>
      </div>
    </div>
  `;
}

/* ============================================================
   TELA INICIAL — SELEÇÃO DE MENTORA
============================================================ */
function renderScientists(){
  const grid = document.getElementById('scientistGrid');
  grid.innerHTML = '';
  cientistas.forEach(c=>{
    const el = document.createElement('div');
    el.className = 'scientist-card';
    el.dataset.id = c.id;
    el.innerHTML = `
      <img src="${c.img}" alt="${c.nome}" onerror="this.style.background='#334155'">
      <h4>${c.nome}</h4>
      <div class="area">${c.area}</div>
      <div class="bio">${c.bio}</div>
    `;
    el.addEventListener('click',()=>{
      document.querySelectorAll('.scientist-card').forEach(x=>x.classList.remove('selected'));
      el.classList.add('selected');
      state.avatarId = c.id;
      toast(`💫 Mentora selecionada: ${c.nome}`);
    });
    grid.appendChild(el);
  });
  // pré-seleciona Curie
  grid.querySelector('[data-id="curie"]').classList.add('selected');
}

/* ============================================================
   INICIALIZAÇÃO — START
============================================================ */
document.addEventListener('DOMContentLoaded',()=>{
  renderScientists();
  updateProgress();

  document.getElementById('btnStart').addEventListener('click',()=>{
    const n = document.getElementById('nomeInput').value.trim();
    if(!n){ toast('✏️ Digite seu nome para começar!'); return; }
    state.nome = n;
    const m = getMentora();
    document.getElementById('avatarHUD').src = m.img;
    document.getElementById('userName').textContent = n;
    document.getElementById('oiNome').textContent = n;
    document.getElementById('oiMentora').textContent = m.nome;
    showScreen('s-trilha');
    renderTrilha();
    toast(`🚀 Boa sorte, ${n}! ${m.nome} te acompanhará!`);
  });
});

/* ============================================================
   TRILHA DE MISSÕES
============================================================ */
function renderTrilha(){
  const grid = document.getElementById('trilhaGrid');
  grid.innerHTML = '';
  missoes.forEach((m,i)=>{
    const anterior = i===0 ? true : state.missoesCompletas.has(missoes[i-1].id);
    const completa = state.missoesCompletas.has(m.id);
    const locked = !anterior && !completa;
    const el = document.createElement('div');
    el.className = 'missao' + (locked?' locked':'') + (completa?' completed':'');
    el.innerHTML = `
      <div class="badge-check">✅</div>
      <div class="icon">${locked?'🔒':m.icon}</div>
      <img src="${badgesInfo[m.id].img}" class="badge-preview" alt="Badge ${badgesInfo[m.id].titulo}" onerror="this.style.display='none'">
      <h3>Missão ${i+1}</h3>
      <p><strong>${m.titulo}</strong></p>
      <p style="font-size:.75rem">${m.desc}</p>
      <p style="font-size:.7rem;color:var(--gold);margin-top:6px">🏅 ${badgesInfo[m.id].titulo}</p>
    `;
    if(!locked) el.addEventListener('click',()=>iniciarMissao(m.id));
    grid.appendChild(el);
  });
}

/* ============================================================
   MISSÕES
============================================================ */
let missaoAtual = null;
let questaoIdx = 0;
let timerInt = null;

function iniciarMissao(id){
  missaoAtual = missoes.find(m=>m.id===id);
  questaoIdx = 0;
  renderMissao();
  showScreen('s-missao');
}

function renderMissao(){
  const s = document.getElementById('s-missao');
  const hasQuestoes = missaoAtual.questoes.length > 0;
  s.innerHTML = `
    <div class="card">
      ${missaoAtual.teoria()}
      <div style="text-align:center;margin-top:20px">
        <button class="btn secondary" onclick="voltarTrilha()">← Trilha</button>
        ${hasQuestoes ? `<button class="btn gold" id="btnDesafio">🎯 Enfrentar Desafio (${missaoAtual.questoes.length} questão(ões))</button>` : `<button class="btn gold" id="btnCompletar">✔ Concluir Missão</button>`}
      </div>
    </div>
  `;
  if(missaoAtual.id==='m4') hookLab();
  const bd = document.getElementById('btnDesafio');
  if(bd) bd.addEventListener('click',()=>iniciarQuestoes());
  const bc = document.getElementById('btnCompletar');
  if(bc) bc.addEventListener('click',()=>completarMissao());
}

function hookLab(){
  const vi = document.getElementById('viSlider');
  const va = document.getElementById('vaSlider');
  const viVal = document.getElementById('viVal');
  const vaVal = document.getElementById('vaVal');
  const cfCalc = document.getElementById('cfCalc');
  const cfVal = document.getElementById('cfVal');
  const becherFinal = document.getElementById('becherFinal');
  const labFb = document.getElementById('labFeedback');

  function update(){
    const V1 = +vi.value;
    const Va = +va.value;
    const Vf = V1 + Va;
    const Cf = (200 * V1) / Vf;
    viVal.textContent = V1;
    vaVal.textContent = Va;
    cfCalc.textContent = Cf.toFixed(1);
    cfVal.textContent = Cf.toFixed(1) + ' g/L';
    becherFinal.style.height = Math.min(180, 60 + Vf/4) + 'px';
    if(Math.abs(Cf-50) < 1){
      labFb.innerHTML = '🎉 <strong style="color:var(--green)">Perfeito! Você atingiu 50 g/L.</strong>';
    } else if(Cf > 50){
      labFb.innerHTML = '💧 <span style="color:var(--accent)">Adicione MAIS água — está concentrado demais.</span>';
    } else {
      labFb.innerHTML = '⚗️ <span style="color:var(--gold)">Adicione MAIS solução-mãe (ou menos água).</span>';
    }
  }
  vi.addEventListener('input',update);
  va.addEventListener('input',update);
  update();

  document.getElementById('btnLabCheck').addEventListener('click',()=>{
    const V1 = +vi.value, Va = +va.value;
    const Cf = 200*V1/(V1+Va);
    if(Math.abs(Cf-50) < 1){
      addXP(40);
      toast('🏅 +40 XP · Diluição perfeita!');
      completarMissao();
    } else {
      toast('❌ Ainda não chegou a 50 g/L. Tente ajustar!');
    }
  });
}

/* ============================================================
   QUESTÕES
============================================================ */
function iniciarQuestoes(){
  questaoIdx = 0;
  renderQuestao();
}

function renderQuestao(){
  clearInterval(timerInt);
  const qid = missaoAtual.questoes[questaoIdx];
  const q = questoes[qid];
  const s = document.getElementById('s-missao');
  s.innerHTML = `
    <div class="card">
      <div class="questao-header">
        <span class="questao-tag">${q.tag}</span>
        <span class="timer" id="timer">⏱️ ${formatTime(q.tempo)}</span>
      </div>
      <div class="enunciado">${q.enunciado}</div>
      <div class="alternativas" id="alts"></div>
      <div class="feedback" id="fb"></div>
      <div style="text-align:center;margin-top:16px">
        <button class="btn secondary" onclick="voltarTrilha()">← Sair</button>
        <button class="btn" id="btnProx" style="display:none">Próxima ▶</button>
      </div>
    </div>
  `;
  const altBox = document.getElementById('alts');
  q.alts.forEach(a=>{
    const el = document.createElement('div');
    el.className = 'alt';
    el.innerHTML = `<div class="letra">${a.l}</div><div>${a.t}</div>`;
    el.addEventListener('click',()=>responder(qid,a,el));
    altBox.appendChild(el);
  });
  startTimer(q.tempo, qid);
}

function startTimer(seconds, qid){
  const tel = document.getElementById('timer');
  let t = seconds;
  timerInt = setInterval(()=>{
    t--;
    if(tel) tel.textContent = '⏱️ ' + formatTime(t);
    if(t<=20 && tel) tel.classList.add('warn');
    if(t<=0){
      clearInterval(timerInt);
      timeoutQuestao(qid);
    }
  },1000);
}

function formatTime(s){
  const m = Math.floor(s/60), r = s%60;
  return `${m}:${r.toString().padStart(2,'0')}`;
}

function responder(qid, alt, el){
  clearInterval(timerInt);
  const q = questoes[qid];
  document.querySelectorAll('.alt').forEach(x=>{x.classList.add('disabled');x.style.pointerEvents='none';});
  const fb = document.getElementById('fb');
  fb.classList.add('show');
  const mentora = getMentora();
  if(alt.correct){
    el.classList.add('correct');
    fb.classList.add('ok');
    fb.innerHTML = `
      <h4 style="color:var(--green)">✅ Resposta correta! (+${q.xp} XP)</h4>
      <div class="explain">${q.explain.textoOk}</div>
      ${renderMentoria(q.missao,'feedback',`Muito bem, ${state.nome}! Continue nesse ritmo — a ciência é feita de perseverança.`)}
    `;
    addXP(q.xp);
    state.acertos++;
    confetti();
    toast('🎯 +' + q.xp + ' XP!');
  } else {
    el.classList.add('wrong');
    document.querySelectorAll('.alt').forEach(x=>{
      const letra = x.querySelector('.letra').textContent;
      if(letra===q.explain.correta) x.classList.add('correct');
    });
    fb.classList.add('err');
    fb.innerHTML = `
      <h4 style="color:var(--red)">❌ Não foi dessa vez (resposta correta: ${q.explain.correta})</h4>
      <div class="explain">${q.explain.textoErr}</div>
      ${renderMentoria(q.missao,'feedback',`${state.nome}, o erro também ensina. Analise a explicação e siga em frente!`)}
    `;
    state.erros++;
    perderVida();
  }
  document.getElementById('btnProx').style.display='inline-block';
  document.getElementById('btnProx').onclick = ()=>{
    if(questaoIdx < missaoAtual.questoes.length-1){
      questaoIdx++;
      renderQuestao();
    } else {
      completarMissao();
    }
  };
}

function timeoutQuestao(qid){
  const q = questoes[qid];
  document.querySelectorAll('.alt').forEach(x=>{
    x.classList.add('disabled');
    x.style.pointerEvents='none';
    const letra = x.querySelector('.letra').textContent;
    if(letra===q.explain.correta) x.classList.add('correct');
  });
  const fb = document.getElementById('fb');
  fb.classList.add('show','err');
  fb.innerHTML = `
    <h4 style="color:var(--red)">⏰ Tempo esgotado! (resposta correta: ${q.explain.correta})</h4>
    <div class="explain">${q.explain.textoErr}</div>
    ${renderMentoria(q.missao,'feedback','Tempo é essencial no ENEM. Treine para melhorar sua velocidade sem perder a precisão.')}
  `;
  state.erros++;
  perderVida();
  document.getElementById('btnProx').style.display='inline-block';
  document.getElementById('btnProx').onclick = ()=>{
    if(questaoIdx < missaoAtual.questoes.length-1){ questaoIdx++; renderQuestao(); }
    else completarMissao();
  };
}

function completarMissao(){
  if(!state.missoesCompletas.has(missaoAtual.id)){
    state.missoesCompletas.add(missaoAtual.id);
    state.badges.push(missaoAtual.id);
    renderBadgeHUD();
    toast('🏅 Missão concluída! +Badge: ' + badgesInfo[missaoAtual.id].titulo);
  }
  updateProgress();
  if(state.missoesCompletas.size === missoes.length){
    finalizar();
  } else {
    voltarTrilha();
  }
}

function voltarTrilha(){
  clearInterval(timerInt);
  showScreen('s-trilha');
  renderTrilha();
}

/* ============================================================
   HUD DE BADGES
============================================================ */
function renderBadgeHUD(){
  const g = document.getElementById('badgeGallery');
  g.innerHTML = '';
  state.badges.forEach(bid=>{
    const b = badgesInfo[bid];
    const img = document.createElement('img');
    img.src = b.img;
    img.title = b.titulo + ' — ' + b.desc;
    img.alt = b.titulo;
    g.appendChild(img);
  });
  document.getElementById('badgeCount').textContent = state.badges.length;
}

/* ============================================================
   UTILIDADES
============================================================ */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

function addXP(v){
  state.pontos += v;
  document.getElementById('pontos').textContent = state.pontos;
}

function perderVida(){
  if(state.vidas > 0){
    state.vidas--;
    const hearts = document.querySelectorAll('#lives .heart');
    hearts[state.vidas].classList.add('lost');
  }
  if(state.vidas <= 0){
    setTimeout(()=>{
      alert('💀 Você perdeu todas as vidas! Recarregando com nova chance...');
      state.vidas = 3;
      document.querySelectorAll('#lives .heart').forEach(h=>h.classList.remove('lost'));
    },500);
  }
}

function updateProgress(){
  const pct = (state.missoesCompletas.size / missoes.length) * 100;
  const pf = document.getElementById('progFill');
  const pt = document.getElementById('progText');
  if(pf) pf.style.width = pct + '%';
  if(pt) pt.textContent = `Progresso: ${state.missoesCompletas.size}/${missoes.length} missões · ${Math.round(pct)}%`;
}

function toast(msg){
  const t = document.getElementById('toast');
  t.innerHTML = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2600);
}

function confetti(){
  const cores = ['#10b981','#22d3ee','#fbbf24','#ef4444','#a78bfa'];
  for(let i=0;i<40;i++){
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random()*100 + '%';
    c.style.background = cores[Math.floor(Math.random()*cores.length)];
    c.style.animationDuration = (Math.random()*1.5+1.5)+'s';
    c.style.transform = 'rotate(' + (Math.random()*360) + 'deg)';
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3500);
  }
}

/* ============================================================
   TELA FINAL
============================================================ */
function finalizar(){
  showScreen('s-final');
  document.getElementById('fPontos').textContent = state.pontos;
  document.getElementById('fAcertos').textContent = state.acertos;
  document.getElementById('fBadges').textContent = state.badges.length;

  let rank='—', medal='🥉', dica='';
  if(state.pontos >= 200){ rank='S · Mestre das Soluções'; medal='🥇'; dica='Excelente! Você está pronto(a) para o ENEM de Química.'; }
  else if(state.pontos >= 140){ rank='A · Químico(a) Experiente'; medal='🥈'; dica='Muito bem! Revise os pontos onde errou.'; }
  else if(state.pontos >= 80){ rank='B · Aprendiz'; medal='🥉'; dica='Bom começo — refaça as questões para consolidar.'; }
  else{ rank='C · Iniciante'; medal='🎖️'; dica='Não desista! Volte à teoria e tente novamente.'; }
  document.getElementById('fRank').textContent = rank.split(' · ')[0];
  document.getElementById('medalha').textContent = medal;

  const bg = document.getElementById('finalBadges');
  bg.innerHTML = '';
  state.badges.forEach(bid=>{
    const img = document.createElement('img');
    img.src = badgesInfo[bid].img;
    img.title = badgesInfo[bid].titulo;
    bg.appendChild(img);
  });

  const m = getMentora();
  document.getElementById('finalDicaFinal').innerHTML = `
    <strong>${state.nome}</strong> — <em>${rank}</em><br>
    ${dica}<br><br>
    ✅ Acertos: <strong>${state.acertos}</strong> · ❌ Erros: <strong>${state.erros}</strong>
    ${renderMentoria('m5','feedback',`${state.nome}, você concluiu a jornada. Como pioneira ${m.nome === state.nome ? 'em minha área' : 'da minha área'}, digo: a ciência precisa de você. Boa prova!`)}
  `;
  confetti();setTimeout(confetti,600);setTimeout(confetti,1200);
}
