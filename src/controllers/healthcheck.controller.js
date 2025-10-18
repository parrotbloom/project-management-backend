import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

/*
alternative way to handle health checks, although it is done in async-handler.js in utils folder.

const healthCheck = async (req, res, next) => {
  try {

    // sample function to fetch data from DB -- not implemented yet
    const user = await getUserFromDB();

    res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is Running" }));
  } catch (error) {
    next(error);
  }
};
*/

const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is Running" }));
});

export { healthCheck };
