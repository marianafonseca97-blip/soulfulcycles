# Guia do site soulfulcycles.pt

Este guia explica como está organizado o teu site e como o podes alterar sozinha, com o agente da Netlify ou com o Claude.

---

## 1. Onde está o teu site

| O quê | Onde | Para que serve |
|---|---|---|
| **Código do site** | GitHub: github.com/marianafonseca97-blip/soulfulcycles | Guarda todos os ficheiros e o histórico de alterações |
| **Site publicado** | Netlify | Publica o site sozinha sempre que o GitHub muda (demora cerca de 1 minuto) |
| **Cópia no teu Mac** | Pasta **Documentos/soulfulcycles** | Usada pelo Claude Code quando trabalha no teu computador |
| **Domínio** | Dominios.pt | O endereço soulfulcycles.pt |

O site não depende de nenhuma conta do Claude. Se nunca mais mexeres em nada, continua a funcionar.

---

## 2. As páginas (cada uma existe em português e em inglês)

| Página | Português | Inglês |
|---|---|---|
| Página inicial | soulfulcycles.pt | soulfulcycles.pt/en/ |
| Viagens | /viagens | /en/trips |
| Despedidas, aniversários e celebrações | /celebracoes | /en/celebrations |
| Escolas e faculdades | /escolas | /en/schools |
| Aconselhamento | /aconselhamento | /en/counselling |
| Formações | /formacoes | /en/trainings |
| Sessões gravadas | /sessoes-gravadas | /en/recorded-sessions |
| Coleção | /colecao | /en/collection |
| Sobre mim | /sobre-mim | /en/about |
| Media (podcast e imprensa) | /media | /en/media |
| Recomendações | /recomendacoes | /en/recommendations |
| Política de privacidade | /privacidade | /en/privacy |

> ⚠️ **O mais importante:** cada texto existe **duas vezes**, uma em português e outra em inglês.
> Quando mudares alguma coisa (um preço, uma data, uma fotografia), lembra-te da versão inglesa.

> ⚠️ **A página de erro** (a que aparece quando alguém abre um link errado) tem uma cópia dos cartões dos serviços da página inicial, com preços e a próxima viagem. Se mudares esses cartões, muda-a também.

### Onde aparece cada informação

| Informação | Aparece em |
|---|---|
| Preço das escolas (40 €/hora, mínimo 1h30) | Escolas (PT e EN), cartão na página inicial (PT e EN), página de erro |
| Preço do aconselhamento (a partir de 40 €) | Aconselhamento (PT e EN), cartão na página inicial (PT e EN), página de erro |
| Próxima viagem (Dublin, março 2027, 375 €) | Viagens (PT e EN), cartão na página inicial (PT e EN), página de erro |
| Preço da biblioteca (9,99 €/mês) | Sessões gravadas (PT e EN), cartão e perguntas frequentes da página inicial (PT e EN), página de erro |
| Email e Instagram | Secção de contacto de quase todas as páginas |

---

## 3. Fazer alterações com o agente da Netlify (o mais fácil)

1. Entra na Netlify, abre o teu site e escolhe a opção de agentes (Agent Runners), com o Claude.
2. Escreve o pedido. **Começa sempre por:**
   > *"Lê primeiro o ficheiro AGENTS.md. Faz a alteração em português e em inglês."*
3. Revê a **pré-visualização** que o agente te mostra.
4. Se estiver bem, aprova e publica.

### Exemplos de pedidos

- *"Lê o AGENTS.md. Muda a data da próxima viagem para Dublin, 15 a 20 de março de 2027, em todas as páginas onde aparece, em português e em inglês."*
- *"Lê o AGENTS.md. Acrescenta este testemunho à página das escolas, em português e em inglês, como 'Estudante · Sessão numa escola': [texto]."*
- *"Lê o AGENTS.md. Na página das despedidas, troca a imagem principal pela fotografia [nome-do-ficheiro.jpg]."*
- *"Lê o AGENTS.md. O preço das sessões de aconselhamento passa a ser a partir de 45 €. Muda em todas as páginas onde aparece."*

---

## 4. Pequenas alterações diretamente no GitHub (sem agente)

Serve para mudar uma palavra, uma data ou um preço.

1. Vai a **github.com/marianafonseca97-blip/soulfulcycles**.
2. Clica no ficheiro da página (por exemplo `viagens.html`; as versões inglesas estão dentro da pasta `en`).
3. Clica no **lápis ✏️** ("Edit this file"), no canto superior direito.
4. Carrega em **Cmd+F** para procurar o texto que queres mudar e altera-o com cuidado, sem apagar os símbolos `<` `>` à volta.
5. Clica em **Commit changes…** e depois outra vez em **Commit changes**.
6. Espera cerca de 1 minuto e atualiza o site.

Se alguma coisa ficar mal, no GitHub dá para voltar atrás: todas as versões anteriores ficam guardadas.

---

## 5. Fotografias

- **Formato:** as fotografias do iPhone são HEIC. Têm de ser convertidas para **JPG**. No Mac: abre a fotografia na app Pré-visualização → Ficheiro → Exportar → formato JPEG.
- **Tamanho:** o ideal é no máximo 1600 píxeis no lado maior e menos de 400 KB. Na Pré-visualização: Ferramentas → Ajustar tamanho.
- **Nome do ficheiro:** só **minúsculas, sem espaços nem acentos**, por exemplo `dublin-grupo.jpg`. Com maiúsculas, a imagem pode não aparecer no site.
- **Pessoas:** confirma sempre que quem aparece na fotografia está à vontade com isso.

Para acrescentar uma fotografia sem agente: no GitHub, clica em **Add file → Upload files**, arrasta a fotografia e faz **Commit changes**. Depois pede ao agente para a pôr na página certa.

---

## 6. Testemunhos

- São sempre **anónimos**: só o tipo de pessoa e o serviço (por exemplo "Cliente · Sessão de aconselhamento").
- Cada página de serviço tem todos os testemunhos desse serviço.
- A página inicial tem uma seleção de **8**, um por serviço. Se acrescentares um muito bom, podes trocar um desses.

---

## 7. Serviços ligados ao site

| Serviço | Para quê | Onde entrar |
|---|---|---|
| **Netlify** | Publica o site | app.netlify.com |
| **GitHub** | Guarda o código | github.com |
| **Web3Forms** | Envia para o teu email as mensagens do formulário e da lista de espera | web3forms.com |
| **GoatCounter** | Estatísticas de visitas, sem cookies | marianafonseca.goatcounter.com |
| **Google Search Console** | Como o site aparece no Google | search.google.com/search-console |

Se um dia acrescentares uma ferramenta nova que recolha dados (por exemplo uma newsletter ou um sistema de marcações), atualiza a **política de privacidade** em português e em inglês.

---

## 8. Se voltares a usar o Claude Code no teu Mac

1. Abre o Claude Code e escolhe a pasta **Documentos/soulfulcycles**.
2. **Antes de qualquer alteração**, pede: *"Atualiza a pasta com a versão mais recente do GitHub (git pull)."* Isto é importante se tiveres feito alterações pela Netlify ou pelo GitHub entretanto.
3. O Claude lê sozinho o ficheiro `CLAUDE.md`, que explica como o site está organizado.
4. No fim, pede-lhe para publicar (git push).

---

## 9. Se usares o Claude gratuito (claude.ai)

O plano gratuito não mexe nos ficheiros diretamente, mas pode ajudar-te a escrever as alterações:
1. No GitHub, abre o ficheiro da página e copia o conteúdo (botão "Copy raw file").
2. No Claude, cola o ficheiro **AGENTS.md** e depois o ficheiro da página, e explica o que queres mudar.
3. Copia a versão que o Claude te devolver, cola-a no GitHub (lápis ✏️) e faz **Commit changes**.
4. Repete para a versão inglesa.
