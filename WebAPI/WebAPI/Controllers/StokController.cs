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
    public class StokController : ApiController
    {

        public HttpResponseMessage Get(int id)
        {
            AccountantProjectEntities db = new AccountantProjectEntities();

            var stok = db.stokTablosu.Where(x => x.userid == id).Select(p => new
            {


                p.stokID,
                p.UrunAdi,
                p.StokAdedi


            }).ToList();


            return Request.CreateResponse(HttpStatusCode.OK, stok);


        }


        public void Post([FromBody] stokTablosu stok)
        {

            AccountantProjectEntities db = new AccountantProjectEntities();

            db.stokTablosu.Add(stok);

            db.SaveChanges();


        }

        public string Put(stokTablosu stok)
        {



            return "";
        }


        public string Delete(stokTablosu stok)
        {

            return "";
        }



    }
}
