using MyProject.Models;
using System.Data;
using System.Data.SqlClient;

namespace MyProject.DataBase
{
    public static class cDatabase
    {
        private static string connectionString = "Data Source=DESKTOP-MAGJ7HQ\\SQLEXPRESS;Initial Catalog=YTEncyclopedia;User Id=sa;Password=talage;";
        private static cDatabaseAccess dbo = new cDatabaseConn(connectionString).dbo;

        public static DataTable GetTeacher()
        {
            SqlParameter[] parameters = new SqlParameter[] { };
            return dbo.RunProcedure("SP_TEACHER_SelectAll", parameters, "TEACHER").Tables[0];
        }

        public static void SaveTeacher(User teacher)
        {
            SqlParameter[] parameters = new SqlParameter[] {
                new SqlParameter("FirstName", teacher.firstName),
                new SqlParameter("LastName", teacher.lastName),
            };
            dbo.RunProcedure("SP_TEACHER_Insert", parameters, "TEACHER");
        }
    }
}