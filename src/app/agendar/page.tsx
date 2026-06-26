import { CheckCircle2, CalendarDays } from 'lucide-react'
import { AgendamentoForm } from '@/app/components/agendamento-form'

type Props = {
  searchParams: { sucesso?: string }
}

export default function AgendarPage({ searchParams }: Props) {
  const sucesso = searchParams.sucesso === '1'

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
            <CalendarDays className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              Agendar horário
            </h1>
            <p className="text-sm text-slate-500">
              Preencha os dados para marcar seu atendimento
            </p>
          </div>
        </div>

        {sucesso && (
          <div
            role="status"
            className="mb-6 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              Agendamento criado com sucesso! Em breve confirmaremos seu
              horário.
            </span>
          </div>
        )}

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <AgendamentoForm />
        </div>
      </div>
    </main>
  )
}