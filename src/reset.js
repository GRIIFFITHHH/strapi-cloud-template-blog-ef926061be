module.exports = async ({ strapi }) => {
  const email = "newadmin@example.com";
  const password = "Admin123!";

  const userService = strapi.plugin("admin").service("user");

  let admin = await userService.findOne({ email });

  if (admin) {
    await userService.update(admin.id, { password });
    console.log("Password reset!");
  } else {
    await userService.create({
      email,
      firstname: "New",
      lastname: "Admin",
      password,
      isActive: true,
      roles: [1],
    });
    console.log("Admin created!");
  }
};
