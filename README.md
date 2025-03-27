# Design de Software

Design de Software se refere à criação intencional e organizada de sistemas de software, com o objetivo de satisfazer necessidades específicas dos usuários, cumprir requisitos de qualidade e de performance, e garantir a manutenibilidade do código.

# Domain-Driven Design

Já o DDD (Domain Driven Design) é uma abordagem de design de software que se concentra na modelagem do domínio da aplicação, visando representar as regras e conceitos de negócios do mundo real.

# Domínio

Uma área de entendimento, onde todas as pessoas envolvidas tem conhecimentos semelhantes.

- Domais experts
    - Clientes, especialistas que o software vai resolver algum problema, Stakeholders.
- Linguagem Ubíqua

# Entidades

Entidades representam objetos do mundo real que possuem uma identidade e que mantêm um estado que é relevante para a aplicação.

# Casos de Uso

Já casos de uso descrevem as funcionalidades (ações) que o software deve realizar para atender às necessidades dos usuários ou do negócio.


Entidades e Casos de Usos  são essenciais para a definição do escopo e da arquitetura do sistema, e ajudam a garantir que o software seja desenvolvido para atender às necessidades do usuário final.


# Repository

Um repositório em arquitetura limpa é um componente que separa a lógica de acesso a dados da lógica de negócios. Ele é um padrão de design que abstrai a camada de dados e permite que os desenvolvedores trabalhem com objetos de domínio. 

# Value Objects

Propriedades de uma entidade que tem regras de negocios relacionadas a estas entidades.


# Clean Architecture
A Clean Architecture é uma abordagem amplamente utilizada por desenvolvedores para garantir que seus sistemas sejam escaláveis, testáveis e fáceis de manter.

https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

![alt text](./assets/clean_arch.png)

## Frameworks & Drivers
  Interação externa.

## Interface Adapters
  Adaptar a informação que vem da camada azul. Proteje as camadas inferiores da camada mais externa (Azul)

## Aplication Business Rules
  Casos de uso

## Enterprise Business Rules
  Entidades

---
