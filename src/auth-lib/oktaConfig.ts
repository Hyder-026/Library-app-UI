export const oktaConfig = {
    clientId: '0oaedmv1pohOZnIxg5d7',
    issuer: 'https://dev-01727921.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}