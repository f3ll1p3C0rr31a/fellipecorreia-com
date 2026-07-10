# Formulário de contato — workflow n8n

**Status: ativo em produção** (n8n `Contato — fellipecorreia.com`, id `PfoQMvFONZPYKohH`).

O formulário do site (`ContactForm`) faz `POST` de JSON `{ name, email, message, source }`
para o webhook n8n definido em [`src/data/site.ts`](../src/data/site.ts) →
`contactWebhook` (`https://n8n.fellipecorreia.com/webhook/contato-site`).

## Fluxo

`Webhook (POST /contato-site)` → `IF honeypot vazio` → `Enviar Gmail` → `Responder OK`

- **CORS**: o nó Webhook tem `allowedOrigins` com os domínios do site — o browser chama
  cross-origin sem erro (preflight `204`, `Access-Control-Allow-Origin` correto).
- **Antispam**: honeypot (`website`) filtrado no frontend e revalidado no nó IF.
- **E-mail**: nó Gmail (credencial `Gmail - Fellipe`) envia pra `fellipebayeh@gmail.com`,
  com `Reply-To` apontando pro e-mail de quem preencheu.
- **Resposta**: `{ "ok": true }` (o frontend só checa `res.ok`).

Este JSON é a fonte versionada do workflow. Se precisar recriar: n8n → *Import from File*.

## Manutenção

- Trocar o destinatário/assunto: nó **Enviar Gmail**.
- Receber também por WhatsApp/Mattermost: adicionar um nó extra após o IF.
