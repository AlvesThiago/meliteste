import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">M3D</span>
              </div>
              <span className="text-secondary-foreground font-bold text-xl">MELI 3D</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#sobre"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition text-sm"
              >
                Sobre
              </a>
              <a
                href="#resultados"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition text-sm"
              >
                Resultados
              </a>
              <a
                href="#projetos"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition text-sm"
              >
                Projetos
              </a>
              <a
                href="#tecnologia"
                className="text-secondary-foreground/80 hover:text-secondary-foreground transition text-sm"
              >
                Tecnologia
              </a>
              <button className="px-5 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition text-sm">
                Contato
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://fesmo.com.br/wp-content/uploads/2023/02/Impressora-3D-de-filamento-tecnologia-componentes-e-vantagens.jpg" alt="MELI 3D Laboratory" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/80 to-secondary"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
            <span className="text-primary text-sm font-medium">Laboratório de Manufatura Aditiva</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Transformando ideias em <span className="text-primary">resultados reais</span>
          </h1>
          <p className="text-xl sm:text-2xl text-secondary-foreground/70 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
            Manufatura aditiva de alta precisão para otimização de processos, redução de custos e inovação contínua no
            Mercado Livre
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition text-lg w-full sm:w-auto">
              Conheça nossos projetos
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-secondary-foreground/20 text-secondary-foreground font-semibold rounded-lg hover:border-secondary-foreground/40 transition text-lg w-full sm:w-auto">
              Ver resultados
            </button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { value: "90%", label: "Redução de Custos" },
              { value: "R$ 1M+", label: "Ganho Financeiro" },
              { value: "3.5K+", label: "Peças Produzidas" },
              { value: "15+", label: "Impressoras Ativas" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-secondary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Sobre o MELI 3D</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              O laboratório de manufatura aditiva do Mercado Livre, desenvolvendo soluções inovadoras para otimização de
              processos e redução de custos operacionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title: "Inovação",
                desc: "Tecnologia de ponta em impressão 3D para soluções customizadas",
                icon: "⚡",
              },
              {
                title: "Eficiência",
                desc: "Redução significativa de custos operacionais e tempo de produção",
                icon: "🎯",
              },
              {
                title: "Agilidade",
                desc: "Prototipagem rápida e produção sob demanda 24/7",
                icon: "🚀",
              },
              {
                title: "Precisão",
                desc: "Controle de qualidade rigoroso em todas as peças fabricadas",
                icon: "✓",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Nossa Missão</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Proporcionar soluções inteligentes e sustentáveis através da manufatura aditiva, otimizando processos
                logísticos e produtivos, reduzindo custos e promovendo inovação contínua.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalhamos com tecnologia FDM/FFF de alta precisão, produzindo peças customizadas que atendem às
                necessidades específicas de cada projeto no Mercado Livre.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://meli3-d.vercel.app/yellow-3d-printed-industrial-part.jpg" alt="Laboratório MELI 3D" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Resultados Comprovados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Impacto real nos processos e operações do Mercado Livre
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: "90%", label: "Redução de Custos", sublabel: "vs. métodos tradicionais" },
              { value: "1.24%", label: "Gasto Bruto", sublabel: "do orçamento operacional" },
              { value: "R$ 1M+", label: "Ganho Financeiro", sublabel: "economizado em 2024" },
              { value: "3.5K+", label: "Peças Produzidas", sublabel: "com alta qualidade" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-bold text-primary mb-3">{item.value}</div>
                <div className="text-lg font-semibold text-card-foreground mb-2">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="bg-secondary text-secondary-foreground rounded-2xl p-10 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Impacto por Projeto</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">250+</div>
                <div className="text-sm text-secondary-foreground/70">Casas Personalizadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1.2M+</div>
                <div className="text-sm text-secondary-foreground/70">Peças Fabricadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-secondary-foreground/70">Eficiência de Geração</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Projetos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Soluções desenvolvidas para otimizar operações e reduzir custos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Suporte Dinâmico - BRSP04",
                desc: "Sistema de suporte customizado para otimização de espaço e eficiência operacional no centro de distribuição",
                image: "https://meli3-d.vercel.app/yellow-3d-printed-industrial-part.jpg",
              },
              {
                title: "Sistema de Encaixe Inteligente",
                desc: "Solução modular para organização e armazenamento com encaixes precisos e reutilizáveis",
                image: "https://meli3-d.vercel.app/yellow-3d-printed-industrial-part.jpg",
              },
              {
                title: "Cradle Prototipado Zebra",
                desc: "Suporte ergonômico para dispositivos Zebra, melhorando produtividade e conforto dos operadores",
                image: "https://meli3-d.vercel.app/yellow-3d-printed-industrial-part.jpg",
              },
              {
                title: "Impressão em Massa",
                desc: "Produção em larga escala de componentes padronizados com controle de qualidade automatizado",
                image: "https://meli3-d.vercel.app/yellow-3d-printed-industrial-part.jpg",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Tecnologia e Capacidades</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Equipamentos de última geração e processos otimizados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Tecnologia FDM/FFF",
                desc: "Impressão 3D com alta precisão, repetibilidade e acabamento profissional para produção em escala",
                icon: "🖨️",
              },
              {
                title: "Materiais Disponíveis",
                desc: "PLA, ABS, PETG, TPU e materiais especiais sob demanda para diferentes aplicações",
                icon: "🧪",
              },
              {
                title: "Controle de Qualidade",
                desc: "Testes rigorosos e validações em todas as peças produzidas garantindo padrão de excelência",
                icon: "✓",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-10 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Capacidade de Produção</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Impressoras Ativas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Operação Contínua</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5K+</div>
                <div className="text-sm text-muted-foreground">Peças por Mês</div>
              </div>
            </div>
          </div>

          <div className="mt-12 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="https://meli3-d.vercel.app/3d-printing-laboratory-with-multiple-printers.jpg" alt="MELI 3D Production Facility" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Próximos Passos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Inovação contínua e expansão das capacidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Expansão da Capacidade",
                desc: "Aumento do parque de impressoras para atender demanda crescente",
              },
              { title: "Novos Materiais", desc: "Incorporação de materiais avançados e sustentáveis" },
              { title: "Automação de Processos", desc: "Implementação de sistemas automatizados de produção" },
              { title: "Integração com IA/ML", desc: "Otimização de designs e processos com inteligência artificial" },
              { title: "Novas Certificações", desc: "Certificações internacionais de qualidade e sustentabilidade" },
              { title: "Parcerias Estratégicas", desc: "Colaboração com fornecedores e centros de pesquisa" },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-card-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 text-secondary-foreground rounded-2xl p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-balance">Quer saber mais sobre nossos projetos?</h3>
            <p className="text-lg text-secondary-foreground/70 mb-8 text-pretty">
              Entre em contato com nossa equipe e descubra como podemos ajudar
            </p>
            <button className="px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition text-lg">
              Fale conosco
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-secondary-foreground py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl">M3D</span>
                </div>
                <span className="text-secondary-foreground font-bold text-xl">MELI 3D</span>
              </div>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                Laboratório de manufatura aditiva do Mercado Livre
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/60">
                <li>
                  <a href="#sobre" className="hover:text-secondary-foreground transition">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#resultados" className="hover:text-secondary-foreground transition">
                    Resultados
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="hover:text-secondary-foreground transition">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#tecnologia" className="hover:text-secondary-foreground transition">
                    Tecnologia
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/60">
                <li>Mercado Livre SP</li>
                <li>São Paulo, Brasil</li>
                <li className="pt-2">
                  <a href="mailto:meli3d@mercadolivre.com" className="hover:text-primary transition">
                    meli3d@mercadolivre.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tecnologias</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/60">
                <li>Impressão FDM/FFF</li>
                <li>Materiais Diversos</li>
                <li>Produção 24/7</li>
                <li>Controle de Qualidade</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© 2025 MELI 3D Laboratory. Todos os direitos reservados.</p>
            <p>Parte do ecossistema Mercado Livre</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
