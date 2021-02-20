const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UsuarioDao = require('../app/model/usuario-dao');
const db = require('./mysql-database');

module.exports = (app) => {

    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'senha'
        },
        async (email, senha, done) => {
            const usuarioDao = new UsuarioDao(db);
             
            const usuario = await usuarioDao.buscaPorEmail(email);

            if (usuario.length == 0) {
                return done(null, false, {
                    mensagem: 'Usuario nao encontrado na base'
                });
            }

            if (senha != usuario[0].senha) {
                return done(null, false, {
                    mensagem: 'A senha informada esta incorretos!'
                });
            }
            return done(null, usuario);
        }
    ));

    passport.serializeUser((usuario, done) => {
        const usuarioSessao = {
            nome: usuario.nome,
            email: usuario.email
        };
    
        done(null, usuarioSessao);
    });

    passport.deserializeUser((usuarioSessao, done) => {
        done(null, usuarioSessao);
    });

    app.use(sessao({
        secret: 'daab_livraria',
        genid: function(req) {
            return uuid();
        },
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());

    app.use(passport.session());

    app.use(function (req, res, next) {
        req.passport = passport;
        next();
    });
}