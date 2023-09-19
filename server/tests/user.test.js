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
