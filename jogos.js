// "Verdade ou mito?" games. Each statement: t = text, a = true (verdade) / false (mito), e = explanation.
// Anonymous results go to GoatCounter as events: jogo/<quiz>/q<n>/certo|errado and jogo/<quiz>/fim/<score>.
var JOGOS = {
  pt: {
    ui: {
      truth: 'Verdade', myth: 'Mito', next: 'Seguinte', results: 'Ver resultado', right: 'Certo!', wrong: 'Não é bem assim.',
      itIs: 'É', truthW: 'verdade', mythW: 'mito', of: 'de', score: 'Acertaste', outOf: 'em',
      wrongTitle: 'O que vale a pena rever', allRight: 'Acertaste em tudo. Parabéns!',
      again: 'Jogar outra vez', other: 'Escolher outro jogo', share: 'Desafiar amigas e amigos no WhatsApp',
      shareText: 'Fiz o jogo "Verdade ou mito?" da Soulful Cycles. Quanto sabes tu? ',
      levels: [
        [10, 'Sabes imenso sobre este tema!'],
        [7, 'Sabes bastante! Só alguns mitos te apanharam.'],
        [4, 'Sabes alguma coisa, e ainda há mitos para desfazer.'],
        [0, 'Muitos mitos por desfazer. Ainda bem que jogaste!']
      ]
    },
    quizzes: {
      ciclo: { title: 'Ciclo menstrual', items: [
        { t: 'Não é possível engravidar durante a menstruação.', a: false, e: 'É pouco provável, mas é possível, sobretudo em ciclos curtos: os espermatozoides podem sobreviver até cerca de 5 dias no corpo e a ovulação pode acontecer pouco depois da menstruação.' },
        { t: 'Um ciclo menstrual "normal" tem sempre 28 dias.', a: false, e: '28 dias é só uma média. Em pessoas adultas, ciclos entre cerca de 21 e 35 dias são considerados dentro do esperado, e é normal variarem um pouco de mês para mês.' },
        { t: 'Quem toma a pílula menstrua na pausa da pílula.', a: false, e: 'Na pausa da pílula há uma hemorragia de privação, causada pela descida das hormonas da pílula. Não há ovulação, por isso não é uma menstruação propriamente dita.' },
        { t: 'Dores menstruais tão fortes que impedem o dia a dia são normais e é só aguentar.', a: false, e: 'Algum desconforto é comum, mas dores que impedem de estudar, trabalhar ou dormir merecem atenção médica: podem ser sinal de condições como a endometriose.' },
        { t: 'Usar tampão ou copo menstrual faz perder a virgindade.', a: false, e: 'A virgindade não é um conceito médico e não se "perde" com um tampão ou um copo. O hímen é uma membrana elástica, diferente de pessoa para pessoa.' },
        { t: 'O muco cervical muda ao longo do ciclo e pode ajudar a perceber a fase fértil.', a: true, e: 'Perto da ovulação o muco tende a ficar mais transparente, elástico e escorregadio. Observar estas mudanças é uma das bases dos métodos de perceção da fertilidade.' },
        { t: 'Tomar banho ou lavar o cabelo durante a menstruação faz mal.', a: false, e: 'Não há qualquer problema. A higiene durante a menstruação é igual à do resto do mês, e um banho quente pode até aliviar as dores.' },
        { t: 'O stress pode atrasar ou alterar a menstruação.', a: true, e: 'O stress mexe com as hormonas que regulam o ciclo e pode atrasar a ovulação e, por isso, a menstruação.' },
        { t: 'Em cada menstruação perde-se mais de um litro de sangue.', a: false, e: 'Em média perdem-se cerca de 30 a 40 ml, mais ou menos duas a três colheres de sopa. Perdas muito abundantes devem ser vistas por profissionais de saúde.' },
        { t: 'Só as mulheres menstruam.', a: false, e: 'Homens trans e algumas pessoas não binárias também podem menstruar. E nem todas as mulheres menstruam.' }
      ]},
      anatomia: { title: 'Anatomia', items: [
        { t: 'O clitóris é aquele pequeno "botão" que se vê na parte de cima da vulva, onde os lábios internos se juntam.', a: false, e: 'A parte visível é só a ponta. O clitóris tem também corpo, raízes e bolbos por dentro do corpo, e pode medir cerca de 10 cm no total.' },
        { t: 'Vulva e vagina são a mesma coisa.', a: false, e: 'A vulva é a parte externa (lábios, clitóris, abertura da uretra e da vagina). A vagina é o canal interno que liga a vulva ao colo do útero.' },
        { t: 'O hímen rompe-se na primeira penetração.', a: false, e: 'O hímen é elástico e varia muito de pessoa para pessoa. Muitas vezes não "rompe" nem sangra na primeira penetração, e não serve para provar a virgindade.' },
        { t: 'A vagina precisa de duches vaginais para estar limpa.', a: false, e: 'A vagina limpa-se sozinha. Os duches vaginais podem alterar a flora natural e aumentar o risco de infeções. Para a vulva chega água ou um sabonete suave.' },
        { t: 'É normal a vulva ter um cheiro próprio.', a: true, e: 'A vulva tem um cheiro próprio, que muda ao longo do ciclo. Só vale a pena procurar ajuda se o cheiro mudar muito, por exemplo acompanhado de comichão ou corrimento diferente.' },
        { t: 'Ter os lábios internos maiores do que os externos é uma anomalia.', a: false, e: 'É uma variação muito comum. As vulvas são todas diferentes em forma, tamanho e cor.' },
        { t: 'O pénis e o clitóris desenvolvem-se a partir do mesmo tecido no embrião.', a: true, e: 'Nas primeiras semanas de gestação o tecido é o mesmo, e depois desenvolve-se num pénis ou num clitóris. Por isso têm estruturas parecidas, como a glande.' },
        { t: 'O tamanho do pénis em repouso indica o tamanho em ereção.', a: false, e: 'Não é um bom indicador: há pénis que aumentam pouco e outros que aumentam bastante em ereção.' },
        { t: 'A próstata também pode dar prazer.', a: true, e: 'A próstata é sensível e, para muitas pessoas, estimulá-la dá prazer.' },
        { t: 'O clitóris é o único órgão do corpo humano cuja função conhecida é só o prazer.', a: true, e: 'Tem milhares de terminações nervosas e, tanto quanto se sabe, não tem outra função para além do prazer.' }
      ]},
      consentimento: { title: 'Consentimento', items: [
        { t: 'Se a pessoa não disse "não", isso quer dizer "sim".', a: false, e: 'Consentimento é um "sim" claro e entusiasmado, não a ausência de um "não". Na dúvida, pergunta.' },
        { t: 'O consentimento pode ser retirado a qualquer momento, mesmo a meio.', a: true, e: 'Qualquer pessoa pode mudar de ideias a qualquer momento, e isso tem de ser respeitado logo.' },
        { t: 'Dizer "sim" a um beijo quer dizer aceitar ir mais longe.', a: false, e: 'O consentimento é para cada coisa em concreto. Aceitar uma não quer dizer aceitar outra.' },
        { t: 'Numa relação de namoro ou num casamento, o consentimento já está garantido.', a: false, e: 'Estar numa relação não dá direito a nada. O consentimento é sempre necessário, em cada momento.' },
        { t: 'Uma pessoa muito alcoolizada ou inconsciente não consegue dar consentimento.', a: true, e: 'Para consentir é preciso estar consciente e em condições de decidir livremente.' },
        { t: 'Insistir até a pessoa ceder também conta como consentimento.', a: false, e: 'Um "sim" obtido à força de pressão não é um "sim" livre, por isso não é consentimento.' },
        { t: 'Ficar em silêncio ou paralisado pode ser uma reação ao medo, e não é consentimento.', a: true, e: 'Perante o medo, muitas pessoas ficam bloqueadas, sem conseguir reagir. Silêncio não é "sim".' },
        { t: 'Partilhar fotos íntimas de alguém sem autorização é uma violação do consentimento.', a: true, e: 'Ter recebido uma foto não dá autorização para a mostrar ou reencaminhar. Partilhar sem consentimento causa muitos danos e pode ser crime.' },
        { t: 'Tirar o preservativo a meio sem a outra pessoa saber é aceitável, se ela consentiu a relação.', a: false, e: 'A pessoa consentiu uma relação com preservativo. Tirá-lo sem ela saber é uma violação do consentimento.' },
        { t: 'Perguntar "queres?" estraga sempre o clima.', a: false, e: 'Perguntar pode ser íntimo e até excitante, e mostra cuidado. Há muitas formas de o fazer de forma natural.' }
      ]},
      lgbtqia: { title: 'Comunidade LGBTQIA+', items: [
        { t: 'A orientação sexual é uma escolha.', a: false, e: 'Ninguém escolhe por quem sente atração. O que cada pessoa pode escolher é como vive e expressa a sua orientação.' },
        { t: 'Identidade de género e orientação sexual são a mesma coisa.', a: false, e: 'A identidade de género é quem a pessoa é (mulher, homem, não binária…). A orientação sexual é por quem sente atração.' },
        { t: 'As pessoas bissexuais estão só confusas ou a passar por uma fase.', a: false, e: 'A bissexualidade é uma orientação tão válida como qualquer outra.' },
        { t: 'O "A" de LGBTQIA+ inclui as pessoas assexuais.', a: true, e: 'O "A" inclui pessoas assexuais, que sentem pouca ou nenhuma atração sexual, e também pessoas arromânticas e agénero.' },
        { t: 'As pessoas intersexo nascem com características sexuais que não encaixam nas definições típicas de corpo "masculino" ou "feminino".', a: true, e: 'A intersexualidade tem a ver com o corpo (cromossomas, hormonas, órgãos genitais) e é mais comum do que se pensa.' },
        { t: 'As "terapias de conversão" conseguem mudar a orientação sexual de uma pessoa.', a: false, e: 'Não funcionam e causam muito sofrimento. São rejeitadas pelas principais organizações de saúde.' },
        { t: 'Uma pessoa trans só é "verdadeiramente" trans depois de fazer cirurgias.', a: false, e: 'Ser trans tem a ver com a identidade da pessoa. Nem todas as pessoas trans querem ou podem fazer cirurgias ou tratamentos.' },
        { t: 'Uma pessoa não binária não se identifica exclusivamente como homem ou como mulher.', a: true, e: 'Pessoas não binárias podem identificar-se com os dois, com nenhum, ou de forma que muda ao longo do tempo.' },
        { t: 'Em Portugal, casais do mesmo sexo podem casar.', a: true, e: 'O casamento entre pessoas do mesmo sexo é permitido em Portugal desde 2010.' },
        { t: 'Usar os pronomes certos de uma pessoa é um pormenor sem importância.', a: false, e: 'Respeitar os pronomes é uma forma simples de mostrar respeito, e faz muita diferença no bem-estar das pessoas trans e não binárias.' }
      ]}
    }
  },
  en: {
    ui: {
      truth: 'True', myth: 'Myth', next: 'Next', results: 'See my result', right: 'Correct!', wrong: 'Not quite.',
      itIs: 'It is', truthW: 'true', mythW: 'a myth', of: 'of', score: 'You got', outOf: 'out of',
      wrongTitle: 'Worth another look', allRight: 'You got everything right. Well done!',
      again: 'Play again', other: 'Choose another game', share: 'Challenge your friends on WhatsApp',
      shareText: 'I played the Soulful Cycles "True or myth?" game. How much do you know? ',
      levels: [
        [10, 'You know a lot about this topic!'],
        [7, 'You know quite a lot! Only a few myths caught you.'],
        [4, 'You know some things, and there are still myths to bust.'],
        [0, 'Lots of myths to bust. Glad you played!']
      ]
    },
    quizzes: {
      ciclo: { title: 'Menstrual cycle', items: [
        { t: 'You cannot get pregnant during your period.', a: false, e: 'It is unlikely, but possible, especially with short cycles: sperm can survive up to about 5 days in the body and ovulation can happen soon after a period.' },
        { t: 'A "normal" menstrual cycle always lasts 28 days.', a: false, e: '28 days is just an average. In adults, cycles of roughly 21 to 35 days are within the expected range, and it is normal for them to vary a little from month to month.' },
        { t: 'If you take the pill, you get your period during the pill break.', a: false, e: 'The bleeding during the pill break is a withdrawal bleed, caused by the drop in the pill\'s hormones. There is no ovulation, so it is not a real period.' },
        { t: 'Period pain so bad it stops you from going about your day is normal, you just have to put up with it.', a: false, e: 'Some discomfort is common, but pain that stops you studying, working or sleeping deserves medical attention: it can be a sign of conditions such as endometriosis.' },
        { t: 'Using a tampon or menstrual cup makes you lose your virginity.', a: false, e: 'Virginity is not a medical concept and is not "lost" with a tampon or a cup. The hymen is an elastic membrane that differs from person to person.' },
        { t: 'Cervical mucus changes throughout the cycle and can help you tell when you are fertile.', a: true, e: 'Around ovulation, mucus tends to become clearer, stretchier and more slippery. Observing these changes is one of the bases of fertility awareness methods.' },
        { t: 'Showering or washing your hair during your period is bad for you.', a: false, e: 'It is completely fine. Hygiene during your period is the same as the rest of the month, and a hot shower can even ease cramps.' },
        { t: 'Stress can delay or change your period.', a: true, e: 'Stress affects the hormones that regulate the cycle and can delay ovulation and therefore your period.' },
        { t: 'You lose more than a litre of blood in each period.', a: false, e: 'On average people lose about 30 to 40 ml, roughly two to three tablespoons. Very heavy bleeding should be checked by a health professional.' },
        { t: 'Only women menstruate.', a: false, e: 'Trans men and some non-binary people can also menstruate. And not all women menstruate.' }
      ]},
      anatomia: { title: 'Anatomy', items: [
        { t: 'The clitoris is the small "button" you can see at the top of the vulva, where the inner labia meet.', a: false, e: 'The visible part is just the tip. The clitoris also has a body, roots and bulbs inside the body, and can measure around 10 cm in total.' },
        { t: 'Vulva and vagina are the same thing.', a: false, e: 'The vulva is the external part (labia, clitoris, urethral and vaginal openings). The vagina is the internal canal that connects the vulva to the cervix.' },
        { t: 'The hymen breaks the first time there is penetration.', a: false, e: 'The hymen is elastic and varies a lot from person to person. It often does not "break" or bleed the first time, and it is not proof of virginity.' },
        { t: 'The vagina needs douching to stay clean.', a: false, e: 'The vagina cleans itself. Douching can upset its natural flora and increase the risk of infections. For the vulva, water or a mild soap is enough.' },
        { t: 'It is normal for the vulva to have its own smell.', a: true, e: 'The vulva has its own smell, which changes throughout the cycle. It is only worth seeking help if the smell changes a lot, for example together with itching or different discharge.' },
        { t: 'Having inner labia that are longer than the outer labia is abnormal.', a: false, e: 'It is a very common variation. Vulvas are all different in shape, size and colour.' },
        { t: 'The penis and the clitoris develop from the same tissue in the embryo.', a: true, e: 'In the first weeks of pregnancy the tissue is the same, and it then develops into a penis or a clitoris. That is why they have similar structures, such as the glans.' },
        { t: 'The size of a flaccid penis tells you its size when erect.', a: false, e: 'It is not a good indicator: some penises grow a little when erect and others grow a lot.' },
        { t: 'The prostate can also give pleasure.', a: true, e: 'The prostate is sensitive and, for many people, stimulating it is pleasurable.' },
        { t: 'The clitoris is the only organ in the human body whose known function is just pleasure.', a: true, e: 'It has thousands of nerve endings and, as far as we know, has no other function besides pleasure.' }
      ]},
      consentimento: { title: 'Consent', items: [
        { t: 'If the person did not say "no", that means "yes".', a: false, e: 'Consent is a clear and enthusiastic "yes", not the absence of a "no". If in doubt, ask.' },
        { t: 'Consent can be withdrawn at any time, even halfway through.', a: true, e: 'Anyone can change their mind at any time, and that has to be respected straight away.' },
        { t: 'Saying "yes" to a kiss means agreeing to go further.', a: false, e: 'Consent is for each specific thing. Agreeing to one thing does not mean agreeing to another.' },
        { t: 'In a relationship or a marriage, consent is a given.', a: false, e: 'Being in a relationship does not entitle anyone to anything. Consent is always needed, every time.' },
        { t: 'Someone who is very drunk or unconscious cannot give consent.', a: true, e: 'To consent, a person needs to be conscious and able to decide freely.' },
        { t: 'Insisting until the other person gives in also counts as consent.', a: false, e: 'A "yes" obtained through pressure is not a free "yes", so it is not consent.' },
        { t: 'Staying silent or freezing can be a reaction to fear, and it is not consent.', a: true, e: 'When afraid, many people freeze and cannot react. Silence is not "yes".' },
        { t: 'Sharing someone\'s intimate photos without permission is a violation of consent.', a: true, e: 'Receiving a photo does not give permission to show or forward it. Sharing without consent causes a lot of harm and can be a crime.' },
        { t: 'Removing a condom halfway without the other person knowing is acceptable if they consented to sex.', a: false, e: 'They consented to sex with a condom. Removing it without them knowing is a violation of consent.' },
        { t: 'Asking "do you want to?" always kills the mood.', a: false, e: 'Asking can be intimate and even exciting, and it shows care. There are many ways to do it naturally.' }
      ]},
      lgbtqia: { title: 'LGBTQIA+ community', items: [
        { t: 'Sexual orientation is a choice.', a: false, e: 'Nobody chooses who they are attracted to. What each person can choose is how they live and express their orientation.' },
        { t: 'Gender identity and sexual orientation are the same thing.', a: false, e: 'Gender identity is who someone is (woman, man, non-binary…). Sexual orientation is who they are attracted to.' },
        { t: 'Bisexual people are just confused or going through a phase.', a: false, e: 'Bisexuality is as valid an orientation as any other.' },
        { t: 'The "A" in LGBTQIA+ includes asexual people.', a: true, e: 'The "A" includes asexual people, who feel little or no sexual attraction, as well as aromantic and agender people.' },
        { t: 'Intersex people are born with sex characteristics that do not fit typical definitions of "male" or "female" bodies.', a: true, e: 'Being intersex is about the body (chromosomes, hormones, genitals) and is more common than people think.' },
        { t: '"Conversion therapies" can change a person\'s sexual orientation.', a: false, e: 'They do not work and cause a great deal of suffering. They are rejected by the main health organisations.' },
        { t: 'A trans person is only "really" trans after having surgery.', a: false, e: 'Being trans is about the person\'s identity. Not all trans people want or are able to have surgery or treatments.' },
        { t: 'A non-binary person does not identify exclusively as a man or as a woman.', a: true, e: 'Non-binary people may identify with both, with neither, or in a way that changes over time.' },
        { t: 'In Portugal, same-sex couples can get married.', a: true, e: 'Same-sex marriage has been legal in Portugal since 2010.' },
        { t: 'Using someone\'s correct pronouns is an unimportant detail.', a: false, e: 'Respecting pronouns is a simple way to show respect, and it makes a big difference to the wellbeing of trans and non-binary people.' }
      ]}
    }
  }
};

(function () {
  var root = document.getElementById('jogo');
  if (!root) return;
  var lang = document.documentElement.lang.indexOf('en') === 0 ? 'en' : 'pt';
  var D = JOGOS[lang], U = D.ui;
  var picker = document.getElementById('jogos-escolha');
  var cur, idx, answers;

  function count(path, title) {
    var send = function () { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: path, title: title, event: true }); };
    if (window.goatcounter && window.goatcounter.count) send(); else setTimeout(send, 1500);
  }
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function word(a) { return a ? U.truthW : U.mythW; }

  function start(key) {
    if (!D.quizzes[key]) return;
    cur = key; idx = 0; answers = [];
    picker.hidden = true; root.hidden = false;
    history.replaceState(null, '', '#' + key);
    show();
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function show() {
    var q = D.quizzes[cur], it = q.items[idx];
    root.innerHTML =
      '<p class="label">' + esc(q.title) + ' · ' + (idx + 1) + ' ' + U.of + ' ' + q.items.length + '</p>' +
      '<div class="jg-bar"><span style="width:' + (idx / q.items.length * 100) + '%"></span></div>' +
      '<p class="jg-q">' + esc(it.t) + '</p>' +
      '<div class="jg-btns"><button type="button" class="btn primary" data-v="1">' + U.truth + '</button>' +
      '<button type="button" class="btn ghost" data-v="0">' + U.myth + '</button></div>' +
      '<div class="jg-fb" aria-live="polite"></div>';
    root.querySelectorAll('.jg-btns button').forEach(function (b) {
      b.addEventListener('click', function () { answer(b.getAttribute('data-v') === '1'); });
    });
  }

  function answer(v) {
    var q = D.quizzes[cur], it = q.items[idx], ok = v === it.a;
    answers.push(ok);
    count('jogo/' + cur + '/q' + (idx + 1) + '/' + (ok ? 'certo' : 'errado'), q.title + ' · ' + (idx + 1) + ': ' + it.t + (ok ? ' (certo)' : ' (errado)'));
    root.querySelectorAll('.jg-btns button').forEach(function (b) {
      b.disabled = true;
      if ((b.getAttribute('data-v') === '1') === it.a) b.classList.add('jg-correct');
    });
    var last = idx === q.items.length - 1;
    var fb = root.querySelector('.jg-fb');
    fb.className = 'jg-fb ' + (ok ? 'ok' : 'no');
    fb.innerHTML = '<p class="jg-verdict">' + (ok ? U.right : U.wrong) + ' ' + U.itIs + ' <b>' + word(it.a) + '</b>.</p>' +
      '<p>' + esc(it.e) + '</p>' +
      '<button type="button" class="btn primary jg-next">' + (last ? U.results : U.next) + '</button>';
    var nb = fb.querySelector('.jg-next');
    nb.focus({ preventScroll: true });
    nb.addEventListener('click', function () { if (last) finish(); else { idx++; show(); } });
  }

  function finish() {
    var q = D.quizzes[cur], n = answers.filter(Boolean).length, total = q.items.length;
    count('jogo/' + cur + '/fim/' + n, q.title + ' · ' + n + '/' + total);
    var msg = U.levels.filter(function (l) { return n >= l[0]; })[0][1];
    var wrong = q.items.filter(function (it, i) { return !answers[i]; });
    var list = wrong.length
      ? '<h3>' + U.wrongTitle + '</h3><ul class="jg-wrong">' + wrong.map(function (it) {
          return '<li><p class="jg-q-small">' + esc(it.t) + '</p><p><b>' + U.itIs + ' ' + word(it.a) + '.</b> ' + esc(it.e) + '</p></li>';
        }).join('') + '</ul>'
      : '<p class="jg-verdict">' + U.allRight + '</p>';
    var url = location.href.split('#')[0] + '#' + cur;
    root.innerHTML =
      '<p class="label">' + esc(q.title) + '</p>' +
      '<p class="jg-score">' + U.score + ' <b>' + n + '</b> ' + U.outOf + ' ' + total + '</p>' +
      '<p class="jg-level">' + msg + '</p>' + list +
      '<div class="actions"><button type="button" class="btn primary jg-again">' + U.again + '</button>' +
      '<button type="button" class="btn ghost jg-other">' + U.other + '</button></div>' +
      '<p><a class="jg-share" target="_blank" rel="noopener" href="https://wa.me/?text=' + encodeURIComponent(U.shareText + url) + '">' + U.share + ' →</a></p>';
    root.querySelector('.jg-again').addEventListener('click', function () { start(cur); });
    root.querySelector('.jg-other').addEventListener('click', function () {
      root.hidden = true; picker.hidden = false;
      history.replaceState(null, '', location.pathname);
      picker.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.querySelectorAll('[data-jogo]').forEach(function (b) {
    b.addEventListener('click', function () { start(b.getAttribute('data-jogo')); });
  });
  var h = location.hash.slice(1);
  if (D.quizzes[h]) start(h);
})();
