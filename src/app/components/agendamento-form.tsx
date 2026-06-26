'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { criarAgendamentoAction } from '@/app/actions/agendamento.actions'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const SERVICOS = ['Corte', 'Barba', 'Corte + Barba', 'Hidratação']

const HORARIOS = Array.from({ length: 11 }, (_, i) => {
  const hora = 8 + i
  return `${hora.toString().padStart(2, '0')}:00`
})

export function AgendamentoForm() {
  const router = useRouter()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [servico, setServico] = useState('')
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')

  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro(null)
    setEnviando(true)

    const formData = new FormData()
    formData.set('nome', nome)
    formData.set('telefone', telefone)
    formData.set('servico', servico)
    formData.set('data', data)
    formData.set('horario', horario)

    const resultado = await criarAgendamentoAction(formData)

    setEnviando(false)

    if (!resultado.sucesso) {
      setErro(resultado.erro)
      return
    }

    router.push('/agendar?sucesso=1')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="nome">Nome completo</Label>
        <Input
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="telefone">Telefone</Label>
        <Input
          id="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="servico">Serviço</Label>
        <Select value={servico} onValueChange={setServico} required>
          <SelectTrigger id="servico">
            <SelectValue placeholder="Selecione um serviço" />
          </SelectTrigger>
          <SelectContent>
            {SERVICOS.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="data">Data</Label>
        <Input
          id="data"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="horario">Horário</Label>
        <Select value={horario} onValueChange={setHorario} required>
          <SelectTrigger id="horario">
            <SelectValue placeholder="Selecione um horário" />
          </SelectTrigger>
          <SelectContent>
            {HORARIOS.map((h) => (
              <SelectItem key={h} value={h}>
                {h}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {erro && <p className="text-sm text-red-600">{erro}</p>}

      <Button type="submit" disabled={enviando}>
        {enviando ? 'Agendando...' : 'Agendar'}
      </Button>
    </form>
  )
}