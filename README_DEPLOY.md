# Guia de Deploy - Festa do Leite Batatais

## 📋 Pré-requisitos

1. Conta no GitHub (ou GitLab/Bitbucket)
2. Conta na Netlify
3. Node.js instalado (versão 18 ou superior)

## 🚀 Passo a Passo para Deploy

### 1. Preparar o Repositório Git

```bash
# Inicializar repositório (se ainda não tiver)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit - Portal Festa do Leite Batatais"

# Criar repositório no GitHub e adicionar remote
git remote add origin https://github.com/SEU_USUARIO/portal-festa-do-leite-batatais.git
git branch -M main
git push -u origin main
```

### 2. Deploy na Netlify

1. Acesse [netlify.com](https://www.netlify.com) e faça login
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha **"Deploy with GitHub"** (ou GitLab/Bitbucket)
4. Autorize a Netlify a acessar seu repositório
5. Selecione o repositório do projeto
6. Configure o build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Clique em **"Deploy site"**

### 3. Configurar Decap CMS (Netlify CMS)

1. Na Netlify, vá em **Site settings** → **Identity**
2. Clique em **"Enable Identity"**
3. Role até **"Registration preferences"** e selecione **"Invite only"**
4. Em **"External providers"**, configure se quiser login com GitHub/Google
5. Vá em **Site settings** → **Services** → **Git Gateway**
6. Clique em **"Enable Git Gateway"**

### 4. Adicionar Usuários ao CMS

1. Na Netlify, vá em **Identity** → **Invite users**
2. Digite o e-mail da pessoa que vai editar o conteúdo
3. A pessoa receberá um convite por e-mail
4. Ela deve criar uma conta e fazer login
5. Para acessar o CMS: `https://seu-site.netlify.app/admin`

### 5. Estrutura de Pastas para CMS

O CMS criará automaticamente as seguintes pastas no seu repositório:

```
content/
  ├── noticias/
  ├── pontos-turisticos/
  ├── hospedagem/
  ├── artistas/
  └── config/
      └── site.json
```

### 6. Variáveis de Ambiente (se necessário)

Se precisar de variáveis de ambiente:
1. Na Netlify: **Site settings** → **Environment variables**
2. Adicione as variáveis necessárias

## 📝 Próximos Passos Após Deploy

1. **Acessar o CMS:**
   - Vá para `https://seu-site.netlify.app/admin`
   - Faça login com sua conta Netlify
   - Comece a adicionar conteúdo

2. **Migrar Conteúdo Atual:**
   - Os dados em `constants.ts` podem ser migrados manualmente para o CMS
   - Ou criar scripts de migração (opcional)

3. **Configurar Domínio Personalizado:**
   - Na Netlify: **Site settings** → **Domain management**
   - Adicione seu domínio personalizado

4. **Habilitar HTTPS:**
   - A Netlify fornece HTTPS automaticamente
   - Certificados SSL são gerenciados automaticamente

## 🔧 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 📚 Documentação

- [Netlify Docs](https://docs.netlify.com/)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Vite Docs](https://vitejs.dev/)

## ⚠️ Importante

- O arquivo `netlify.toml` já está configurado
- O arquivo `public/_redirects` garante que o SPA funcione corretamente
- O CMS está configurado em `public/admin/config.yml`
- Certifique-se de que a branch padrão do seu repositório seja `main` (ou atualize o `config.yml`)

## 🆘 Troubleshooting

**Problema:** Build falha na Netlify
- Verifique se o Node.js está na versão 18+ no `netlify.toml`
- Verifique os logs de build na Netlify

**Problema:** CMS não carrega
- Verifique se o Git Gateway está habilitado
- Verifique se o Identity está habilitado
- Verifique se o arquivo `config.yml` está em `public/admin/`

**Problema:** Redirecionamentos não funcionam
- Verifique se o arquivo `_redirects` está em `public/`
- Verifique se o `netlify.toml` tem as configurações corretas
