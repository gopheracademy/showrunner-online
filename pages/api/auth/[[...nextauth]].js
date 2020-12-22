export default (req, res) => NextAuth(req, res, options)
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Okta({
            clientId: process.env.OKTA_CLIENTID,
            clientSecret: process.env.OKTA_CLIENTSECRET,
            domain: process.env.OKTA_DOMAIN
        }),
        // ...add more providers here
    ],
    secret: process.env.NEXT_SESSION_SECRET,
    callbacks: {
        /** 
        * @param  {object}  token     Decrypted JSON Web Token
        * @param  {object}  user      User object      (only available on sign in)
        * @param  {object}  account   Provider account (only available on sign in)
        * @param  {object}  profile   Provider profile (only available on sign in)
        * @param  {boolean} isNewUser True if new user (only available on sign in)
        * @return {object}            JSON Web Token that will be saved
        */
        jwt: async (token, user, account, profile, isNewUser) => {
            console.log("jwt-token:", token);
            console.log("jwt-user:", user);
            console.log("jwt-account:", account);
            console.log("jwt-profile:", profile);
            console.log("jwt-isnewuser:", isNewUser);
            return Promise.resolve(token)
        },
        session: async (session, user) => {
            console.log("session-session:", session);
            console.log("session-user:", user);
            return Promise.resolve(session)
        },
        /**
         * @param  {object} user     User object
         * @param  {object} account  Provider account
         * @param  {object} profile  Provider profile 
         * @return {boolean}         Return `true` (or a modified JWT) to allow sign in
         *                           Return `false` to deny access
         */
        signIn: async (user, account, profile) => {
            console.log("user", user);
            console.log("account", account);
            console.log("profile", profile);
            return Promise.resolve(true)
        }
    }
}