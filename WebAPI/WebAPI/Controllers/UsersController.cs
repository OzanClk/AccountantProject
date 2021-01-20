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
    public class UsersController : ApiController
    {

        public HttpResponseMessage Get(int id)
        {
            AccountantProjectEntities db = new AccountantProjectEntities();


            var users = db.Users.Where(x => x.id == id ).Select(p => new
            {
                p.id,
                p.name,
                p.password

            }).ToList();


            return Request.CreateResponse(HttpStatusCode.OK, users);


        }


        public void Post([FromBody] Users user)
        {

            try
            {
                AccountantProjectEntities db = new AccountantProjectEntities();

                var users = db.Users.Add(user);
                db.SaveChanges();

            }
            catch (Exception)
            {

            }


        }

        public string Put(Users user)
        {

            return "";
        }


        public string Delete(Users user)
        {

            return "";
        }


    }
}
