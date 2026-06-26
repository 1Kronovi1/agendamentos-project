import { Badge } from '@/components/ui/badge'
import type { StatusAgendamento } from '@/app/data/agendamentos'

const CONFIG: Record<StatusAgendamento, { texto: string; classe: string }> = {
  pendente: {
    texto: 'Pendente',
    classe: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
  },
  confirmado: {
    texto: 'Confirmado',
    classe: 'bg-green-100 text-green-800 hover:bg-green-100',
  },
  cancelado: {
    texto: 'Cancelado',
    classe: 'bg-red-100 text-red-800 hover:bg-red-100',
  },
  concluido: {
    texto: 'Concluído',
    classe: 'bg-gray-100 text-gray-800 hover:bg-gray-100',
  },
}

type Props = {
  status: StatusAgendamento
}

export function StatusBadge({ status }: Props) {
  const { texto, classe } = CONFIG[status]

  return <Badge className={classe}>{texto}</Badge>
}