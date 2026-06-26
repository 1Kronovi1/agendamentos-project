import { AgendamentoForm } from '@/app/components/agendamento-form'

type Props = {
  searchParams: { sucesso?: string }
}

export default function AgendarPage({ searchParams }: Props) {
  const sucesso = searchParams.sucesso === '1'

  return (
    <main className="mx-auto max-w-md px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold">Agendar horário</h1>

      {sucesso && (
        <div
          role="status"
          className="mb-6 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-800"
        >
          Agendamento criado com sucesso! Em breve confirmaremos seu horário.
        </div>
      )}

      <AgendamentoForm />
    </main>
  )
}