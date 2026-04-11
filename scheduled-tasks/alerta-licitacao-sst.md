---
name: alerta-licitacao-sst
description: Monitora licitações SST no PNCP diariamente (MG, GO, SP) e alerta sobre novas oportunidades
---

Rode o monitor de licitações SST do PNCP para buscar novas oportunidades.

1. Execute: cd "C:\Users\octav\OneDrive\Apps\Claude\alerta-licitacao" && python monitor_pncp.py 1
2. Leia o arquivo data/resultados.json para ver os resultados
3. Se houver licitações novas com relevância >= 50, apresente um resumo ao Octavio com:
   - Quantidade de novas licitações encontradas
   - Top 5 por relevância (município, objeto resumido, valor, data abertura, link PNCP)
   - Destaque especial para qualquer uma em Uberlândia ou Triângulo Mineiro
4. Se não houver novidades, diga apenas: "Sem licitações SST novas hoje em MG/GO/SP."