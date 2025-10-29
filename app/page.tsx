import Image from "next/image"

export default function Page() {
  return (
    <main className="flex flex-col items-center text-gray-800">
      {/* HERO */}
      <section className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center bg-neutral-900 text-white overflow-hidden">
        <Image
          src="/placeholder.jpg"
          alt="Banner MELI 3D"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-5xl font-bold mb-4">MELI 3D</h1>
          <p className="text-lg mb-6">
            Transformamos ideias em resultados através da manufatura aditiva de alta precisão.
          </p>
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition">
            Conheça nossos projetos
          </button>
        </div>
      </section>

      {/* SOBRE */}
      <section className="max-w-6xl w-full py-20 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Sobre o Laboratório MELI 3D</h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-gray-600">
          O MELI 3D é o laboratório de manufatura aditiva do Mercado Livre, onde são desenvolvidos projetos
          para otimização de processos, redução de custos e aumento da eficiência operacional.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {["Inovação", "Redução Operacional", "Agilidade", "Precisão"].map((title, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>

        {/* Missão */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Nossa Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              Proporcionar soluções inteligentes e sustentáveis através da manufatura aditiva, otimizando
              processos logísticos e produtivos, reduzindo custos e promovendo inovação.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/placeholder.jpg"
              alt="Laboratório MELI 3D"
              width={500}
              height={350}
              className="rounded-xl object-cover w-full"
            />
          </div>
        </div>
      </section>

      <hr className="my-10 w-3/4 border-gray-200" />

      {/* RESULTADOS */}
      <section className="max-w-6xl w-full py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-10">Resultados Comprovados</h2>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { value: "90%", label: "Redução de Custos" },
            { value: "1.24%", label: "Gasto Bruto" },
            { value: "R$ 1M", label: "Ganho Financeiro" },
            { value: "3.5K", label: "Peças Produzidas" },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-3xl font-bold text-yellow-500 mb-2">{item.value}</h3>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="border border-gray-200 rounded-lg p-6 shadow-sm max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Impacto por Projeto</h3>
          <p className="text-gray-600 text-sm">
            250 Casas personalizadas | 1.2M peças fabricadas | 100% Eficiência de Geração
          </p>
        </div>
      </section>

      <hr className="my-10 w-3/4 border-gray-200" />

      {/* PROJETOS */}
      <section className="max-w-6xl w-full py-20 px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Projetos em Destaque</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Suporte Dinâmico - BRSP04",
            "Sistema de Encaixe Inteligente",
            "Cradle Prototipado Zebra",
            "Impressão em Massa",
          ].map((title, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/placeholder.jpg"
                alt={title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                  Projeto desenvolvido pelo laboratório MELI 3D com foco em eficiência e redução de custos.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-10 w-3/4 border-gray-200" />

      {/* TECNOLOGIA */}
      <section className="max-w-6xl w-full py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-10">Tecnologia e Capacidades</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { title: "Tecnologia FDM/FFF", desc: "Impressão 3D com alta precisão e repetibilidade." },
            { title: "Materiais Disponíveis", desc: "PLA, ABS, PETG, TPU e outros sob demanda." },
            { title: "Controle de Qualidade", desc: "Testes e validações em todas as peças produzidas." },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg py-10 px-6 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-3">Capacidade de Produção</h3>
          <p className="text-gray-700 text-sm">
            +15 Impressoras | 24/7 Operação | +5K Peças por mês
          </p>
        </div>
      </section>

      <hr className="my-10 w-3/4 border-gray-200" />

      {/* PRÓXIMOS PASSOS */}
      <section className="max-w-6xl w-full py-20 px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Próximos Passos</h2>

        <div className="space-y-4">
          {[
            "Expansão da Capacidade",
            "Novos Materiais",
            "Automação de Processos",
            "Integração com IA/ML",
            "Novas Certificações",
          ].map((step, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{step}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-yellow-400 rounded-lg py-8 px-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-black">
              Quer saber mais sobre nossos projetos?
            </h3>
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-neutral-800 transition">
              Fale conosco
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-neutral-900 text-gray-300 py-10 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="text-yellow-400 font-semibold mb-2">MELI 3D</h4>
            <p>Localizado no Mercado Livre SP - Brasil</p>
          </div>
          <div>
            <p>© 2025 MELI Laboratory. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
