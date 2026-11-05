import "dotenv/config";
import prisma from "../lib/prisma";

async function main() {
  // Delete existing data, so the script can be run more than once.
  await prisma.film.deleteMany();
  await prisma.director.deleteMany();
  await prisma.actor.deleteMany()

  // Directors
  const nolan = await prisma.director.create({
    data: { name: "Christopher Nolan", nationality: "British" },
  });

    const gerwig = await prisma.director.create({
    data: { name: "Greta Gerwig", nationality: "American" },
  });

    const villeneuve = await prisma.director.create({
    data: { name: "Denis Villeneuve", nationality: "Canadian" },
  });

  // Films
  const inception = await prisma.film.create({
    data: { title: "Inception", releaseYear: 2010, directorId: nolan.id },
  });

  const interstellar = await prisma.film.create({
    data: { title: "Interstellar", releaseYear: 2014, directorId: nolan.id },
  });


  const oppenheimer = await prisma.film.create({
    data: { title: "Oppenheimer", releaseYear: 2023, directorId: nolan.id },
  });

  const littleWomen = await prisma.film.create({
    data: { title: "Little Women", releaseYear: 2019, directorId: gerwig.id },
  });

  const dune = await prisma.film.create({
    data: { title: "Dune", releaseYear: 2021, directorId: villeneuve.id },
  });

  // Actors
await prisma.actor.create({
  data: {
    name: "Leonardo DiCaprio",
    birthYear: 1974,
    films: { connect: [{ id: inception.id }] },
  },
});

// Actors
await prisma.actor.create({
  data: {
    name: "Cillian Murphy",
    birthYear: 1976,
    films: { connect: [{ id: inception.id }, {id: oppenheimer.id}] },
  },
});

await prisma.actor.create({
  data: {
    name: "Matt Damon",
    birthYear: 1970,
    films: { connect: [{ id: interstellar.id }, {id: oppenheimer.id}] },
  },
});

await prisma.actor.create({
  data: {
    name: "Timothée Chalamet",
    birthYear: 1995,
    films: { connect: [{ id: interstellar.id }, {id: littleWomen.id}, {id: dune.id}] },
  },
});

await prisma.actor.create({
  data: {
    name: "Florence Pugh",
    birthYear: 1996,
    films: { connect: [{id: oppenheimer.id}, {id: littleWomen.id}] },
  },
});

  console.log("Seeding finished.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());