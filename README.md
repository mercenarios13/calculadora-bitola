# Calculadora de Bitola

## Contextualização
O professor de instalações elétricas ensina seus alunos como calcular a bitola adequada para cada uso de uma instalação. Este aplicativo foi desenvolvido para auxiliar no cálculo da bitola dos fios elétricos, tanto para tensão de 110V quanto para 220V.

## Objetivo
Desenvolver um aplicativo que recebe como entrada:

- Corrente elétrica (A)
- Distância do fio (m)

E exibe a bitola do fio em **milímetros quadrados (mm²)** para:

- Tensão de 110V
- Tensão de 220V

### Fórmulas utilizadas

```text
bitola110 = (2 * corrente * distância) / 294.64
bitola220 = (2 * corrente * distância) / 510.4
