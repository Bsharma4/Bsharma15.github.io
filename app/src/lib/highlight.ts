// Minimal dependency-free syntax highlighter for demonstration code panels.
// Not a full tokenizer — good enough for readable, realistic snippets.

const SQL_KEYWORDS = [
  "WITH", "SELECT", "FROM", "JOIN", "ON", "WHERE", "GROUP BY", "ORDER BY",
  "PARTITION BY", "OVER", "RANK", "SUM", "COUNT", "COUNT_IF", "ROUND",
  "NULLIF", "QUALIFY", "AS", "AND", "OR", "DESC", "ASC", "CURRENT_DATE",
  "DATEADD",
];

const PY_KEYWORDS = [
  "def", "class", "return", "if", "not", "import", "from", "raise",
  "any", "any\\(\\)", "False", "True", "None", "for", "in",
];

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function highlightSql(code: string): string {
  let html = escapeHtml(code);
  html = html.replace(/(--.*)$/gm, '<span class="tok-comment">$1</span>');
  html = html.replace(/('[^']*')/g, '<span class="tok-string">$1</span>');
  html = html.replace(/\b(\d+)\b/g, '<span class="tok-number">$1</span>');
  const kw = SQL_KEYWORDS.sort((a, b) => b.length - a.length).join("|");
  html = html.replace(new RegExp(`\\b(${kw})\\b`, "gi"), '<span class="tok-keyword">$1</span>');
  html = html.replace(/\b([a-z_]+)(?=\()/gi, '<span class="tok-fn">$1</span>');
  return html;
}

export function highlightPython(code: string): string {
  let html = escapeHtml(code);
  html = html.replace(/(""".*?"""|#.*)$/gms, '<span class="tok-comment">$1</span>');
  html = html.replace(/(f?"[^"]*"|f?'[^']*')/g, '<span class="tok-string">$1</span>');
  html = html.replace(/\b(\d+)\b/g, '<span class="tok-number">$1</span>');
  const kw = PY_KEYWORDS.join("|");
  html = html.replace(new RegExp(`\\b(${kw})\\b`, "g"), '<span class="tok-keyword">$1</span>');
  html = html.replace(/@\w+/g, '<span class="tok-keyword">$&</span>');
  html = html.replace(/\b([a-z_]+)(?=\()/gi, '<span class="tok-fn">$1</span>');
  return html;
}
