using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyProject.Models;
using MyProject.DataBase;
using System.Data;

namespace MyProject.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<User> GetUsers()
        {
            List<User> Users = new List<User>();
            DataTable tb = cDatabase.GetTeacher();
            foreach (DataRow row in tb.Rows)
            {
                Users.Add(new User()
                {
                    lastName = row["LastName"].ToString(),
                    firstName = row["FirstName"].ToString()
                });
            };

            return Users;
        }



        [HttpPost("[action]")]
        public void SetUser([FromBody] User user)
        {
            cDatabase.SaveTeacher(user);
        }
    }


}

   