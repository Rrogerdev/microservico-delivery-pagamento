/**
 * src/config/infisical.js
 * SDK @infisical/sdk v5 — autenticação via accessToken (Service Token)
 */
 
const { InfisicalSDK } = require('@infisical/sdk');
 
// const INFISICAL_TOKEN      = process.env.INFISICAL_TOKEN      || 'st.b069add6-1345-498f-9e46-68958e4afcd3.c427e1d9f6a952f550e525abb4be70fd.d31a3c7b7dacea2ba83748258b948c6d';
const INFISICAL_TOKEN      = process.env.INFISICAL_TOKEN      || 'st.f66350f1-9449-4085-8b29-501454bd464f.9c8831ed0320b542e8fb1fd49de64861.d2afe2e159108fc76dc25942c7fbb143';
const INFISICAL_PROJECT_ID = process.env.INFISICAL_PROJECT_ID || '33d7fe2b-ed71-41a9-951e-0d448894e72d';
const INFISICAL_ENV        = process.env.INFISICAL_ENV        || 'prod';
const INFISICAL_SECRET_PATH = process.env.INFISICAL_SECRET_PATH || '/pasta';

const INFISICAL_CLIENT_ID   = process.env.INFISICAL_CLIENT_ID   || process.env.CLIENT_ID;
const INFISICAL_CLIENT_SECRET = process.env.INFISICAL_CLIENT_SECRET || process.env.CLIENT_SECRET;
async function loadSecrets() {
  try {
    console.log(`[Infisical] Conectando... projeto: ${INFISICAL_PROJECT_ID} | ambiente: ${INFISICAL_ENV} | path: ${INFISICAL_SECRET_PATH}`);
 
    const client = new InfisicalSDK({ siteUrl: 'https://app.infisical.com' });
 
    if (INFISICAL_CLIENT_ID && INFISICAL_CLIENT_SECRET) {
      console.log('[Infisical] Autenticando com Universal Auth (Machine Identity)...');
      await client.auth().universalAuth.login({
        clientId: INFISICAL_CLIENT_ID,
        clientSecret: INFISICAL_CLIENT_SECRET
      });
    } else {
      console.log('[Infisical] Autenticando com Service Token...');
      await client.auth().accessToken(INFISICAL_TOKEN);
    }
 
    const { secrets } = await client.secrets().listSecrets({
      projectId:   INFISICAL_PROJECT_ID,
      environment: INFISICAL_ENV,
      secretPath:  INFISICAL_SECRET_PATH,
    });
 
    let count = 0;
    for (const secret of secrets) {
      if (!process.env[secret.secretKey]) {
        process.env[secret.secretKey] = secret.secretValue;
        count++;
      }
    }
 
    console.log(`[Infisical] ✅ ${count} secret(s) carregado(s).`);
  } catch (err) {
    console.error('[Infisical] ❌ Erro ao carregar secrets:', err.message);
  }
}
 
module.exports = { loadSecrets };
