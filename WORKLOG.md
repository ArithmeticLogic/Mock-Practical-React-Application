## Task 1: The Director table <number>: <date>

### What I did

- Added the model for the director table
- Added seeding for the director table

### Why I did it this way

- The model is simple containing basic information on the director
- The seed includes a variable for each created director, this was done so that each director can be connected to other tables.

### Problems I hit and how I fixed them

- N/A

### What I will do next

- Task 2


## Task 2: The Film table (one-to-many) <number>: <date>

### What I did

- Added the model for the film table
- Film table includes a director taken using the id of a director from the director model

### Why I did it this way

- Each film is given a director and each director has the films that they directed

### Problems I hit and how I fixed them

- N/A

### What I will do next

- Task 3


## Task 3: The Actor table (many-to-many) <number>: <date>

### What I did

- Added a model for an Actors table
- Connected the Actors table and the Film table, so that a film can have many actors
- Added each actor to the seed include what films they appear in

### Why I did it this way

- So that I can add many actors to 1 film

### Problems I hit and how I fixed them

- Forgot to add .id to the end of the film when I was connecting them in create actor. I fixed this by adding .id to the end of the films

### What I will do next

- Task 4 and Task 5
