const mongo = require("./db");

const createUserRoute = async route => {
  const response = { status: false };
  try {
    const now = new Date();
    const label = `${now.toISOString()}`;
    await mongo
      .db()
      .collection("userRoutes")
      .insertOne({ label, route, createdAt: now });
    response.status = true;
    response.message = "Added the user route successfully.";
  } catch (error) {
    console.error(error);
    response.status = false;
    response.message = "Failed to add the user route.";
  } finally {
    return response;
  }
};

const readUserRoute = async () => {
  const response = { status: false };
  try {
    const routes = await mongo
      .db()
      .collection("userRoutes")
      .find({})
      .sort({ createdAt: 1 })
      .toArray();
    response.status = true;
    response.data = routes;
  } catch (error) {
    console.error(error);
    response.status = false;
    response.message = "Failed to fetch the user routes.";
  } finally {
    return response;
  }
};

module.exports = {
  createUserRoute,
  readUserRoute
};
