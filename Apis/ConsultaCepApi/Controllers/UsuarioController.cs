using ConsultaCepApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultaCepApi.Controllers
{
  [Route("api/login")]
  [ApiController]
  public class UsuarioController : ControllerBase
  {

    // crio parametro que recebera a configuracao correspondente ao
    // usuario autorizado a acessar
    private readonly IOptions<Usuario> usuarioAutorizado;

    // sobreescrevo o construtor da controller para receber a configuracao
    // salva no json de configuracoes e disponibilizada no startup.cs > configureServices()
    public UsuarioController(IOptions<Usuario> usuario)
    {
      this.usuarioAutorizado = usuario;
    }

    [Route("logar")]
    [HttpPost]
    public IActionResult Logar(Usuario usuario)
    {

      // verifico se o usuario acessando é o usuario salvo nas configuracoes
      if (usuario.txUserName.Equals(usuarioAutorizado.Value.txUserName) &&
            usuario.txSenha.Equals(usuarioAutorizado.Value.txSenha))
      {
        return Ok(usuario);
      }
      else
      {
        return Unauthorized("");
      }

    }

  }
}
