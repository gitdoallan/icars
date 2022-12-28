const multer = require('multer');
const uuid = require('uuid');
const path = require('path');
const adminService = require('../services/admin.service');

const listAllReservations = async (_req, res) => {
  const result = await adminService.listAllReservations();
  res.status(200).json(result);
};

const listAllUsers = async (_req, res) => {
  const result = await adminService.listAllUsers();
  res.status(200).json(result);
};

const createNewAccount = async (req, res) => {
  const {
    email, password, name, role,
  } = req.body;
  const result = await adminService.createNewAccount({
    email, password, name, role,
  });
  res.status(201).json(result);
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  const user = { name, email, role };
  await adminService.updateUserById(id, user);
  res.status(200).json({ message: 'User updated successfully' });
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

const listAllCars = async (_req, res) => {
  const result = await adminService.listAllCars();
  res.status(200).json(result);
};

const createNewCar = async (req, res) => {
  const {
    modelId, colorId, locationId, image, price,
  } = req.body;
  const result = await adminService.createNewCar({
    modelId, colorId, locationId, image, price,
  });
  res.status(200).json(result);
};

const deleteCarById = async (req, res) => {
  const { id } = req.params;
  await adminService.deleteCarById(id);
  res.status(200).json({ message: 'Car deleted' });
};

const updateCarById = async (req, res) => {
  const { id } = req.params;
  const { image, price } = req.body;
  await adminService.updateCarById(id, { image, price });
  res.status(200).json({ message: 'Car updated' });
};

const carImageUploader = async (req, res) => {
  const allowedMimeTypes = ['image/jpeg', 'image/jpg'];
  const file = { name: uuid.v4() };
  const storage = multer.diskStorage({
    destination(_, _file, cb) {
      cb(null, 'src/images/cars/store');
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
    return res.status(200).json({ message: 'Image uploaded', path: `/images/cars/store/${file.name}${file.ext}` });
  });
};

module.exports = {
  listAllReservations,
  listAllUsers,
  createNewAccount,
  getAllReservationsByUserId,
  updateUserById,
  deleteUserById,
  carImageUploader,
  listAllCars,
  createNewCar,
  deleteCarById,
  updateCarById,
};
