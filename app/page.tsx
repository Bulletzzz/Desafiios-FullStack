'use client';

import { useState } from 'react';
import { Titulo } from './components/atomos/titulo';
import { Botao } from './components/atomos/botao';
import { BarraBusca } from './components/moleculas/barra-busca';
import { CardMembro } from './components/moleculas/card-membro';

interface Membro {
  id: number;
  nome: string;
  cargo: string;
  descricao: string;
  gradiente: string;
}

const membros: Membro[] = [
  {
    id: 1,
    nome: 'Pedro Henrique Moreira',
    cargo: 'Engenheiro de Software Sênior',
    descricao: 'Especialista em Laravel, React e arquitetura/manejo de microprodutos.',
    gradiente: 'from-orange-500 to-purple-500',
  },
  {
    id: 2,
    nome: 'Bernardo Küster Ragugnetti',
    cargo: 'DevOps',
    descricao: 'desenvolvimento, operações de TI, engenharia da qualidade e segurança.',
    gradiente: 'from-blue-500 to-green-500',
  },
  {
    id: 3,
    nome: 'Gabriel Dallpozzo',
    cargo: 'Especialista em criatividade e inovação',
    descricao: 'Mestre da modelagem 3D de objetos',
    gradiente: 'from-yellow-500 to-orange-500',
  },
];

export default function PaginaComunidade() {
  const [busca, setBusca] = useState('');

  const membrosFiltrados = membros.filter((m) =>
    m.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <header className="flex justify-between items-center mb-10">
        <Titulo nivel={1}>Membros do Grupo</Titulo>
        <BarraBusca aoBuscar={setBusca} />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {membrosFiltrados.map((membro) => (
          <CardMembro key={membro.id} {...membro} />
        ))}
      </main>

      <footer className="mt-12 text-center text-gray-500 text-xs">
        <p>© 2026 - Engenharia de Software - Full-Stack Class</p>
        <Botao variante="link" className="mt-2 text-sm">
          Sair do sistema
        </Botao>
      </footer>
    </div>
  );
}
