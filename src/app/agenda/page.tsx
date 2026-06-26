import { ClipboardList, Clock, CheckCircle2, BadgeCheck } from 'lucide-react'
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
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-white">
            <ClipboardList className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Agenda</h1>
            <p className="text-sm text-slate-500">
              Painel de acompanhamento dos agendamentos
            </p>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-4">
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-amber-800">
                <Clock className="h-4 w-4" />
                Pendentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-amber-900">
                {totais.pendente}
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-blue-800">
                <BadgeCheck className="h-4 w-4" />
                Confirmados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-blue-900">
                {totais.confirmado}
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-slate-100">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4" />
                Concluídos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-slate-900">
                {totais.concluido}
              </p>
            </CardContent>
          </Card>
        </div>

        {agendamentos.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white py-12 text-center">
            <p className="text-sm text-slate-500">Nenhum agendamento ainda.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {agendamentos.map((agendamento) => (
              <CardAgendamento key={agendamento.id} agendamento={agendamento} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}