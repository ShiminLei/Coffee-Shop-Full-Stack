# Coffee Shop Backend

## Getting Started

### Installing Dependencies

#### Python 3.7

Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

#### Virtual Enviornment

We recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organaized. Instructions for setting up a virual enviornment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

#### PIP Dependencies

Once you have your virtual environment setup and running, install dependencies by naviging to the `/backend` directory and running:

```bash
pip install -r requirements.txt
```

This will install all of the required packages we selected within the `requirements.txt` file.

##### Key Dependencies

- [Flask](http://flask.pocoo.org/)  is a lightweight backend microservices framework. Flask is required to handle requests and responses.

- [SQLAlchemy](https://www.sqlalchemy.org/) and [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/) are libraries to handle the lightweight sqlite database. Since we want you to focus on auth, we handle the heavy lift for you in `./src/database/models.py`. We recommend skimming this code first so you know how to interface with the Drink model.

- [jose](https://python-jose.readthedocs.io/en/latest/) JavaScript Object Signing and Encryption for JWTs. Useful for encoding, decoding, and verifying JWTS.

## Running the server

From within the `./src` directory first ensure you are working using your created virtual environment.

Each time you open a new terminal session, run:

```bash
export FLASK_APP=api.py;
```

To run the server, execute:

```bash
flask run --reload
```

The `--reload` flag will detect file changes and restart the server automatically.

## Tasks

### Setup Auth0

1. Create a new Auth0 Account
2. Select a unique tenant domain
3. Create a new, single page web application
4. Create a new API
    - in API Settings:
        - Enable RBAC
        - Enable Add Permissions in the Access Token
5. Create new API permissions:
    - `get:drinks-detail`
    - `post:drinks`
    - `patch:drinks`
    - `delete:drinks`
6. Create new roles for:
    - Barista
        - can `get:drinks-detail`
    - Manager
        - can perform all actions
7. Test your endpoints with [Postman](https://getpostman.com). 
    - Register 2 users - assign the Barista role to one and Manager role to the other.
    - Sign into each account and make note of the JWT.
    - Import the postman collection `./starter_code/backend/udacity-fsnd-udaspicelatte.postman_collection.json`
    - Right-clicking the collection folder for barista and manager, navigate to the authorization tab, and including the JWT in the token field (you should have noted these JWTs).
    - Run the collection and correct any errors.
    - Export the collection overwriting the one we've included so that we have your proper JWTs during review!

### Implement The Server

There are `@TODO` comments throughout the `./backend/src`. We recommend tackling the files in order and from top to bottom:

1. `./src/auth/auth.py`
2. `./src/api.py`

### JWT

Manager:

eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9VSTBPVUpHUTBNMU1qVkVRVUk1TWpCRU56bEZNekEwUkRCQ05qQTBNVEk1UVVZeU1UTXhOZyJ9.eyJpc3MiOiJodHRwczovL3NoaW1pbmxlaS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWU3NjhhNzMzZTkyYWYwYzYyNDFkYzVlIiwiYXVkIjoiY29mZmVlLXNob3AiLCJpYXQiOjE1ODQ5Mjc2NjIsImV4cCI6MTU4NDkzNDg2MiwiYXpwIjoiNmRZeDRFUUUzZkd1T2VCZ0poWm00MlV2M3pnd3ZERVoiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImRlbGV0ZTpkcmlua3MiLCJnZXQ6ZHJpbmtzLWRldGFpbCIsInBhdGNoOmRyaW5rcyIsInBvc3Q6ZHJpbmtzIl19.XRMJKXigmFqvSe-m_1dT4FuJqepy-7sKdeYEjw8o4RSy7D71ukv0AZQ3PEqxx83ppxvpO8aK--ie5lzaQFJZ3KFQ30sh91fo18ojvdp7at_OVlqGBab-P5-CVi48iuBO0xu3v_b10EZDyxtwzsmyx8ZCbZdf1t3mUCJ7k0JmeSG4bmbamGjmkRxqcRdyyHr1p4t_wg6X0bxjelWS5lCoYJMeaRu-632R9QQIRCsfKrdIsrmD_e8FOYB5rSGFmKl03ctrgOS71562DI8-wHwGJdnzHIOT2nBnZhUUOHkdyw6V_NcTdlk-RJuyAufBYy3kuzagxZvwTcCTN86WQOr2DQ

Barista:

eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9VSTBPVUpHUTBNMU1qVkVRVUk1TWpCRU56bEZNekEwUkRCQ05qQTBNVEk1UVVZeU1UTXhOZyJ9.eyJpc3MiOiJodHRwczovL3NoaW1pbmxlaS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWU3NmFjYWNlYmFmNTkwYzZkZjllNGJkIiwiYXVkIjoiY29mZmVlLXNob3AiLCJpYXQiOjE1ODQ5Mjc5NDQsImV4cCI6MTU4NDkzNTE0NCwiYXpwIjoiNmRZeDRFUUUzZkd1T2VCZ0poWm00MlV2M3pnd3ZERVoiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImdldDpkcmlua3MtZGV0YWlsIl19.VR41t-bbolrGlMnDEorENvVIR6AaYP3j_buqQlh0Kd_o_Slu_tPgahDt_9sEjuKbX-SahXWcI7HANqj-72UuF4fFgpx8wog5TwqbgklV3ltnDhEH-rnw6MBKgY6955HNwqLv0esxxAUGRVASSappErJ1xRdVIS8lFe-pejC4axvWPZu0eIgXSc7DwjduT-Gu1vVGyMJSH1yWVWFGJHmVKuhXVESuvDmB94muQL8BcCWrqRaMxAxaste2r-GEYqIvFA-8WwtjJhTUxw5gsi9t019fDfT07ZqFLOzXAL8TvEyVZqZE3mr9CiNj9wHCp2dYI8iTZwIyReXJggnyqGr5pw