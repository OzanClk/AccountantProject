using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;
using System.Data.Entity;

namespace WebAPI.Controllers
{
    public class GelirGiderController : ApiController
    {

        public HttpResponseMessage Get(int id)
        {
            
            AccountantProjectEntities db = new AccountantProjectEntities();
            
            var gelirGider = db.gelirGiderTablosu.Where(x => x.userid == id).Select(p => new
            {
               
                p.gelirGiderID,
                p.HarcamaAdi,
                p.HarcamaTutari,
                p.GelirAdi,
                p.GelirTutari,
                
           }).ToList();


            return Request.CreateResponse(HttpStatusCode.OK, gelirGider);


        }


        public void Post([FromBody] gelirGiderTablosu gelirGider)
        {


        }

        public string Put(gelirGiderTablosu gelirGider)
        {

            return "";
        }


        public string Delete(gelirGiderTablosu gelirGider)
        {

            return "";
        }



    }
}
