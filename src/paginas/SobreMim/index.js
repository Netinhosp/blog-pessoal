import React from "react";
import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import minhaFoto from "assets/minha_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Helí</h3>
      <img src={minhaFoto} alt="Foto do Helí" className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou aluno de Front-end na Alura e curso Engenharia de software na UNINTER
      </p>
      <p className={styles.paragrafo}>
        Permita-me contar um pouco sobre mim. Sou um jovem desenvolvedor web apaixonado por tecnologia e todas as suas inovações. Desde muito cedo, descobri minha paixão pela programação e decidi seguir esse caminho cheio de possibilidades e desafios.
      </p>
      <p className={styles.paragrafo}>
        A cada dia, fico maravilhado com a velocidade com que a tecnologia evolui e transforma o mundo ao nosso redor. É incrível como a internet e o desenvolvimento web se tornaram tão presentes e essenciais em nossas vidas. E é nesse universo em constante transformação que encontrei minha vocação.
      </p>
      <p className={styles.paragrafo}>
        Dediquei-me intensamente ao estudo e à prática do desenvolvimento web, buscando sempre aprimorar minhas habilidades e conhecimentos. Através de cursos, projetos pessoais e experiências profissionais, adquiri um amplo conjunto de habilidades em diversas áreas da programação, como HTML, CSS, JavaScript e frameworks populares como React.
      </p>
      <p className={styles.paragrafo}>
        No entanto, a busca pelo conhecimento é uma jornada contínua. Entendo que a tecnologia está sempre em movimento, e é fundamental estar atualizado para acompanhar as tendências e inovações. Por isso, estou constantemente em busca de novos desafios e oportunidades para aprimorar minhas habilidades e expandir meu horizonte técnico.
      </p>
      <p className={styles.paragrafo}>
        Acredito que a colaboração e o compartilhamento de conhecimento são fundamentais para o crescimento pessoal e profissional. Participar de comunidades online, fóruns e grupos de desenvolvedores me permite interagir com pessoas que compartilham da mesma paixão e aprender com suas experiências.
      </p>
      <p className={styles.paragrafo}>
        Além disso, busco sempre estar atualizado sobre as últimas tecnologias, tendências de design e melhores práticas de desenvolvimento web. Ler blogs, assistir a tutoriais em vídeo e participar de conferências são algumas das maneiras pelas quais me mantenho informado sobre as novidades do mundo da tecnologia.
      </p>
      <p className={styles.paragrafo}>
        Como um jovem desenvolvedor web, tenho grandes aspirações. Sonho em criar soluções inovadoras que possam fazer a diferença na vida das pessoas. Acredito que a tecnologia pode ser uma poderosa ferramenta para transformar ideias em realidade e impulsionar o progresso.
      </p>
      <p className={styles.paragrafo}>
        A cada novo projeto em que me envolvo, encontro uma oportunidade de aprendizado e crescimento. Seja desenvolvendo um site responsivo, construindo uma aplicação web interativa ou otimizando o desempenho de uma plataforma online, estou sempre animado para enfrentar os desafios e superar as expectativas.
      </p>
      <p className={styles.paragrafo}>
        Em resumo, sou um jovem desenvolvedor e estou em constante busca de conhecimento e experiência, sempre aberto a novos desafios e oportunidades de aprendizado. Acredito no poder da tecnologia para melhorar vidas e estou comprometido em contribuir para esse avanço, deixando minha marca nesse mundo digital em constante evolução.
      </p>
    </PostModelo>
  );
}
