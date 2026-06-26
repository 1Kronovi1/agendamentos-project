# Sistema de Agendamento

Aplicação full stack para marcação e gerenciamento de horários, construída do zero como projeto de estudo de Next.js 14 (App Router), Server Actions e shadcn/ui.

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)

## Sobre o projeto

O sistema simula o fluxo de uma barbearia/salão: o cliente marca um horário em uma página pública, e a gerência acompanha, confirma, conclui ou cancela cada agendamento em um painel próprio. Os dados são persistidos em um arquivo JSON local, manipulado via Server Actions do Next.js — sem necessidade de banco de dados externo para rodar o projeto.

### Funcionalidades

- **Página do cliente (`/agendar`)** — formulário para marcar um horário com nome, telefone, serviço, data e horário
- **Painel da gerência (`/agenda`)** — lista de todos os agendamentos com cards de resumo por status
- **Gestão de status** — confirmar, concluir ou cancelar um agendamento com um clique
- **Exclusão de agendamentos** — remoção definitiva de um card, com modal de confirmação
- **Atualização automática da tela** — sem recarregar a página manualmente, via `revalidatePath`

## Demonstração

| | |
|---|---|
| <img width="500" alt="home" src="https://github.com/user-attachments/assets/674af9e9-5023-4f83-b531-7d88b71d3787" /> | <img width="300" alt="form" src="https://github.com/user-attachments/assets/6136fcd2-2e4c-4fa1-92eb-a786c19bbec9" /> |
| <img width="500" alt="agenda" src="https://github.com/user-attachments/assets/ff93d12c-ae7a-4f26-bda6-1f36afe7b808" /> | |

## Stack utilizada

| Tecnologia | Função no projeto |
|---|---|
| [Next.js 14](https://nextjs.org/) (App Router) | Framework full stack, rotas e Server Actions |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática em todo o projeto |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes de interface (Button, Card, Select, AlertDialog, etc.) |
| [Lucide React](https://lucide.dev/) | Ícones |
| `fs` (Node.js) | Persistência dos dados em arquivo JSON local |

## Arquitetura

```
src/
  app/
    agendar/
      page.tsx                  → página do cliente (formulário)
    agenda/
      page.tsx                  → painel da gerência
    components/
      agendamento-form.tsx      → formulário (Client Component)
      status-badge.tsx          → badge de status
      card-agendamento.tsx      → card de cada agendamento + ações
    actions/
      agendamento.actions.ts    → Server Actions (criar, atualizar, excluir)
    data/
      agendamentos.ts           → leitura/escrita no JSON
      agendamentos.json         → banco de dados local
    page.tsx                    → home
  components/
    ui/                         → componentes do shadcn/ui
```

O fluxo de dados segue uma separação clara de responsabilidades:

```
Client Component (formulário/botões)
        ↓
Server Action (validação, regra de negócio)
        ↓
Funções de dados (leitura/escrita no JSON via fs)
```

## Como rodar o projeto localmente

**Pré-requisitos:** [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Acesse a pasta do projeto
cd SEU-REPOSITORIO

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. A partir da home, é possível acessar `/agendar` (cliente) e `/agenda` (gerência).

> O arquivo `src/app/data/agendamentos.json` já é criado vazio (`[]`) no repositório — os agendamentos criados localmente ficam salvos ali.

## Possíveis melhorias futuras

- [ ] Autenticação no painel `/agenda` (hoje é uma rota pública)
- [ ] Migração do JSON local para um banco de dados real (ex: PostgreSQL + Prisma)
- [ ] Validação de horários já ocupados no momento do agendamento
- [ ] Notificação por e-mail/WhatsApp ao cliente quando o status mudar

## Autor

Desenvolvido por **Bruno Oliveira** como projeto de estudo e desafio pessoal.

- LinkedIn: https://www.linkedin.com/in/bruno-oliveira-3116703b6/
- GitHub: https://github.com/1Kronovi1/

---

Se este projeto foi útil ou interessante de alguma forma, considere deixar uma ⭐ no repositório.
