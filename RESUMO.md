# Site da Healthy: o que falta

Resumo de 27/11/2026, baseado no `PENDENCIAS.md` do repositório `healthy-previa`.

## Estado do repositório

- O local está igual ao `origin/main`. Os 3 commits novos do GitHub já foram puxados: pendências (MD e PDF), a reescrita da página de benefícios e a remoção da página de privacidade.
- Não tem nada local esperando push.

## Precisa resolver antes de entregar

- [ ] **Número do WhatsApp:** hoje é `5527988882229`, em 12 lugares espalhados por 6 páginas:
  - `contato.html` (3)
  - `index.html` (2)
  - `beneficios.html` (2)
  - `convenios.html` (2)
  - `quem-somos.html` (2)
  - `404.html` (1)
- [ ] **Telefone e e-mail do rodapé:** confirmar (27) 99974-0821 e atendimento@healthyassociacao.com.br.
- [ ] **Endereço** (`contato.html`): confirmar Av. Nossa Senhora da Penha, 2796, Vitória/ES (link e mapa).
- [ ] **Selo "Planos a partir de R$ 29,90"** (página inicial): confirmar o valor ou tirar o selo.

## Publicação

- [ ] Commit e push depois das trocas.
- [ ] Testar o site publicado no celular e no computador (WhatsApp, e-mail, telefone, mapa).
- [ ] Domínio próprio (healthyassociacao.com.br) no GitHub Pages, se for usar.

## Opcional (o site funciona sem)

- Horário de atendimento
- História, fundação e diretoria em "Quem somos"
- Lista atualizada e logos dos convênios
- Política de privacidade: volta só se entrar formulário, Analytics ou pixel (está no histórico do Git)

## Rodar local

Na pasta `healthy-previa`:

```
python -m http.server 8080
```

Depois abrir http://localhost:8080. Também dá pra abrir o `index.html` direto no navegador.
