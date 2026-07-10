# Formulário de contato — workflow n8n

O formulário do site (`ContactForm`) faz `POST` de JSON `{ name, email, message, source }`
para o webhook n8n definido em [`src/data/site.ts`](../src/data/site.ts) →
`contactWebhook` (`https://n8n.fellipecorreia.com/webhook/contato-site`).

## Como o workflow funciona

`Webhook (POST /contato-site)` → `IF honeypot vazio` → `Enviar e-mail` → `Responder OK`

- **CORS**: o nó Webhook já tem `allowedOrigins` com os domínios do site — o browser
  consegue chamar cross-origin sem erro.
- **Antispam**: o honeypot (`website`) é filtrado no frontend e revalidado no nó IF.
- **Resposta**: retorna `{ "ok": true }` (o frontend só checa `res.ok`).

## Setup (uma vez)

1. **Importar**: n8n → *Workflows* → *Import from File* → `contato-workflow.json`.
2. **Credencial de e-mail**: abra o nó **Enviar e-mail** e conecte uma credencial SMTP
   (ex: sua conta Mailcow `contato@fellipecorreia.com`). Ajuste o `fromEmail` se quiser.
3. **Ativar** o workflow (toggle *Active*).
4. Testar: enviar o formulário no site e conferir se o e-mail chega.

> Alternativa ao e-mail: trocar o nó **Enviar e-mail** por um nó de Mattermost / Telegram /
> WhatsApp (Evolution API) que você já roda, se preferir receber como notificação.
