'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/app/components/status-badge'
import { Trash2 } from 'lucide-react'
import {
  atualizarStatusAction,
  excluirAgendamentoAction,
} from '@/app/actions/agendamento.actions'
import type { Agendamento } from '@/app/data/agendamentos'

type Props = {
  agendamento: Agendamento
}

export function CardAgendamento({ agendamento }: Props) {
  const [atualizando, setAtualizando] = useState(false)
  const [excluindo, setExcluindo] = useState(false)

  async function handleAtualizarStatus(novoStatus: Agendamento['status']) {
    setAtualizando(true)
    await atualizarStatusAction(agendamento.id, novoStatus)
    setAtualizando(false)
  }

  async function handleExcluir() {
  const confirmou = window.confirm(
    `Excluir o agendamento de ${agendamento.nome}? Essa ação não pode ser desfeita.`
  )
  if (!confirmou) return

  setExcluindo(true)
  await excluirAgendamentoAction(agendamento.id)
  setExcluindo(false)
}

  return (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">{agendamento.nome}</CardTitle>
            <div className="flex items-center gap-2">
                <StatusBadge status={agendamento.status} />
                <Button
                size="icon"
                variant="ghost"
                disabled={excluindo}
                onClick={handleExcluir}
                aria-label={`Excluir agendamento de ${agendamento.nome}`}
                className="h-8 w-8 text-slate-400 hover:bg-red-50 hover:text-red-600"
                >
                <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </CardHeader>

      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>Telefone: {agendamento.telefone}</p>
        <p>Serviço: {agendamento.servico}</p>
        <p>
          {agendamento.data} às {agendamento.horario}
        </p>

        {(agendamento.status === 'pendente' ||
          agendamento.status === 'confirmado') && (
          <div className="flex gap-2 pt-2">
            {agendamento.status === 'pendente' && (
              <Button
                size="sm"
                disabled={atualizando}
                onClick={() => handleAtualizarStatus('confirmado')}
              >
                Confirmar
              </Button>
            )}

            {agendamento.status === 'confirmado' && (
              <Button
                size="sm"
                disabled={atualizando}
                onClick={() => handleAtualizarStatus('concluido')}
              >
                Concluir
              </Button>
            )}

            <Button
              size="sm"
              variant="outline"
              disabled={atualizando}
              onClick={() => handleAtualizarStatus('cancelado')}
            >
              Cancelar
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}