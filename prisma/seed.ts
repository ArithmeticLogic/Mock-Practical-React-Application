import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  // Avoid hard-coded IDs similar too, connect: [{ id: 1 }, { id: 2 }].
  // Auto-incrementing IDs can change between database resets or seed runs.
  const artist1 = await prisma.artist.create({
    data: { name: "Test artist 1" },
  });

  const artist2 = await prisma.artist.create({
    data: { name: "Test artist 2" },
  });

  const album1 = await prisma.album.create({
    data: { title: "Test album" },
  });

  const album2 = await prisma.album.create({
    data: { title: "Test album 2" },
  });

  const loFi = await prisma.genre.create({
    data: { name: "Lo-fi" },
  });

  const piano = await prisma.genre.create({
    data: { name: "Piano" },
  });

  // createMany does not support nested connect operations
  await prisma.song.create({
    data: {
      title: "Test song 1",
      durationSeconds: 160,
      artists: {
        connect: [{ id: artist1.id }, { id: artist2.id }],
      },
      genre: {
        connect: [{ id: piano.id }],
      },
    },
  });

  await prisma.song.create({
    data: {
      title: "Test song 2",
      durationSeconds: 200,
      artists: {
        connect: [{ id: artist2.id }],
      },
      album: {
        connect: { id: album1.id },
      },
      genre: {
        connect: [{ id: loFi.id }, { id: piano.id }],
      },
    },
  });

  await prisma.song.create({
    data: {
      title: "Test song 3",
      durationSeconds: 100,
      artists: {
        connect: [{ id: artist1.id }, { id: artist2.id }],
      },
      album: {
        connect: { id: album2.id },
      },
      genre: {
        connect: [{ id: loFi.id }],
      },
    },
  });

  await prisma.song.create({
    data: {
      title: "Test song 4",
      durationSeconds: 230,
      artists: {
        connect: [{ id: artist1.id }],
      },
      album: {
        connect: { id: album1.id },
      },
      genre: {
        connect: [{ id: loFi.id }],
      },
    },
  });

  await prisma.user.create({
    data: { name: "testUser1" },
  });
}

main().finally(() => prisma.$disconnect());
