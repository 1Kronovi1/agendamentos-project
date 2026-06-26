import { listarAgendamentos } from '@/app/data/agendamentos'
import { CardAgendamento } from '@/app/components/card-agendamento'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const dynamic = 'force-dynamic'

export default function AgendaPage() {
  const agendamentos = listarAgendamentos()

  const totais = {
    pendente: agendamentos.filter((a) => a.status === 'pendente').length,
    confirmado: agendamentos.filter((a) => a.status === 'confirmado').length,
    concluido: agendamentos.filter((a) => a.status === 'concluido').length,
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold">Agenda</h1>

      <div className="mb-8 grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Pendentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{totais.pendente}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Confirmados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{totais.confirmado}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Concluídos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{totais.concluido}</p>
          </CardContent>
        </Card>
      </div>

      {agendamentos.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Nenhum agendamento ainda.
        </p>
      ) : (
        <div className="space-y-4">
          {agendamentos.map((agendamento) => (
            <CardAgendamento key={agendamento.id} agendamento={agendamento} />
          ))}
        </div>
      )}
    </main>
  )
}