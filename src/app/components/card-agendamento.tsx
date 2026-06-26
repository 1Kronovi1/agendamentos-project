'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/app/components/status-badge'
import { atualizarStatusAction } from '@/app/actions/agendamento.actions'
import type { Agendamento } from '@/app/data/agendamentos'

type Props = {
  agendamento: Agendamento
}

export function CardAgendamento({ agendamento }: Props) {
  const [atualizando, setAtualizando] = useState(false)

  async function handleAtualizarStatus(novoStatus: Agendamento['status']) {
    setAtualizando(true)
    await atualizarStatusAction(agendamento.id, novoStatus)
    setAtualizando(false)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">{agendamento.nome}</CardTitle>
        <StatusBadge status={agendamento.status} />
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