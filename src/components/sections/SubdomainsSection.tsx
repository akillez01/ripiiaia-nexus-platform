
import { Building, Heart, Radio, Wrench } from "lucide-react";
import SubdomainCard from "./SubdomainCard";

const SubdomainsSection = () => {
  const subdomains = [
    {
      title: "Portal Ripiiaia",
      subtitle: "A Plataforma Profissional",
      description: "ONG e startup colaborativa com equipe multidisciplinar. Projetos sociais, parcerias institucionais e transparência organizacional.",
      url: "portal.ripiiaia.org",
      route: "/portal",
      icon: Building,
      color: "bg-emerald-400",
      hoverColor: "hover:bg-emerald-500",
      features: ["Projetos Sociais", "Equipe Multidisciplinar", "Parcerias Globais", "Transparência"]
    },
    {
      title: "Universo Daime",
      subtitle: "Espiritualidade e Tradição",
      description: "Espaço sagrado dedicado aos ensinamentos do Mestre Irineu e da doutrina do Daime. Hinários, acervo histórico e musicalidade sagrada.",
      url: "daime.ripiiaia.org",
      route: "/daime",
      icon: Heart,
      color: "bg-amber-400",
      hoverColor: "hover:bg-amber-500",
      features: ["Hinários Sagrados", "Acervo Histórico", "Vídeos & Áudios", "Memória Viva"]
    },
    {
      title: "Rádio Ripiiaia",
      subtitle: "Música e Cultura Amazônica",
      description: "Rádio online com programação voltada à música espiritual, cultura amazônica e conteúdos autorais. Conectando corações através do som.",
      url: "radio.ripiiaia.org",
      route: "/radio",
      icon: Radio,
      color: "bg-sky-400",
      hoverColor: "hover:bg-sky-500",
      features: ["Música Espiritual", "Cultura Amazônica", "Programação Autoral", "Transmissão 24h"]
    },
    {
      title: "Ripiiaia Serviços",
      subtitle: "Soluções Tecnológicas",
      description: "Braço comercial oferecendo serviços profissionais: hospedagem, domínios, criação de sites e suporte técnico especializado.",
      url: "ripiiaia.com.br",
      route: "/servicos",
      icon: Wrench,
      color: "bg-sage-500",
      hoverColor: "hover:bg-sage-600",
      features: ["Hospedagem Web", "Registro de Domínios", "Desenvolvimento", "Suporte Técnico"]
    }
  ];

  return (
    <section id="espacos" className="py-20 px-4 bg-gradient-to-br from-emerald-50/50 to-amber-50/50 dark:from-slate-900/50 dark:to-emerald-950/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-foreground">Nossos Espaços</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada subdomínio com sua especialidade, unidos pela missão de transformação social e espiritual
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {subdomains.map((subdomain, index) => (
            <SubdomainCard key={index} {...subdomain} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubdomainsSection;
