// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/livraria$1.0.0/src/app/views/livros/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/estatico/css/casadocodigo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"cabecalhoPrincipal\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"cabecalhoPrincipal-navegacao col-12\"></div></div></div></header><main class=\"conteudoPrincipal\"><div class=\"container\"><h1>Cadastrar Livros</h1>");

  if (data.errosValidacao) {
    out.w("<div>");

    var for__15 = 0;

    marko_forEach(data.errosValidacao, function(erro) {
      var keyscope__16 = "[" + ((for__15++) + "]");

      out.w("<div>" +
        marko_escapeXml(erro.param) +
        " - " +
        marko_escapeXml(erro.msg) +
        "</div>");
    });

    out.w("</div>");
  }

  out.w("<form action=\"/livros\" method=\"post\">");

  if (data.livro.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.livro.id) +
      "\"></div>");
  }

  out.w("<div class=\"form-group\"><label for=\"titulo\">Titulo:</label><input type=\"text\" id=\"titulo\" name=\"titulo\" placeholder=\"informe o titulo\" value=\"" +
    marko_escapeXmlAttr(data.livro.titulo) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"subtitulo\">Sub Titulo:</label><input type=\"text\" id=\"subtitulo\" name=\"subtitulo\" placeholder=\"informe o subtitulo\" value=\"" +
    marko_escapeXmlAttr(data.livro.subtitulo) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"sinopse\">Sinopse:</label><textarea cols=\"25\" rows=\"20\" id=\"sinopse\" name=\"sinopse\" placeholder=\"fale sobre o livro\" class=\"form-control\">" +
    marko_escapeXml(data.livro.sinopse) +
    "</textarea></div><div class=\"form-group\"><label for=\"isbn\">ISBN:</label><input type=\"text\" id=\"isbn\" name=\"isbn\" placeholder=\"informe o isbn\" value=\"" +
    marko_escapeXmlAttr(data.livro.isbn) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"edicao\">Edição:</label><input type=\"text\" id=\"edicao\" name=\"edicao\" placeholder=\"informe a edição\" value=\"" +
    marko_escapeXmlAttr(data.livro.edicao) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"ano\">Ano:</label><input type=\"text\" id=\"ano\" name=\"ano\" placeholder=\"informe o ano da edicao\" value=\"" +
    marko_escapeXmlAttr(data.livro.ano) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"formato\">Formato:</label><select id=\"formato\" name=\"formato\" class=\"form-control\"><option value=\"\">Informe o formato</option>");

  var for__44 = 0;

  marko_forEach(data.formatos, function(formato) {
    var keyscope__45 = "[" + ((for__44++) + "]");

    out.w("<div>");

    if (formato.id == data.livro.formato) {
      out.w("<div><option value=\"" +
        marko_escapeXmlAttr(formato.id) +
        "\" selected>" +
        marko_escapeXml(formato.nome) +
        "</option></div>");
    } else {
      out.w("<div><option value=\"" +
        marko_escapeXmlAttr(formato.id) +
        "\">" +
        marko_escapeXml(formato.nome) +
        "</option></div>");
    }

    out.w("</div>");
  });

  out.w("</select></div><div class=\"form-group\"><label for=\"preco\">Preço:</label><input type=\"text\" id=\"preco\" name=\"preco\" placeholder=\"Informe o valor de compra\" value=\"" +
    marko_escapeXmlAttr((new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    })).format(data.livro.preco)) +
    "\" class=\"form-control\"></div><input type=\"submit\" value=\"Salvar\" class=\"btn btn-block btn-primary\"></form></div></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "55");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/livraria$1.0.0/src/app/views/livros/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
