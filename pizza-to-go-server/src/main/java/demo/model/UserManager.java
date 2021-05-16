package demo.model;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.inject.Singleton;

@Singleton
public class UserManager
{  
   private Map<String, User> users = new HashMap<>();
   
   
   public UserManager()
   {
      super();
      users.put("user", new User("user","password"));
   }
   
   public Optional<User> lookupUser(String username)
   {
      return this.users.values().stream().filter( user -> user.getUsername().equals(username) ).findFirst();
   }
   
   public void register(User user)
   {
      if( this.lookupUser( user.getUsername() ).isPresent() )
      {
         RuntimeException exce = new RuntimeException("User " + user + " exists");
         throw exce;
      }
      else
      {
         String username = user.getUsername();
         this.users.put( username, user );
         return;
      }
   }
}
