/**
 * src/config/infisical.js
 * SDK @infisical/sdk v5 — autenticação via accessToken (Service Token)
 */
 
const { InfisicalSDK } = require('@infisical/sdk');
 
// const INFISICAL_TOKEN      = process.env.INFISICAL_TOKEN      || 'st.b069add6-1345-498f-9e46-68958e4afcd3.c427e1d9f6a952f550e525abb4be70fd.d31a3c7b7dacea2ba83748258b948c6d';
const INFISICAL_TOKEN      = process.env.INFISICAL_TOKEN      || 'st.f66350f1-9449-4085-8b29-501454bd464f.9c8831ed0320b542e8fb1fd49de64861.d2afe2e159108fc76dc25942c7fbb143';
const INFISICAL_PROJECT_ID = process.env.INFISICAL_PROJECT_ID || '33d7fe2b-ed71-41a9-951e-0d448894e72d';
const INFISICAL_ENV        = process.env.INFISICAL_ENV        || 'prod';
 
async function loadSecrets() {
  // if (process.env.NODE_ENV !== 'production') {
  //   console.log('[Infisical] NODE_ENV !== production — usando variáveis locais (.env)');
  //   return;
  // }
 
  try {
    console.log(`[Infisical] Conectando... projeto: ${INFISICAL_PROJECT_ID} | ambiente: ${INFISICAL_ENV}`);
 
    const client = new InfisicalSDK({ siteUrl: 'https://app.infisical.com' });
 
    // SDK v5: Service Token usa accessToken() diretamente
    await client.auth().accessToken(INFISICAL_TOKEN);
 
    const { secrets } = await client.secrets().listSecrets({
      projectId:   INFISICAL_PROJECT_ID,
      environment: INFISICAL_ENV,
      secretPath:  '/pasta',
    });
 
    let count = 0;
    for (const secret of secrets) {
      if (!process.env[secret.secretKey]) {
        process.env[secret.secretKey] = secret.secretValue;
        count++;
      }
    }
   console.log(process.env);
    console.log(`[Infisical] ✅ ${count} secret(s) carregado(s).`);
  } catch (err) {
    console.error('[Infisical] ❌ Erro ao carregar secrets:', err.message);
    process.exit(1);
  }
}
 
module.exports = { loadSecrets };
