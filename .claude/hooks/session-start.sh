#!/bin/bash
set -euo pipefail

# Only run in Claude Code on the web.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "[session-start] installing Python dependencies..."

# The repo has no formal manifest but its Python scripts import:
#   requests (monitor_pncp.py)
#   openpyxl (gerar_*.py)
# Ruff is installed so the linter-validation step in future sessions works.
python3 -m pip install --quiet --disable-pip-version-check \
  requests \
  openpyxl \
  ruff

echo "[session-start] done."
