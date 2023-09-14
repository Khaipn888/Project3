import db from "../models";
import { v4 } from "uuid";

export const getPostsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "Ok" : "Getting posts is faild",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
export const createNewPostService = (body, user_id) =>
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
        user_id,
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
  })