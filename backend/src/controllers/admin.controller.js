const multer = require('multer');
const uuid = require('uuid');
const path = require('path');
const adminService = require('../services/admin.service');

const listAllReservations = async (_req, res) => {
  const result = await adminService.listAllReservations();
  res.status(200).json(result);
};

const getAllReservationsByUserId = async (req, res) => {
  const { id } = req.params;
  const result = await adminService.getAllReservationsByUserId(id);
  res.status(200).json(result);
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  await adminService.deleteUserById(id);
  res.status(200).json({ message: 'User deleted' });
};

const createNewBike = async (req, res) => {
  const {
    modelId, colorId, locationId, image, price,
  } = req.body;
  const result = await adminService.createNewBike({
    modelId, colorId, locationId, image, price,
  });
  res.status(200).json(result);
};

const deleteBikeById = async (req, res) => {
  const { id } = req.params;
  await adminService.deleteBikeById(id);
  res.status(200).json({ message: 'Bike deleted' });
};

const updateBikeById = async (req, res) => {
  const { id } = req.params;
  const {
    modelId, colorId, locationId, image, price,
  } = req.body;
  await adminService.updateBikeById(id, {
    modelId, colorId, locationId, image, price,
  });
  res.status(200).json({ message: 'Bike updated' });
};

const bikeImageUploader = async (req, res) => {
  const allowedMimeTypes = ['image/jpeg', 'image/jpg'];
  const file = { name: uuid.v4() };
  const storage = multer.diskStorage({
    destination(_, _file, cb) {
      cb(null, 'src/images/bikes/store');
    },
    filename(_, { mimetype, originalname }, cb) {
      if (!allowedMimeTypes.includes(mimetype)) {
        cb(new Error('Invalid file type'));
      }
      file.ext = path.extname(originalname);
      cb(null, `${file.name}${file.ext}`);
    },
  });
  const upload = multer({ storage });
  upload.single('image')(req, res, (err) => {
    if (err) return res.status(400).json({ message: err.message });
    return res.status(200).json({ message: 'Image uploaded', path: `/images/bikes/store/${file.name}${file.ext}` });
  });
};

module.exports = {
  listAllReservations,
  getAllReservationsByUserId,
  deleteUserById,
  bikeImageUploader,
  createNewBike,
  deleteBikeById,
  updateBikeById,
};
