package demo.model;


public class User
{
   private String username;
   private String password;
   
   private NoteContainer notes = new NoteContainer();
   
   public User()
   {
      
   }
   
   public User(String username, String password)
   {
      super();
      this.username = username;
      this.password = password;
   }
   
   public NoteContainer getNotes()
   {
      return this.notes;
   }

   public String getUsername()
   {
      return username;
   }

   public void setUsername(String username)
   {
      this.username = username;
   }

   public String getPassword()
   {
      return password;
   }

   public void setPassword(String password)
   {
      this.password = password;
   }

   
   
   @Override
   public int hashCode()
   {
      final int prime = 31;
      int result = 1;
      result = prime * result + ((username == null) ? 0 : username.hashCode());
      return result;
   }

   @Override
   public boolean equals(Object obj)
   {
      if (this == obj)
         return true;
      if (obj == null)
         return false;
      if (getClass() != obj.getClass())
         return false;
      User other = (User) obj;
      if (username == null)
      {
         if (other.username != null)
            return false;
      } else if (!username.equals(other.username))
         return false;
      return true;
   }

   @Override
   public String toString()
   {
      return "User [username=" + username + ", password=" + password + "]";
   }
}
