class LoginRouter {
  constructor(authUseCase) {
    this.authUseCase = authUseCase
  }
  route(httpRequest) {
    if (!httpRequest.body.email) return HttpResponse.badRequest("Email")
    this.authUseCase.auth(httpRequest.body.email)
  }
}

class HttpResponse {
  static badRequest(nomeParametro) {
    return {
      statusCode: 400,
      mensagem: new ParametroPerdidoError(nomeParametro)
    }
  }

  static serverRequest() {
    return { statusCode: 500 }
  }
}

class ParametroPerdidoError extends Error {
  constructor(nomeParametro) {
    super(`Parametro Perdido :: ${nomeParametro}`)
  }
}

const makeSut = () => {
  //autentica o usuario
  class AuthUseCaseSpy {
    auth(email) {
      this.email = email
    }
  }

  const authUseCaseSpy = new AuthUseCaseSpy()

  const sut = new LoginRouter(authUseCaseSpy)
  return {
    sut,
    authUseCaseSpy
  }
}

describe("Que funcionalidade eu vou testar", () => {
  test("Que teste eu estou fazendo", () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        password: "any_pass"
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.mensagem).toEqual(new ParametroPerdidoError("Email"))
  })

  test("Validar se Auth recebe email e senha", () => {
    const { sut, authUseCaseSpy } = makeSut()
    const httpRequest = {
      body: {
        email: "any_mail@mail.com",
        password: "any_pass"
      }
    }

    sut.route(httpRequest)
    expect(authUseCaseSpy.email).toBe(httpRequest.body.email)
  })
})
