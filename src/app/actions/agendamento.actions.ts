'use server'

import { revalidatePath } from 'next/cache'
import {
  criarAgendamento,
  atualizarStatus,
  excluirAgendamento,
  type StatusAgendamento,
} from '@/app/data/agendamentos'

export async function criarAgendamentoAction(formData: FormData) {
  const nome = formData.get('nome') as string
  const telefone = formData.get('telefone') as string
  const servico = formData.get('servico') as string
  const data = formData.get('data') as string
  const horario = formData.get('horario') as string

  if (!nome || !telefone || !servico || !data || !horario) {
    return { sucesso: false, erro: 'Preencha todos os campos.' }
  }

  criarAgendamento({ nome, telefone, servico, data, horario })

  revalidatePath('/agenda')

  return { sucesso: true, erro: null }
}

export async function atualizarStatusAction(
  id: string,
  status: StatusAgendamento
) {
  atualizarStatus(id, status)
  revalidatePath('/agenda')
}

export async function excluirAgendamentoAction(id: string) {
  excluirAgendamento(id)
  revalidatePath('/agenda')
}