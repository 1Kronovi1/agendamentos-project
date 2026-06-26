import fs from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'

export type StatusAgendamento =
  'pendente' | 'confirmado' | 'cancelado' | 'concluido'

export type Agendamento = {
  id: string
  nome: string
  telefone: string
  servico: string
  data: string
  horario: string
  status: StatusAgendamento
  criadoEm: string
}

const FILE_PATH = path.join(process.cwd(), 'src/app/data/agendamentos.json')

export function listarAgendamentos(): Agendamento[] {
  const conteudo = fs.readFileSync(FILE_PATH, 'utf-8')
  return JSON.parse(conteudo)
}

export function criarAgendamento(
  dados: Omit<Agendamento, 'id' | 'criadoEm' | 'status'>
): Agendamento {
  const agendamentos = listarAgendamentos()

  const novoAgendamento: Agendamento = {
    ...dados,
    id: randomUUID(),
    status: 'pendente',
    criadoEm: new Date().toISOString(),
  }

  agendamentos.push(novoAgendamento)
  fs.writeFileSync(FILE_PATH, JSON.stringify(agendamentos, null, 2))

  return novoAgendamento
}

export function atualizarStatus(id: string, status: StatusAgendamento): void {
  const agendamentos = listarAgendamentos()

  const index = agendamentos.findIndex((a) => a.id === id)
  if (index === -1) {
    throw new Error(`Agendamento com id ${id} não encontrado`)
  }

  agendamentos[index].status = status
  fs.writeFileSync(FILE_PATH, JSON.stringify(agendamentos, null, 2))
}

export function excluirAgendamento(id: string): void {
  const agendamentos = listarAgendamentos()

  const existe = agendamentos.some((a) => a.id === id)
  if (!existe) {
    throw new Error(`Agendamento com id ${id} não encontrado`)
  }

  const atualizados = agendamentos.filter((a) => a.id !== id)
  fs.writeFileSync(FILE_PATH, JSON.stringify(atualizados, null, 2))
}