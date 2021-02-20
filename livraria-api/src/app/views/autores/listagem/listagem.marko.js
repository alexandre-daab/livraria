// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/livraria$1.0.0/src/app/views/autores/listagem/listagem.marko",
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

  out.w("<h1>Listagem de Autores</h1><table id=\"autores\" class=\"table table-striped table-bordered table-hover\"><tr><td>ID</td><td>Nome</td><td>obs</td></tr>");

  var for__13 = 0;

  marko_forEach(data.autores, function(autor) {
    var keyscope__14 = "[" + ((for__13++) + "]");

    out.w("<tr id=\"autor_" +
      marko_escapeXmlAttr(autor.id) +
      "\"><td>" +
      marko_escapeXml(autor.id) +
      "</td><td>" +
      marko_escapeXml(autor.nome) +
      "</td><td>" +
      marko_escapeXml(autor.obs) +
      "</td><td><a href=\"/autores/cadastrar/" +
      marko_escapeXmlAttr(autor.id) +
      "\" class=\"fas fa-pencil-alt\" title=\"Editar\"></a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(autor.id) +
      "\" data-type=\"remocaoAutor\" class=\"fas fa-trash-alt\" title=\"Deletar\"></a></td></tr>");
  });

  out.w("</table><a href=\"/autores/cadastrar\">Inserir Novo Autor</a><script src=\"/estatico/js/remove-autor.js\"></script> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "25");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/livraria$1.0.0/src/app/views/autores/listagem/listagem.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
