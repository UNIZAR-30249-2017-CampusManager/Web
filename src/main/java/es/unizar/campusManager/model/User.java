package es.unizar.campusManager.model;

/**
 * Created by jorge on 12/03/17.
 */
public class User {
    private String email;
    private String name;

    public User(String email,String name) {
        this.email = email;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
