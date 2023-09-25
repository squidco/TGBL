const db = require("./db");
const User = require("../models/User");
const mongoose = require("mongoose");

const validUser = {
  email: "newuser@gmail.com",
  password: "helloworld",
};
const invalidUser = {
  email: "newusergmail",
  password: "heds",
};
beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe("User Model", () => {
  it("Should throw validation errors", async () => {
    let isError = null;
    try {
      const user = await new User(invalidUser);
      await user.save();
    } catch (err) {
      isError = err;
    }

    expect(isError).not.toBeNull();
  });

  it("Should create a user", async () => {
    const user = await new User(validUser);
    const spy = jest.spyOn(user, "save");

    await user.save();

    expect(spy).toHaveBeenCalled();

    expect(user._id).toBeDefined();

    expect(user).toMatchObject({
      email: expect.any(String),
      password: expect.any(String),
      characters: expect.any(Array),
    });
  });
});

describe("Character Subdocument", () => {
  it("Should create a valid character", async () => {
    const validCharacter = {
      characterName: "Jimothy",
      abilityScores: [
        {
          name: "Strength",
          score: 10,
          isProficient: false,
        },
        {
          name: "Dexterity",
          score: 10,
          isProficient: false,
        },
        {
          name: "Constitution",
          score: 10,
          isProficient: false,
        },
        {
          name: "Intelligence",
          score: 10,
          isProficient: false,
        },
        {
          name: "Wisdom",
          score: 10,
          isProficient: false,
        },
        {
          name: "Charisma",
          score: 10,
          isProficient: false,
        },
      ],
      background: "Outlander",
      race: "Dragonborn",
      alignment: "CG",
      experience: 0,
      inspiration: false,
      skills: [
        {
          name: "Athletics",
          ability: "Strength",
          isProficient: true,
        },
      ],
      characterLevel: 1,
      classes: [
        {
          name: "Fighter",
          level: 1,
        },
      ],
      highestSlot: 1,
      armorClass: 14,
      inventory: [],
      speed: 30,
      deathSaves: {
        fails: 0,
        successes: 0,
      },
      proficiencyBonus: 2,
      numberOfSlots: [],
      hitPoints: {
        maxHitPoints: 14,
        currentHitPoints: 14,
        maxTemporaryHitPoints: 0,
        currentTemporyHitPoints: 0,
        shapeshiftedHitPoints: 0,
        currentShapeshiftedHitPoints: 0,
      },
      spellBook: {
        cantrips: [
          {
            spell_name: "Firebolt",
            name: "firebolt",
            desc: ["Shoot fire"],
            higher_level: ["Roll more dice"],
            range: "60 Feet",
            components: ["No components"],
            ritual: false,
            duration: "Instant",
            concentration: false,
            casting_time: "Instant",
            level: "Cantrip",
            damage: { dice: "1d10", type: "Fire" },
            heal_at_slot_level: {},
            dc: {},
            area_of_effect: {},
            classes: [{}],
          },
        ],
      },
    };
    const validUser = {
      email: "newuser@gmail.com",
      password: "helloworld",
      characters: [validCharacter],
    };
    const user = await new User(validUser);

    await user.save();

    console.log(user.characters[0].skills)
    expect(user).toMatchObject({
      email: expect.any(String),
      password: expect.any(String),
      characters: expect.any(Array),
    });
  });
});
