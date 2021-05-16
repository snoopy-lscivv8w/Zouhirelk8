package demo.model.user;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.POST;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;

@RequestScoped
@Path("users")
public class UserResource {
    @Inject
    private PersonDao personDao;

    /**
     * This method creates a new user from the submitted 
     * data (firstname, lastname, username, password, email, address) by the user.
     */
    @POST
    @Path("add")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Transactional
    public Response addNewEvent(@FormParam("firstname") String firstname, 
        @FormParam("lastname") String lastname,
        @FormParam("username") String username,
        @FormParam("password") String password,
        @FormParam("email") String email, @FormParam("address") String address) {
        Person person = new Person(firstname, lastname, username, password, email, address);
        if(!personDao.findPerson(username, email).isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                           .entity("User already exists").build();
        }
        personDao.createPerson(person);
        return Response.status(Response.Status.NO_CONTENT).build();
    }

   /**
     * This method returns a specific existing/stored event in Json format
     */
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public JsonObject getPerson(@PathParam("id") int persId) {
        JsonObjectBuilder builder = Json.createObjectBuilder();
        Person person = personDao.readPerson(persId);
        if(person != null) {
            builder.add("firstname", person.getFirstname()).add("lastname", person.getLastname())
                .add("username", person.getUsername()).add("email", person.getEmail());
        }
        return builder.build();
    }
    /**
     * This method returns the existing/stored persons in Json format
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public JsonArray getPersons() {
        JsonObjectBuilder builder = Json.createObjectBuilder();
        JsonArrayBuilder finalArray = Json.createArrayBuilder();
        for (Person person : personDao.readAllPersons()) {
            builder.add("firstname", person.getFirstname()).add("lastname", person.getLastname())
                   .add("username", person.getUsername()).add("email", person.getEmail());
            finalArray.add(builder.build());
        }
        return finalArray.build();
    }

}
