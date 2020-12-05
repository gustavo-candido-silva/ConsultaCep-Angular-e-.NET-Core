using ConsultaCepApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

    [Route("logar")]
    [HttpPost]
    public IActionResult Logar(Usuario usuario)
    {

      return Ok(new
      {
        Usuario = usuario
      });

    }

  }
}
