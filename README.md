# Gerador de Promoções - Nevada Turismo

Este é um aplicativo web simples e eficiente desenvolvido para agilizar a criação de textos promocionais de pacotes de viagem para a **Nevada Turismo**. O sistema permite o preenchimento de dados do pacote e gera automaticamente uma mensagem formatada, pronta para ser copiada e enviada via WhatsApp ou redes sociais.

![Preview do Projeto](https://via.placeholder.com/800x400?text=Preview+Gerador+de+Ofertas)

## 🚀 Funcionalidades

*   **Geração em Tempo Real**: A prévia da mensagem é atualizada automaticamente enquanto você digita.
*   **Cálculos Automáticos**:
    *   Cálculo de dias com base nas datas de início e fim.
    *   Divisão automática do valor total para "Valor por Pessoa".
    *   Cálculo de valor de entrada (com arredondamento inteligente) baseado em porcentagem.
    *   Cálculo do valor das parcelas.
*   **Formatação Inteligente**:
    *   Formatação automática de moeda (BRL) enquanto digita.
    *   Integração com calendário (Flatpickr) para seleção de datas.
*   **Personalização**:
    *   Opção para incluir/excluir translado.
    *   Campo opcional para inserir nome de feriados.
    *   Seleção de regime de alimentação e acomodação.
*   **Interface Moderna**:
    *   Tema escuro (Dark Mode) profissional e agradável.
    *   Layout responsivo.
*   **Facilidade de Uso**: Botão "Copiar Texto" com feedback visual para agilizar o compartilhamento.

## 🛠️ Tecnologias Utilizadas

*   **HTML5**: Estrutura semântica da aplicação.
*   **CSS3**: Estilização moderna com variáveis CSS, Flexbox e Grid.
*   **JavaScript (Vanilla)**: Lógica de negócios, manipulação do DOM e cálculos em tempo real.
*   **[Flatpickr](https://flatpickr.js.org/)**: Biblioteca leve para seleção de datas.
*   **Google Fonts**: Fonte 'Outfit' para uma tipografia moderna.

## 📂 Estrutura do Projeto

```
/
├── promo_generator.html  # Arquivo principal (Interface)
├── styles.css            # Folha de estilos (Tema Escuro)
└── script.js             # Lógica da aplicação
```

## 🔧 Como Usar

1.  Faça o download ou clone este repositório.
2.  Abra o arquivo `promo_generator.html` em seu navegador de preferência (Chrome, Firefox, Edge, etc.).
3.  Preencha os campos com os dados do pacote de viagem.
4.  Confira a mensagem gerada na caixa "Prévia da Mensagem".
5.  Clique em "Copiar Texto" e cole onde desejar!


---
Desenvolvido para **Nevada Turismo**.
