import Link from 'next/link'
import { CalendarDays, ClipboardList, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-1px)] flex-col items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-3xl">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            Sistema de Agendamento
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Gerencie seus horários com facilidade
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
            Marque um novo horário ou acompanhe os agendamentos da sua agenda
            em um só lugar.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Link href="/agendar" className="group">
            <Card className="h-full border-slate-200 transition-all hover:border-blue-300 hover:shadow-md">
              <CardHeader className="gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg text-slate-900">
                  Fazer Agendamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Escolha o serviço, a data e o horário disponível para
                  marcar seu atendimento.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:gap-2">
                  Agendar agora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/agenda" className="group">
            <Card className="h-full border-slate-200 transition-all hover:border-blue-300 hover:shadow-md">
              <CardHeader className="gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 text-white">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg text-slate-900">
                  Ver Agenda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Acompanhe, confirme, cancele ou conclua os agendamentos
                  recebidos.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:gap-2">
                  Abrir painel
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  )
}