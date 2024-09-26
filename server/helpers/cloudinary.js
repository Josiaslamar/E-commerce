const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: "dyu7h3loo",
    api_key: "795326188382871",
    api_secret: "s77nYh4impuqlyBy6jyatjKCKEk"
});

const storage = new multer.memoryStorage();
async function imageUploadUtils(file) {
    const result = await cloudinary.uploader.upload(file, { resource_type: "auto" })
    return result;
}

const upload = multer({ storage });
module.exports = { upload, imageUploadUtils }
