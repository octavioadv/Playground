---
name: pncp-sst-daily-scan
description: Busca diária no PNCP de dispensas abertas de SST (PGR/PCMSO/LTCAT) em todo Brasil, priorizando MG
---

Rode uma busca no Portal Nacional de Contratações Públicas (PNCP) por dispensas de licitação ABERTAS relacionadas a SST para Higilabor.

Objetivo: encontrar oportunidades que a Higilabor possa disputar hoje (dispensa eletrônica, Lei 14.133/21 art. 75 II, teto R$ 59.906,02 em 2026).

Procedimento:
1. Acesse https://pncp.gov.br/app/editais?status=recebendo_proposta&tipos_documento=edital via WebFetch
2. Faça buscas no PNCP com as palavras-chave (uma por vez): "PCMSO", "PGR", "LTCAT", "saúde ocupacional", "segurança do trabalho", "medicina do trabalho", "SST"
3. Filtre por status=recebendo_proposta e modalidade=dispensa
4. Para cada resultado, capture: órgão, UF, município, objeto, valor estimado, data de encerramento, link PNCP
5. Ordene por prioridade:
   - P1: Minas Gerais (qualquer câmara/prefeitura)
   - P2: estados vizinhos (GO, SP, BA, ES, DF)
   - P3: resto do Brasil
6. Descarte: valores acima de R$ 59.906 (não é dispensa pequeno valor), objetos que não sejam claramente SST, itens já encerrados

Saída: crie/atualize o arquivo C:\Users\octav\OneDrive\Apps\Claude\pncp_oportunidades.md com a data de hoje e uma tabela com as oportunidades encontradas. Coluna: Prioridade | UF | Órgão | Objeto | Valor | Encerra | Link.

Se nenhuma oportunidade for encontrada em MG, registre explicitamente "Sem oportunidades MG hoje" e liste as 5 melhores de outros estados.

Após montar o arquivo, mostre o resumo (quantas em MG, quantas total, top 3) na resposta.