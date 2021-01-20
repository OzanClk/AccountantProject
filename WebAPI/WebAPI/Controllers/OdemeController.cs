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
    public class OdemeController : ApiController
    {

        public HttpResponseMessage Get(int id)
        {
            AccountantProjectEntities db = new AccountantProjectEntities();

            var odemeler = db.OdemeTablosu.Where(x => x.userid == id).Select(p => new
            {

                p.OdemeID,
                p.OdemeAdi,
                p.OdemeTarihi,



            }).ToList();


            return Request.CreateResponse(HttpStatusCode.OK, odemeler);


        }


        public void Post([FromBody] OdemeTablosu odeme)
        {


        }

        public string Put(OdemeTablosu odeme)
        {

            return "";
        }


        public string Delete(OdemeTablosu odeme)
        {

            return "";
        }

    }
}
