const path = require("path");
 const cloudinary = require('cloudinary').v2
 const fs = require('fs')
const olduploadProductImage = async (req, res) => {
 
    if (!req.files) {
        throw new Error('No File Added')  // or you could use your bad request error and add errors folder n stuff
    }
 
  const productImage = req.files.image;
 
  if (!productImage.mimetype.startsWith('image')) {
      throw new Error('Choose an image ONLY!')
  }
 
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
      throw new Error('max size 1MB')
  }
 
//   res.send("uploadProductImage");
 
  const imagePath = path.join(
    __dirname,
    "../public/uploads/",
    productImage.name
  );
  await productImage.mv(imagePath);
  //   console.log(productImage);
  res.status(200).json({ image: { src: `/uploads/${productImage.name}` } });
};
 
const uploadProductImage = async () => {
 const response= await cloudinary.v2.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-upload'
    }
  )

fs.unlinkSync(req.files.image.tempFilePath)
 res.status(200).json({image: {src: response.secure_url}})

}


module.exports = {
  uploadProductImage,
};
