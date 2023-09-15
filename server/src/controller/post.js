import * as postService from '../services/post'

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService();
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getPostsLimit = async (req, res) => {
  const { page, limit } = req.query;
  try {
      const response = await postService.getPostsLimitService(page, limit);
      return res.status(200).json(response);

  } catch (error) {
      return res.status(500).json({
          err: -1,
          msg: 'Failed at post controller: ' + error
      })
  }
}

export const createNewPost = async (req, res) => {
    try {
      const {
        title,
        address,
        area,
        price,
        category,
        district,
        description,
        province,
        ward,
        contact_name,
        contact_phone
      } = req.body;
      const { id } = req.user;
      if ( !id || !title || !address || !area || !price || !category || !district || !description || !province || !ward || !contact_name || !contact_phone ) {
          return res.status(400).json({
              err: 1,
              msg: 'Missing inputs'
          })
      }
      const response = await postService.createNewPostService(req.body, id);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        err: -1,
        msg: "Failed at post controller: " + error,
      });
    }
  };
  