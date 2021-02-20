// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/livraria$1.0.0/src/app/views/livros/listagem/listagem.marko",
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

  out.w("<h1>Listagem de Livros</h1><table id=\"livros\" class=\"table table-striped table-bordered table-hover\"><tr><td>ID</td><td>Título</td><td>SubTítulo</td><td>Sinopse</td><td>ISBN</td><td>Edição</td><td>Ano</td><td>Preço</td></tr>");

  var for__18 = 0;

  marko_forEach(data.livros, function(livro) {
    var keyscope__19 = "[" + ((for__18++) + "]");

    out.w("<tr id=\"livro_" +
      marko_escapeXmlAttr(livro.id) +
      "\"><td>" +
      marko_escapeXml(livro.id) +
      "</td><td>" +
      marko_escapeXml(livro.titulo) +
      "</td><td>" +
      marko_escapeXml(livro.subtitulo) +
      "</td><td>" +
      marko_escapeXml(livro.sinopse) +
      "</td><td>" +
      marko_escapeXml(livro.isbn) +
      "</td><td>" +
      marko_escapeXml(livro.edicao) +
      "</td><td>" +
      marko_escapeXml(livro.ano) +
      "</td><td style=\"text-align:right;\">" +
      marko_escapeXml((new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      })).format(livro.preco)) +
      "</td><td><a href=\"/livros/cadastrar/" +
      marko_escapeXmlAttr(livro.id) +
      "\" class=\"fas fa-pencil-alt\" title=\"Editar\"></a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(livro.id) +
      "\" data-type=\"remocao\" class=\"fas fa-trash-alt\" title=\"Deletar\"></a></td></tr>");
  });

  out.w("</table><a href=\"/livros/cadastrar\">Inserir Novo Livro</a><script src=\"/estatico/js/remove-livro.js\"></script> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "35");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/livraria$1.0.0/src/app/views/livros/listagem/listagem.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
