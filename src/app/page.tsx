import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-3xl font-semibold">Sistema de Agendamento</h1>

      <div className="grid w-full gap-4 sm:grid-cols-2">
        <Link href="/agendar">
          <Card className="h-full transition-colors hover:bg-muted/50">
            <CardHeader>
              <CardTitle>Fazer Agendamento</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Marque um horário escolhendo serviço, data e horário disponível.
            </CardContent>
          </Card>
        </Link>

        <Link href="/agenda">
          <Card className="h-full transition-colors hover:bg-muted/50">
            <CardHeader>
              <CardTitle>Ver Agenda</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Acompanhe, confirme, cancele ou conclua os agendamentos.
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  )
}