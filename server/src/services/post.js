import db from "../models";
import { v4 } from "uuid";

export const getPostsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Images, as: "images" },
          { model: db.User, as: "user" },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "Ok" : "Getting posts is failed",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
export const createNewPostService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const image_id = v4();
      await db.Post.create({
        id: v4(),
        title: body.title || null,
        address: body.address || null,
        province: body.province || null,
        district: body.district || null,
        ward: body.ward || null,
        area: body.area || null,
        price: body.price || null,
        description: body.description || null,
        contact_name: body.contact_name || null,
        contact_phone: body.contact_phone || null,
        user_id: body.user_id,
        image_id,
        category: body.category || null,
        thumbnail: body.images[0] || null,
      });
      await db.Images.create({
        id: image_id,
        image: JSON.stringify(body.images),
      });
      resolve({
        err: 0,
        msg: "Create new post successfully.",
      });
    } catch (error) {
      reject(error);
    }
  });

  export const getPostsLimitService = (page, limit) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAndCountAll({
        raw: true,
        nest: true,
        offset: page * (+limit) ,
        limit: +limit,
        include: [
          { model: db.Images, as: "images" },
          { model: db.User, as: "user" },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "Ok" : "Getting posts is failed",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
