/**
 * Geracao de URLs de CTA com parametros UTM.
 *
 * O CTA primario ("Comecar gratis") aponta para a rota de cadastro do app,
 * carregando UTMs para atribuicao correta no funil (PRD 04 FR-003, FR-012).
 *
 * A base URL vem de `PUBLIC_CADASTRO_URL` (env) com fallback hardcoded.
 */

/** URL base do cadastro do app PitStop. */
const CADASTRO_BASE =
  import.meta.env.PUBLIC_CADASTRO_URL ??
  'https://app.iaqueatende.com.br/cadastro';

/**
 * Monta a URL de cadastro com UTMs para um CTA especifico.
 *
 * @param section - Identificador da posicao do botao (ex: 'hero', 'pricing',
 *   'cta_final'). Vira o valor de `utm_campaign`.
 * @returns URL completa com `utm_source=landing`, `utm_medium=cta` e
 *   `utm_campaign={section}`.
 *
 * @example
 * ctaUrl('hero')
 * // => 'https://app.iaqueatende.com.br/cadastro?utm_source=landing&utm_medium=cta&utm_campaign=hero'
 */
export function ctaUrl(section: string): string {
  const params = new URLSearchParams({
    utm_source: 'landing',
    utm_medium: 'cta',
    utm_campaign: section,
  });
  return `${CADASTRO_BASE}?${params.toString()}`;
}
