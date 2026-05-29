# PitStop Landing

Landing page do **PitStop** — sistema de gestao para oficinas mecanicas, um produto IAQueAtende.

Projeto **completamente independente** do repositorio `pitstop-api` (Laravel). Nao compartilha dependencias, banco de dados nem pipeline de deploy.

- **Stack:** [Astro](https://astro.build) 4+ (static output) + TypeScript strict + CSS puro
- **Producao:** https://pitstop.iaqueatende.com.br (deploy na Vercel)
- **Node:** 20+ (recomendado: 22.12+)

---

## Instalacao local

```sh
git clone https://github.com/lunasuporteti-maker/pitstop-landing.git
cd pitstop-landing
npm install
cp .env.example .env   # preencha os valores conforme necessario
npm run dev            # http://localhost:4321
```

## Comandos

| Comando           | Acao                                          |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor local em `http://localhost:4321`     |
| `npm run build`   | Gera o site de producao em `./dist/`          |
| `npm run preview` | Pre-visualiza o build local antes do deploy   |

---

## Estrutura do projeto

```text
/
├── public/                 # assets estaticos (favicon, imagens, og-image)
├── src/
│   ├── components/         # Header.astro, Footer.astro
│   ├── layouts/           # Layout.astro (html, head, meta tags, OG)
│   ├── pages/             # index.astro (rotas baseadas no nome do arquivo)
│   └── styles/            # global.css (design tokens: cores, fontes)
├── astro.config.mjs        # config Astro (site, output: static)
├── .env.example            # variaveis de ambiente (modelo)
└── package.json
```

## Onde editar a copy

- **Conteudo das secoes da home:** `src/pages/index.astro`
  As 9 secoes da landing (Hero, Problema, Solucao, Funcionalidades, Demo,
  Prova social, Precos, FAQ, CTA/Contato) estao mapeadas como comentarios
  `{/* Section X: ... */}`. O conteudo real e implementado na Story 5.2.
- **Cabecalho e navegacao:** `src/components/Header.astro`
- **Rodape (tagline, email, copyright):** `src/components/Footer.astro`
- **Cores e fontes (design tokens):** `src/styles/global.css` (variaveis CSS em `:root`)
- **Title / description / OG padrao:** `src/layouts/Layout.astro`

---

## Variaveis de ambiente

Configure no `.env` local e em **Vercel > Settings > Environment Variables**.
Variaveis com prefixo `PUBLIC_` sao expostas no bundle client-side (padrao Astro);
sem o prefixo, ficam apenas server-side.

| Variavel                        | Descricao                                                   |
| :------------------------------ | :---------------------------------------------------------- |
| `PUBLIC_CADASTRO_URL`           | URL de cadastro do app (CTA principal)                      |
| `PUBLIC_CONTACT_EMAIL`          | Email de contato exibido no rodape e contato               |
| `PUBLIC_PLAUSIBLE_DOMAIN`       | Dominio no Plausible Analytics (analytics sem cookies)     |
| `PUBLIC_VIDEO_DEMO_URL`         | URL do video de demonstracao (vazio esconde a secao)       |
| `PUBLIC_WEBHOOK_EMPRESARIAL_URL`| Webhook que recebe leads do formulario empresarial         |
| `PUBLIC_WEBHOOK_CONTATO_URL`    | Webhook que recebe mensagens do formulario de contato      |
| `PUBLIC_META_PIXEL_ID`          | Meta Pixel — **remarketing, ver aviso LGPD abaixo**        |
| `PUBLIC_GA_MEASUREMENT_ID`      | Google Analytics — **remarketing, ver aviso LGPD abaixo**  |

> A lista completa e comentada esta em [`.env.example`](./.env.example).

---

## Aviso LGPD

Os scripts de **remarketing/rastreamento** (`PUBLIC_META_PIXEL_ID` e
`PUBLIC_GA_MEASUREMENT_ID`) seguem o principio de **consentimento previo**
exigido pela LGPD:

- **Deixar essas variaveis em branco DESABILITA completamente o remarketing.**
  Nenhum script de rastreamento e injetado no site. Esse e o estado padrao e o
  recomendado ate o banner de consentimento estar no ar.
- Quando preenchidas, os scripts **so disparam APOS o usuario aceitar cookies
  de marketing** no banner de consentimento (implementado na Story 5.4).
- O **Plausible** (`PUBLIC_PLAUSIBLE_DOMAIN`) e um analytics *sem cookies* e
  *sem dados pessoais*, por isso nao depende de consentimento e pode rodar por
  padrao.

Resumo: por padrao, a landing nao rastreia o usuario para fins de marketing.

---

## Deploy na Vercel (manual)

O deploy e feito via integracao Vercel + GitHub (auto-deploy em push para `main`).

1. Acesse https://vercel.com e faca login.
2. **Add New > Project** e importe o repositorio
   `lunasuporteti-maker/pitstop-landing` (autorize o GitHub se necessario).
3. Configure o projeto:
   - **Framework Preset:** `Astro` (detectado automaticamente)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Em **Environment Variables**, adicione as variaveis do `.env.example`
   (no minimo `PUBLIC_CADASTRO_URL`, `PUBLIC_CONTACT_EMAIL`,
   `PUBLIC_PLAUSIBLE_DOMAIN`). Mantenha `PUBLIC_META_PIXEL_ID` e
   `PUBLIC_GA_MEASUREMENT_ID` **vazias** ate o banner de consentimento (LGPD).
5. Clique em **Deploy**. A cada `git push` para `main`, a Vercel refaz o build
   e publica automaticamente.

---

## DNS — apontar o dominio para a Vercel (manual)

O dominio `pitstop.iaqueatende.com.br` deve apontar para a Vercel, **nao** para
o VPS. O wildcard `*.iaqueatende.com.br` na Hostinger aponta para o VPS
(`69.62.97.225`), entao e preciso criar um registro CNAME especifico para
`pitstop` que sobrepoe o wildcard.

1. Na Vercel: **Project > Settings > Domains** e adicione
   `pitstop.iaqueatende.com.br`. A Vercel mostra o CNAME alvo.
2. No painel da **Hostinger** (DNS Zone Editor do dominio `iaqueatende.com.br`),
   crie o registro:

   | Tipo  | Host (Nome) | Valor                  | TTL  |
   | :---- | :---------- | :--------------------- | :--- |
   | CNAME | `pitstop`   | `cname.vercel-dns.com` | 3600 |

3. Aguarde a propagacao do DNS (alguns minutos a algumas horas).
4. A Vercel emite o **certificado SSL automaticamente**; o acesso via HTTPS
   (`https://pitstop.iaqueatende.com.br`) passa a funcionar apos a validacao.

> Verifique a propagacao com `nslookup pitstop.iaqueatende.com.br` ou em
> https://dnschecker.org.

---

## Criar o repositorio no GitHub (se ainda nao existir)

Caso o repositorio remoto nao tenha sido criado pelo `gh`:

```sh
git init
git add .
git commit -m "chore: setup inicial Astro + landing scaffolding [Story 5.1]"
gh repo create lunasuporteti-maker/pitstop-landing --public --source=. --remote=origin --push
```

Sem o `gh` CLI, crie o repositorio manualmente em github.com e rode:

```sh
git remote add origin https://github.com/lunasuporteti-maker/pitstop-landing.git
git branch -M main
git push -u origin main
```
