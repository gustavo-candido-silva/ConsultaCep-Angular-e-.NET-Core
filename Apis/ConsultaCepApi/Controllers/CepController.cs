using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConsultaCepApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text.Json;
using Microsoft.Extensions.Options;

namespace ConsultaCepApi.Controllers
{
  [Route("api/Cep")]
  [ApiController]
  public class CepController : ControllerBase
  {

    [Route("Consultar")]
    [HttpGet]
    public async Task<IActionResult> ConsultarAsync(string txCep)
    {


      var baseUrl = "https://viacep.com.br/ws/";
      string requestUrl = txCep + "/json";

      var client = new HttpClient { BaseAddress = new Uri(baseUrl) };

      var json = await client.GetStreamAsync(requestUrl);
      Endereco endereco = await JsonSerializer.DeserializeAsync<Endereco>(json);

      return Ok(endereco);
    }

  }
}
