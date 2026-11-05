# Relationships

## THIS WAS NOT 100% done as not each table in the visualizer was explained.

## How to fill this in

1. Save your ERD screenshot as `docs/erd.png`. It will appear under **My ERD** below.
2. Count the relationship lines in your ERD. You need **one section for each line**.
3. In each section, answer the four questions.

---

## My ERD

![My ERD from the Prisma Studio Visualizer](![alt text](erd.png))

---

## Relationship #: [Table] and [Table]

**1. Which tables are linked, and what type of relationship is it?**
- The Director table is linked to the Film table in a 1 to 1 relationship.
- The Film table is connected to the Actor table in a many to many relationship.

**2. What is the cardinality in plain English?**
- Each Film has a Director.
- Each Film can have many Actors and Each Actor can have many films.

**3. How is it built in the database?**
Film is the centre of the database connecting to both directors and actors. This is the central data piece that contains all necessary data.

**4. Why did I build it this way?**
- The Film contains every model as a content to show that each film has these actors and this director
- Each actor also gets assign films to show that these actors have acted in these films
- Each director contains all of the films they have directed to show these directors have directed these films