using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultaCepApi.Models
{
  public class Endereco
  {
    public string txCep { get; set; }
    public string txLogradouro { get; set; }
    public string txNumero { get; set; }
    public string txComplemento { get; set; }
    public string txBairro { get; set; }
    public string txCidade { get; set; }
    public string txEstado { get; set; }
  }
}
